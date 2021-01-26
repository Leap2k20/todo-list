/* var list = document.getElementById('0'); */

var $modal = document.querySelector('#mod');
var ismodalopen = false;

function onclicknewtask() {
    if (ismodalopen) {
        $modal.style.display = 'none';
    } else {
        $modal.style.display = 'block';
    }
    ismodalopen = !ismodalopen;
}

/* function clickList () {
    console.log('click');
    list.classList.toggle('title');
} */


var $todoList = document.querySelector('#main');
var $completedTodoList = document.querySelector('#main-completed');

var $doneButton = document.querySelector('.done');
var $title = document.querySelector('#title');
var $description = document.querySelector('#description');
var $dueDate = document.querySelector('#duedate');

$doneButton.onclick = function () {
    $modal.style.display = 'none';

    var newTodo = {
        title: $title.value,
        description: $description.value,
        dueDate: $dueDate.value,
        priority: 1,
    };
    addTodo(newTodo);

};

var todos = [];

function $createTodo(todo) {
    var $todoLi = document.createElement('div');
    var todoContent = `  <div class="list" id="todo-list">
                        <div id="mark-1"></div>
                        <div id="mark"></div>
                        <div id="mark-2"></div>
                        <h2>${todo.title}</h2>
                        <div id="date">${todo.dueDate}</div>
                    <label class="checkbox-label">
                        <input type="checkbox" class="checkbox_completed">
                        <span class="checkbox-custom"></span>
                    </label>
                    </div>
                `;
    $todoLi.innerHTML = todoContent;
    return $todoLi; // ene murun deer 3 tsag gatsaw!!!
}

function draw() {
    //Step 1 : Clear entire screen
    $todoList.innerHTML = '';
    $completedTodoList.innerHTML = '';


    //Step 2 : Draw all todos
    todos.forEach((todo) => {
        $newTodo = $createTodo(todo);
        $todoList.append($newTodo);
    });
}

function addTodo(newTodo) {
    todos.push(newTodo);
    draw();
}   
