$(
    function() {
        let inptTask = $('#inptTask')
        let btnAdd = $('#btnAdd')
        let ulList = $('#ulList')  

        

        btnAdd.click(
            function() {
                ulList.empty()
                let newTodo = inptTask.val()
                console.log(newTodo)

                $.post('/todos',{task:newTodo},(data)=>{
                    for(let tsk of data){
                        ulList.append('<li>'+ tsk.task+'</li>')
                    }
                })

                })
            
        
    }
)