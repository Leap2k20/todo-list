var todos = [];

function addTodo(newTodo) {
    todos.push(newTodo);
    draw();
}

function toggleIsDone() {
    var id = this.dataset.id;
    var todoItem = todos.find((todo) => {
        return todo.id == id;
    });
    todoItem.isDone = this.checked;

    draw();
}
function toggleTodoItem() {
    this.querySelector('.item-more').classList.toggle('hidden');
    this.classList.toggle('todo-item-collapsed');
}

function toggleKebab() {
    console.log(this);
    this.querySelector('ul').classList.toggle('hidden');
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
