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

route.post('/delete',(req,res,next)=>{
    console.log(req.body.eleDel)
    let removeItem = req.body.eleDel ;

    for(let i=0 ; i<todoArray.length ; i++){
        if(todoArray[i].task == removeItem){
            todoArray.splice(i, 1)
        }
    }
    /*todoArray.push(
        {task:req.body.task}
    )*/
    res.send(todoArray)
})

module.exports = route