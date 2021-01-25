// var $todoList = document.querySelector('.blabla');
// var $completedTodoList = document.querySelector('.blabla-completed');

var $modal = document.querySelector('#modal-container');
var $doneButton = $modal.querySelector('.done-button');

var $title = $modal.querySelector('#title');
var $description = $modal.querySelector('#description');
var $dueDate = $modal.querySelector('#date');

$doneButton.onclick = function() {
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

function draw() {
    // Step 1: Clear entire screen
    // $todoList
    // $completedTodoList.clear()

    // Step 2: Draw all todos
    // todos.forEach((item) => {
    //     var $item = createElement(item);
    //     $todoList.append($item);
    //     or
    //     $completedTodoList.append($item);
    // });
}

function addTodo(newTodo) {
    todos.push(newTodo);

    // Step 2: draw()
}

function markAsDone() {
    // Step 1: mark todoItem as done
    // Step 2: show update in screen - draw();
}
function updateTodo() {
    // Step 1: update todo item in todos list
    // todos[i].title = ''

    // Step 2: show update in screen - draw();
}

function clearCompletedTodos() {
    // Step 1: remove completed todos from todos list
    // Step 2: show updates in browser - draw();
}

function deleteTodo() {
    // Step 1: remove selected item from todos list
    // Step 2: show update in browser - draw()
}

function sort() {
    // Step 1: sort todos list
    // Step 2: show update in browser - draw()
}
