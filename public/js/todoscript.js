$(
    function() {
        let inptTask = $('#inptTask')
        let btnAdd = $('#btnAdd')
        let ulList = $('#ulList')
        let btnDelete = $('#btnDelete')
        
        

        

        btnAdd.click(
            function() {
                ulList.empty()
                let newTodo = inptTask.val()
                console.log(newTodo)

                $.post('/todos',{task:newTodo},(data)=>{
                    for(let i=0;i<data.length;i++){
                        
                        ulList.append( $('<li></li>').attr('id', 'q' + i).text(data[i].task))
                    }
                })
                

            })
            
        btnDelete.click(function(){
             
                    $("li").each(function(index) {
                    console.log(index + ": " + $(this).text());
                    let delBtn = $("<input/>").attr({class:"xBtn",type:"button",value:"❌",}).attr('id','d'+index)
                    $(this).append(delBtn)
                    
                        delBtn.click(function(){
                            let delVal = $(this).parent().text()
                            console.log(delVal)
                            $(this).parent().remove();
                            $.post('/todos/delete',{eleDel:delVal},(data)=>{
                            console.log('deleting my self')
                            
                        })
                    }) 
                    



                });
                
            

            

        })

        


            
            
})
        
    
