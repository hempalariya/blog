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
    image: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',   
        // required: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // likes: {
    //     type: Number,
    //     default: 0,
    // },
    // dislikes: {
    //     type: Number,
    //     default: 0,
    // },

    isPublished: {
        type: Boolean,
        default: false,
    },
    
    
    
}, { timestamps: true})

export default mongoose.model('Blog', blogSchema)