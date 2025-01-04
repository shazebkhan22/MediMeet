import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import DoctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken"



const addDoctor = async (req,res) => {
    try {

        const {name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file

        //checking field for all data 

        if(!name || !email || !password || !address | !speciality || !degree || !fees || !experience || !about ){
            return res.json({success: false, message:"Missing details"})
        }

        //validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false, message: "Please enter a valid email"})
        }

        //validating strong password
        if (password.length < 8){
            res.json({ success:false, message:"Please enter a strong password"})
        }

        //hasinh doctor passsword
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //upload image to lcoudinary 
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()

        }

        const newDoctor = new DoctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true, message: "Doctor Added"})

        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}


//API for admin login

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            // Include meaningful data in the payload
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addDoctor, loginAdmin };
