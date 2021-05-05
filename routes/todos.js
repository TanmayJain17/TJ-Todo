const route = require('express').Router()

let todoArray=[]

route.get('/',(req,res,next)=>{
    res.send(todoArray)
})
route.post('/',(req,res,next)=>{
    todoArray.push(
        {task:req.body.task}
    )
    res.send(todoArray)
})
module.exports = route