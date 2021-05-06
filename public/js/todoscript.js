$(document).ready(
    function(){
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
            let flag=1
            
        btnDelete.click(function(){
            if(flag==1){
                
                flag=0
            
                let doneDel = $('<input/>').attr({id:'btnDoneDel',type:'button'}).attr('value','✔️')
                btnDelete.after(doneDel)

             
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
                let x=0;

                $('#btnDoneDel').click(function(){
                    flag=1;
                    $('.xBtn').remove()
                    $('#btnDoneDel').remove()
                    x=1;

                })
                if(x==1){
                    exit()
                }
                
            

            
            }
        })
})