import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Multer from "multer";
const storage = new Multer.memoryStorage();
export const upload = Multer({
  storage: storage,
});
dotenv.config();
export const uploadImage = async (req, res) => {
  cloudinary.config({
    secure: true,
    cloud_name: process.env.Cloudinary_Cloud_Name,
    api_key: process.env.Cloudinary_Api_Key,
    api_secret: process.env.Cloudinary_Api_Secret,
    upload_preset: process.env.Cloudinary_Upload_Preset,
  });
  try {
    let dataURI;
    let b64 = Buffer.from(req.file.buffer).toString("base64");
    dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      secure: true,
    };
    const result = await cloudinary.uploader.upload(dataURI, options);
    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
  }
};
