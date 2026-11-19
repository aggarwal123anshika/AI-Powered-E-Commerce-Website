// import { v2 as cloudinary } from 'cloudinary';
// import fs from 'fs'

// const uploadOnCloudinary = async (filePath) => {
//     cloudinary.config({
//         cloud_name : process.env.CLOUDINARY_NAME,
//         api_key : process.env.CLOUDINARY_API_KEY,
//         api_secret : process.env.CLOUDINARY_API_SECRET
//     });
//     try {
//         if(!filePath) {
//         return null;
//     }
//     const uploadResult = await cloudinary.uploader.upload(filePath)
//     fs.unlinkSync(filePath)
//     return uploadResult.secure_url

//     } catch (error) {
//         fs.unlinkSync(filePath)
//         console.log(error)
//     }
// }
// export default uploadOnCloudinary;




import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filePath) => {
    if (!filePath) {
        throw new Error("Image file path is missing");
    }

    try {
        const uploadResult = await cloudinary.uploader.upload(filePath);

        return uploadResult.secure_url;

    } catch (error) {
        console.log("Cloudinary Upload Error:", error);
        throw error;

    } finally {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};

export default uploadOnCloudinary;