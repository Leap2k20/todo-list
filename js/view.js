var $todoList = document.querySelector('#todo-list');
var $completedTodoList = document.querySelector('#completed-todo-list');

var $modal = document.getElementById('modal');
var $btn = document.querySelector("#plus-li");
var $doneButton = $modal.querySelector("#submit");

var $title = $modal.querySelector('#title');
var $description = $modal.querySelector('#description');
var $dueDate = $modal.querySelector('#due-date');



//click model
var isModalOpen = false;
$btn.onclick = function() {
    if(isModalOpen){
        $modal.style.display = 'none';
    }
     else {
         $modal.style.display = 'block';
     }
    isModalOpen = !isModalOpen;  
  }

// done darahad modal alga boloh
$doneButton.onclick = function(){
    $modal.style.display = 'none';

    var newTodo = {
        title: $title.value,
        description: $description.value,
        duedate: $dueDate.value,
        priority: 1,
    };
    addTodo(newTodo);
};

//create todo
function $createTodo(todo){
    var $todoDiv = document.createElement('div');
    var todoContent = `<div class="todo-item collapsed" id="1">
                    <div class="todo-main">
                        <div class="p-icon">
                            <div class="priority priority-1 priority-1-color"></div>
                            <div class="priority priority-2 priority-2-color"></div>
                            <div class="priority priority-3 priority-3-color"></div>
                        </div>
                        <span class="todo-title">${todo.title}</span>
                        <span class="toto-date">${todo.duedate}1</span>
                        <label class="checkbox-label">
                            <input type="checkbox" class="checkbox-completed">
                            <span class="checkbox-custom"></span>

                        </label>
                    </div>
                    <div class="todo-secondary">
                        <span class="full-todo-title">${todo.title}</span>
                        <button class="kebab"></button>
                        <p class="todo-desc">${todo.description}</p>
                    </div>
                </div>`;
    $todoDiv.innerHTML= todoContent;
    return $todoDiv;
}

function draw(){
    $todoList.innerHTML='';
    $completedTodoList.innerHTML='';
    // clear entire screen
    //draw all todos
    todos.forEach((todo)=>{
        $newTodo=$createTodo(todo);
        $todoList.append($newTodo);

    });
}





// // todo click
// var mainTodoList = document.querySelector('#todo-list>div');
// function onClickButton(){
//     mainTodoList.classList.toggle('collapsed');
// }

// mainTodoList.onclick = onClickButton;

// //priority click

// var clickPriority = document.querySelectorAll('.modal-priority > div');
// // console.log(clickPriority)

// function onClickPriority(){
//     for (var i =0; i< clickPriority.length; i++)
//     clickPriority[i].classList.toggle('dark');
// }

// for (var i =0; i< clickPriority.length; i++) 
//     clickPriority[i].onclick = onClickPriority;





  