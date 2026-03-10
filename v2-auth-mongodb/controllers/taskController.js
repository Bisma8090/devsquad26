const Task = require("../models/Task")

// GET ALL TASKS
exports.getAllTasks = async (req,res)=>{
 try{

 const tasks = await Task.find({ user:req.user })

 res.json({
  success:true,
  data:tasks
 })

 }catch(err){
  res.status(500).json({message:err.message})
 }
}


exports.getTaskById = async (req,res)=>{
 try{
   console.log("REQ USER:", req.user); // JWT se id
   console.log("TASK ID:", req.params.id);

   const task = await Task.findOne({
     _id: req.params.id,
     user: req.user
   })

   if(!task){
     console.log("Task not found!");
     return res.status(404).json({
       success:false,
       message:"Task not found"
     })
   }

   res.json({
     success:true,
     data:task
   })

 }catch(err){
   console.log(err);
   res.status(500).json({message:err.message})
 }
}


// CREATE TASK
exports.createTask = async (req,res)=>{

 try{

 const {title,description} = req.body

 const task = await Task.create({
  title,
  description,
  user:req.user
 })

 res.status(201).json({
  success:true,
  data:task
 })

 }catch(err){
  res.status(500).json({message:err.message})
 }

}


// UPDATE TASK
exports.updateTask = async (req,res)=>{

 try{

 const task = await Task.findOneAndUpdate(
  {_id:req.params.id, user:req.user},
  req.body,
  {new:true}
 )

 if(!task){
  return res.status(404).json({
   success:false,
   message:"Task not found"
  })
 }

 res.json({
  success:true,
  data:task,
  message:"Task updated"
 })

 }catch(err){
  res.status(500).json({message:err.message})
 }

}


// DELETE TASK
exports.deleteTask = async (req,res)=>{

 try{

 const task = await Task.findOneAndDelete({
  _id:req.params.id,
  user:req.user
 })

 if(!task){
  return res.status(404).json({
   success:false,
   message:"Task not found"
  })
 }

 res.json({
  success:true,
  message:"Task deleted"
 })

 }catch(err){
  res.status(500).json({message:err.message})
 }

}