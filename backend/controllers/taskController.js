const asyncHandler = require('express-async-handler') ; 
const Task=require('..//models//taskModel')

const getTasks =asyncHandler( async(req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks);
    } )
    
    const setTask =asyncHandler( async(req, res) => {
        const task = await Task.create({ text: req.body.text })
        res.status(200).json(task);
        console.log(req.body)
        console.log(res.body)
    })
        const updateTask =asyncHandler( async(req, res) => {
            try {
            const task = await Task.findById(req.params.id);
            if (!task) {
                res.status(400);
                throw new Error('Task not found');
            }
            const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(updatedTask);
        }
            catch (error) {
                res.status(400).json({ message: 'Invalid task ID' });

              }
            
        })
        const deleteTask =asyncHandler( async(req, res) => {
            try {
            const task = await Task.findById(req.params.id)            
            if (!task) {
            res.status(400)
            throw new Error('Task not found')
            }
            await Task.findByIdAndDelete(req.params.id)
            res.status(200).json({ id: req.params.id })
        }
        catch(error) { res.status(400).json({ message: 'Invalid task ID' }); }
        })
            
        
    module.exports = {getTasks , setTask , updateTask , deleteTask}
    
