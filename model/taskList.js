import mongoose from "mongoose";

const TaskListSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    todos:{
        type:[String]
    }
},{timestamps:true});

export default mongoose.model("TaskList", TaskListSchema);