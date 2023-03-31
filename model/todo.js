import mongoose from "mongoose";

const TodoListSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"
    },
    taskId:{
        type:String
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    // position:{
    //     type:Number,
    //     required:true
    // }
},{timestamps:true});

export default mongoose.model("TodoList", TodoListSchema);