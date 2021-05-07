const route = require('express').Router()

let todoArray=[]
let completeArray = []
route.get('/',(req,res,next)=>{
    res.send(todoArray)
})
route.post('/',(req,res,next)=>{
    todoArray.push(
        {task:req.body.task
         
        }
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
    
    res.send(todoArray)
})

route.post('/complete',(req,res,next)=>{
    console.log(req.body.compVal)
    let removeItem = req.body.compVal ;

    for(let i=0 ; i<todoArray.length ; i++){
        if(todoArray[i].task == removeItem){
            todoArray.splice(i, 1)
        }
    }
    completeArray.push(
        {compTask:req.body.compVal}
    )
    res.send(completeArray)
})

module.exports = route