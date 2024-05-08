import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    titulo:{
        type:String,
        required: true
    },
    categoria:{
        type:String,
        required: true
    },
    texto:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default: 'none'
    },
    estado:{
        type: Boolean,
        default: true
    }
})

export default mongoose.model('Post', PostSchema)