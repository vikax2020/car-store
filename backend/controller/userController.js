import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import Token from "../Token/TokenGen.js"
import imageUploader from "../Helper/imageUploader.js"


export const userSignup = async (req, res) => {
    try {
        const findEmail = await userModel.findOne({ email: req.body.email })
        console.log(findEmail)
        if (findEmail) {
            return res.json("User already exist")
        } else {

            console.log(req.files ,"filesss")

            if(req.files?.image?.name){
                req.body.image = imageUploader(req.files.image ,"userImages" )
            }
            
            const encPass = await bcrypt.hash(req.body.password, 10)
            console.log(encPass)
            const dataaa = await userModel.create({ ...req.body, password: encPass },
              
            )


            const tokenCall = await Token(dataaa._id)
            dataaa.token = tokenCall.tokenGen
            dataaa.loginTime = tokenCall.tokenverify.iat
            dataaa.save()


            return res.json({
                    success: true,
                    status: 200,
                    message: "signup sucessfully",
                    body: dataaa
                })
        }

    } catch (error) {
        console.log(error)
    }
}


export const userLogin = async (req, res) => {
    try {
        const findEmail = await userModel.findOne({ email: req.body.email })
        console.log(findEmail, "findEmail")
        if (!findEmail) {
            return res.json({
                success: false,
                status: 404,
                message: "email not found",
                body: {}
            })
        } else {
            const checkPass = await bcrypt.compare(req.body.password, findEmail.password)
            console.log(checkPass, "checkPass")
            if (checkPass === false) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "Passsword is not correct",
                    body: {}
                })
            } else {
              
                const tokenCall = await Token(findEmail._id)
                findEmail.token = tokenCall.tokenGen
                findEmail.loginTime = tokenCall.tokenverify.iat
                findEmail.save()

                return res.json({
                    success: true,
                    status: 200,
                    message: "login sucessfully",
                    body: findEmail
                })
            }
        }

    } catch (error) {
        console.log(error)
    }
}


export const findall = async(req,res)=>{
   try {
     const getData = await userModel.find()

     const allusers = getData.map((e)=>{
        return {
            ...e.toObject(),
            pic:`http://localhost:4567/Images/userImages/${e?.image||"hii"}`
        }
     })
    //  {     console.log(allusers,"alluserfsssws")}
    //  console.log(e,"Eee")
    return res.json({
        sucesss:true,
                    status:200,
                    message:"alldata",
                    body:allusers
    })
   } catch (error) {
    console.log(error,"error")
}
}


export const deleteuser = async(req,res)=>{
   try {
     const deleteUser= await userModel.findByIdAndDelete (req.params.id);
     console.log(deleteUser,"deleteuserparams");

     return res.json(
       { status:200,
        success:false,
        message:"delete data",
        body: deleteUser
       }
     );
        
   } catch (error) {
    console.log(error,"error");

    return res.json ({
        status:400,
        success:true,
        msg:"delete user",
        body: {},
   });
}
}

export const findUserByParms = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        const allUser={
            ...user.toObject(),
            pic:`http://localhost:4567/Images/userImages/${user.image}`
        };
        
                return res.json({
                    success: true,
                    status: 200,
                    message: "user data",
                    body: allUser
                })

    } catch (error) {
        console.log(error,"finduserbypharam error");

         return res.json({
                    success: false,
                    status: 400,
                    message: "finduserByParams error",
                    body: {}
                })


    }
}