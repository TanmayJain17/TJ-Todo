$(
    function() {
        let inptTask = $('#inptTask')
        let btnAdd = $('#btnAdd')
        let ulList = $('#ulList')
        let btnDelete = $('#btnDelete')
        let listItems = $('li')

        

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
            
        btnDelete.click(function(){
             
            //$('<button/>').attr({id:'del',text:'❌'})
            //<button id="del">❌</button>
            $.get('/todos',(data)=>{
                let arrayLength = data.length
                console.log(arrayLength)
                let delBtn = $("<button></button>");
                delBtn.innerText('X')
                $('li').append(delBtn)

                /*for(let i=1; i<=arrayLength; i++){
                    let delBtn = $("<button></button>").attr({text:"❌"}); 
                    console.log(delBtn)
                    console.log(typeof delBtn)
                    listItems.append(delBtn)
                    console.log('appending the button')
                }*/
            })
            //console.log('function started')
            //console.log(listItems.length)

           /* for(let i=1; i<=$('li').length; i++){
                let delBtn = $("<button></button>").text("❌"); 
                listItems.append(delBtn)
                console.log('appending the button')
            }*/
        })
        
    }
)