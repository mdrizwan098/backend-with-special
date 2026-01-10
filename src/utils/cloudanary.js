import { v2 as cloudnary } from "cloudinary"
// import { response } from "express";
import fs from "fs"

cloudnary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET
});

const uploadCloudnary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        // upload the file on cloudnary
        const response = await cloudnary.uploader.upload(localFilePath, { resource_type: "auto" })


        //file has been uploaded sucessfully

        console.log("file is uploaded on cloudanry",
            response.url
        );
        return response;
    } catch (error) {
fs.unlinkSync(localFilePath) // rremove the locally saved temporarily file as the upload  operation got failed
return null;
    }
}



export {uploadCloudnary}