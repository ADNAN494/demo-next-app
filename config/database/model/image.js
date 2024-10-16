import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Changed 'require' to 'required'
    },
    data: {
        type: Buffer,
        required: true  // Changed 'require' to 'required'
    },
    contentType: {
        type: String,
        required: true  // Changed 'require' to 'required'
    }
});

export const Image = mongoose.models.image || mongoose.model('image', ImageSchema);
