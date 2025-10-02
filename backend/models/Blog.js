import mongoose from 'mongoose'
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    authId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },

    
    // categoryId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true,
    // },
    
    
}, { timeStamps: true})

export default mongoose.model('Blog', blogSchema)