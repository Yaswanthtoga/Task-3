import express from "express";
import todoList from "../model/todo.js";
import taskList from "../model/taskList.js";
import mongoose from "mongoose";

const router = express.Router();

// Create a Todolist
router.post("/create-todo/:id", async(req,res)=>{
    const { id } = req.params;
    try {
        const data = new todoList({...req.body,taskId:id});
        const result = await data.save();

        await taskList.findByIdAndUpdate(id,{ $push:{ todos:result._id } });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json("Server Failed");
    }
});

// Delete TodoList
router.delete("/:id", async(req,res)=>{
    const { id } = req.params;
    try {
        const todo = await todoList.findOne({ _id:new mongoose.Types.ObjectId(id) });
        if(!todo)res.status(404).json("Not Found");

        // TaskList Todo Array Delete
        const taskId = new mongoose.Types.ObjectId(todo.taskId);

        await taskList.updateOne({ _id:taskId },{
            $pull:{
                todos:id
            }
        });

        // Todo List Deletion
        const todoId = new mongoose.Types.ObjectId(id);

        await todoList.findByIdAndDelete(todoId);
        res.status(200).json("Deleted Successfully");
    } catch (error) {
        res.status(500).json("Server Failed");
    }
});

// get all todos
router.get("/:id", async(req,res)=>{
    try {
        const data = await todoList.find({ taskId:req.params.id });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json("Server Failed");
    }
});

// Update the Todo
router.put("/:id",async(req,res)=>{
    try {
        await todoList.findOneAndUpdate({ _id:new mongoose.Types.ObjectId(req.params.id) },req.body,{new:true});
        res.status(200).json("Updated Successfully");
    } catch (error) {
        res.status(500).json("Server Failed");
    }
})



export default router;