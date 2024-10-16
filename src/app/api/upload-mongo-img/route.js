import mongoose from "mongoose"
import { connection } from "../../../../config/database/db_config";
import { Image } from "../../../../config/database/model/image";
import { NextResponse } from "next/server";


export const GET = async (req,res)=>{
    try {
        await mongoose.connect(connection);
        const images = await Image.find().select('name data contentType');
        return NextResponse.json({message:'Successfully fetched', status: 200, images: images});
    } catch (error) {
        return NextResponse.json({message:'Failed fetched', status: 400});
    }
}
export const POST = async (req) => {
    try {
        await mongoose.connect(connection);
        const data = await req.formData(); 
        const file = data.get('file');
    
        if (!file) {
            return NextResponse.json({ response: 'File not found', success: false });
        }
    
        const bufferData = await file.arrayBuffer();
        const buffer = Buffer.from(bufferData);
        const newImage = new Image({
            name: file.name,
            data: buffer,
            contentType: file.type
        });
        await newImage.save();
        return NextResponse.json({ response: "Successfully Uploaded", success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ response: error.message, success: false }); 
    }
}


