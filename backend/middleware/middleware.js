import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";

const middleware = async(req,res,next)=>{
   try {
     const token = req.headers.authorization;
    console.log(token,"token" )
    
    const splitToken = token.split(" ")[1]
    console.log(splitToken , "extracted token")


    const tokenVerify = jwt.verify(splitToken,process.env.SECKEY)
    console.log(tokenVerify ,"tokenverify")  

    const userGet = await userModel.findById({_id:tokenVerify.id})
    console.log(userGet,"userget")
 
    if(splitToken !== userGet.token){
        return res.json({
            success:false,
            msg:"please login again",
            status:400,
            body:{}
            
        })
    }
    else{
        req.user = userGet;
        next()
    }

   } catch (error) {
    console.log(error)
   }
}
export default middleware;