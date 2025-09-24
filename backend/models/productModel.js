import mongoose from "mongoose"

const productSchema= new mongoose.Schema(
    {
       name:{type:String,default:""},
       description:{type:String,default:""},
       token:{type:String,default:""},
       catagory:{type:String,default:""},
       brand:{type:String,default:""},
       price:{type:Number,default:0},
       image:{type:String,default:""}
    },
    {timestamps:true}
)
const productModel= new mongoose.model("product",productSchema)
export default productModel