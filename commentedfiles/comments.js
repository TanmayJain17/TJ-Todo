$(
    function() {
        let inptTask = $('#inptTask')
        let btnAdd = $('#btnAdd')
        let ulList = $('#ulList')
        let btnDelete = $('#btnDelete')
        let listItems = $('li')
        //var delBtn = $("<button></button>").innerText='DEL';

        

        btnAdd.click(
            function() {
                ulList.empty()
                let newTodo = inptTask.val()
                console.log(newTodo)

                $.post('/todos',{task:newTodo},(data)=>{
                    for(let i=0;i<data.length;i++){
                        //let addItem = $('<li></li>').on('#input'+i).attr({value:data[i].task})
                        //$('#input'+i).attr({value:data[i].task})
                        ulList.append( $('<li></li>').attr('id', 'q' + i).text(data[i].task))
                    }
                })

            })
            
        btnDelete.click(function(){
             
                                                      //$('<button/>').attr({id:'del',text:'❌'})
                                                      //<button id="del">❌</button>
                                                      // let delBtn = $("<button></button>");
            $.get('/todos',(data)=>{
                let arrayLength = data.length
                console.log(arrayLength)
                               //let formDel = $("<form></form>").attr({action:POST,method:'/todos'}).innerHTML
                //let delBtn = $("<input/>").attr({class:"xBtn",type:"button",value:"❌"});
                              //$('#xBtn').text = "Del"
                //$('li').append(delBtn)
                
                /*for(let i=1;i<=arrayLength; i++){
                    let delBtn = $("<input/>").attr({class:"xBtn",type:"button",value:"❌",}).attr('id','d'+i);
                    $('li').append(delBtn)
                }*/

                /*for(let i of $('li')){
                    let delBtn = $("<input/>").attr({class:"xBtn",type:"button",value:"❌",}).attr('id','d'+i);
                    $('this').append(delBtn)
                }*/
                $( "li" ).each(function( index ) {
                    console.log( index + ": " + $( this ).text() );
                   // let delBtn = $("<input/>").attr({class:"xBtn",type:"button",value:"❌",}).attr('id','d'+index+1);
                    $(this).append($("<input/>").attr({class:"xBtn",type:"button",value:"❌",}).attr('id','d'+index+1))

                  });
                
                
                
                /*var idCount = 1;
                $('li').each(function() {
                    //$(this).attr('id', 'q' + idCount);
                    let delBtn = $("<input/>").attr({class:"xBtn",type:"button",value:"❌",}).attr('id','d'+idCount);
                    $('this').append(delBtn)
                    idCount++;
                });*/

                //$('#xBtn').click(
                   // function(){

                           /* $.post('/todos/delete',{valDel : delVal},(data)=>{
                                //ulList.empty()
                                for(let tsk of data){
                                    ulList.append('<li>'+ tsk.task+'</li>')
                                }

                            }) */
                        //})
                   // }
                //)
                
                


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