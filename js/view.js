var $todoList = document.querySelector('#todo-list');
var $completedTodoList = document.querySelector('#completed-todo-list');

var $modal = document.getElementById('modal');
var $btn = document.querySelector("#plus-li");
var $doneButton = $modal.querySelector("#submit");

var $title = $modal.querySelector('#title');
var $description = $modal.querySelector('#description');
var $dueDate = $modal.querySelector('#due-date');


//priority Component
var $priority = $modal.querySelector('.priority-items');
var $priorityItems = $priority.querySelectorAll('.priority');

$priorityItems.forEach(($items)=>{
    $items.addEventListener('click',function(){
        $priority.className = 'priority-items';
        $priority.dataset.priority = this.dataset.priority;


        switch(this.dataset.priority){
            case '1':
                $priority.classList.add('low');
                break
            case '2':
                $priority.classList.add('medium');
                break
            case '3':
                $priority.classList.add('high');
                break
        }

    })
})
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


$doneButton.onclick = function(){
    var newTodo = {
        title: $title.value,
        id: parseInt(Math.random()*999999999),
        description: $description.value,
        duedate: $dueDate.value,
        isDone: false,
        priority: $priority.dataset.priority,

    };
    addTodo(newTodo);
    $modal.style.display = 'none';
};


//create todo
function $createTodo(todo){
    var $todoDiv = document.createElement('div');
    var priorityClass = 'low';
    if(todo.priority =='2'){
        priorityClass = 'medium'
    }
    if(todo.priority == '3'){
        priorityClass = 'high'
    }

    var todoContent = `<div class="todo-item collapsed">
                    <div class="todo-main">
                        <div class="priority-items ${priorityClass}">
                            <div class="priority priority-1"></div>
                            <div class="priority priority-2"></div>
                            <div class="priority priority-3"></div>
                        </div>
                        <span class="todo-title">${todo.title}</span>
                        <span class="toto-date">${todo.duedate}</span>
                            <input type="checkbox" class="is-done" data-id='${todo.id}'" ${ todo.isDone ? 'checked' : '' }>
                    </div>
                    <div class="todo-secondary">
                        <span class="full-todo-title">${todo.title}</span>
                        <button class="kebab"></button>
                        <p class="todo-desc">${todo.description}</p>
                    </div>
                </div>`;

    $todoDiv.innerHTML= todoContent;
    $todoDiv.querySelector('.is-done').onchange = toggleIsDone;
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





// todo click

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






