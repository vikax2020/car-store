import express from "express";
import dotenv from 'dotenv'
import { conn } from "./connections/dbConnects.js";
import userRou from "./routes/userRoute.js";
import fileUpload from "express-fileupload";
import cors from "cors";
import {fileURLToPath} from "url"
import path from "path" 
import proRou from "./routes/productRoute.js";
import cartRou from "./routes/cartRoute.js";


const __filename = fileURLToPath(import.meta.url)
console.log(__filename , "filename")
const __dirname = path.dirname(__filename)
console.log(__dirname , "dirname")


dotenv.config()
const app= express()
app.use("/Images" , express.static(path.join(__dirname,"Public/Images")))
app.use(cors())

conn()
app.use(fileUpload())
app.use(express.json())
const port = process.env.PORT
app.use("/",userRou)
app.use("/",proRou)
app.use("/",cartRou)

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

