import express from "express";
import taskList from "../model/taskList.js";
import mongoose from "mongoose";

const router = express.Router();

// Create a Tasklist
router.post("/create-task", async(req,res)=>{
    try {
        const data = new taskList(req.body);
        const result = await data.save();

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json("Server Failed");
    }
})

// get all Tasklist
router.get("/",async(req,res)=>{
    try {
        const data = await taskList.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json("Server Failed");
    }
});

// Get a Specific TaskList
// router.get("/:id",async(req,res)=>{
//     try {
//         const data = await taskList.findOne({ _id:new mongoose.Types.ObjectId(req.params.id) });
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json("Server Failed");
//     }
// })


export default router;