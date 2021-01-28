
var todos=[];

function addTodo(newTodo){
    todos.push(newTodo);
     draw();
}


function toggleIsDone(){
   var id = this.dataset.id;
   var todoItem = todos.find((todo)=>{
      return todo.id == id;
   });
   todoItem.isDone = this.checked;
   draw();
    console.log(this.checked);
}



function updateTodo(){
    //update todo item in todos list
    // todos[i].title =''

    //show update in screen -draw()


}

function clearCompletedTodos(){
    // remove compleded list from todo list
    //show updates in browser -draw()

}

function deleteTodo(){
    //remove selected item from todos list
    //show update in browser -draw()
}

// function sort(){
//     // sort todos list
//     //show update in browser -draw()
// }

