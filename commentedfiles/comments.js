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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(
    function(){
        let inptTask = $('#inptTask')
        let btnAdd = $('#btnAdd')
        let ulList = $('#ulList')
        let btnDelete = $('#btnDelete')
        let compUlList = $('#compUlList')

        
        
        

        

        btnAdd.click(
            function() {
                ulList.empty()
                let newTodo = inptTask.val()
                console.log(newTodo)

                $.post('/todos',{task:newTodo},(data)=>{
                    for(let i=0;i<data.length;i++){

                        //ulList.append( $('<li></li>').attr('id', 'q' + i).text(data[i].task))
                        /*let labels = $('<label></label>').attr('for','q'+i).text(data[i].task)
                        let inputEle = $('<input/>').attr({type: 'radio'}).attr('value','q'+i)
                        let radioBtn = inputEle.appendTo(labels)
                        let liItem = $('<li></li>')
                        let finalListItem = radioBtn.append(liItem)
                        ulList.append( finalListItem )*/

                        let $label = $("<label>").attr('for','q'+i).text(data[i].task);
                        //Create the input element
                        let $input = $('<input type="checkbox">').attr('value','q'+i).attr('class','inputItem');

                        //Insert the input into the label
                        $input.appendTo($label);
                        //Insert the label into the DOM - replace body with the required position
                        
                        ulList.append($('<li></li>').attr('class','lis').append($label));
                        //compUlList.empty()

                        
                            
                        
                    }
                    $('.inputItem').click(function(){
                        let valComple = $(this).parent('label').text();
                        console.log(valComple);
                        $(this).parents('li').remove()
                        compUlList.empty()
                        
                        $.post('/todos/complete',{compVal:valComple},(Compdata)=>{
                            compUlList.empty()
                            console.log(Compdata)
                            for(let i=0;i<Compdata.length;i++){
                                compUlList.append( $('<li></li>').attr('id', 'c' + i).text(Compdata[i].compTask))
                            }
                        })
                    })
                })
                

            })

            
                
             
            
            let flag=1
            
        btnDelete.click(function(){
            if(flag==1){
                
                flag=0
            
                let doneDel = $('<input/>').attr({id:'btnDoneDel',type:'button'}).attr('value','✔️')
                btnDelete.after(doneDel)

             
                $(".lis").each(function(index) {
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