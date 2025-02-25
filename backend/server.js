import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudianry from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"

const app = express()
const port = process.env.PORT || 4000;
connectDB()
connectCloudianry()

app.use(express.json())
app.use(cors())

//api endpoints

app.use("/api/admin", adminRouter)
// localhost:4000/api/admin/add-doctor

app.get("/" , (req,res)=> {
    res.send("API working greatlyyy")
})

app.listen(port , ()=>("Server started ", port))