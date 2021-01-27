var todos = [];

function addTodo(newTodo) {
    todos.push(newTodo);

    localStorage.setItem('todos', JSON.stringify(todos));
    draw();
}

function toggleIsDone() {
    var id = this.dataset.id;
    var todoItem = todos.find((todo) => {
        return todo.id == id;
    });
    todoItem.isDone = this.checked;

    localStorage.setItem('todos', JSON.stringify(todos));
    draw();
}

function updateTodo(id, title, description, dueDate, priority) {
    var index = todos.findIndex((todo) => {
        return todo.id == id;
    })
    todos[index].title = title;
    todos[index].description = description;
    todos[index].dueDate = dueDate;
    todos[index].priority = priority;

    localStorage.setItem('todos', JSON.stringify(todos));

    draw();
}

function clearCompletedTodos() {
    todos = todos.filter((todo) => {
        return !todo.isDone;
    });
    localStorage.setItem('todos', JSON.stringify(todos));

    draw();
}

function deleteTodo() {
    var id = this.dataset.id;
    todos = todos.filter((todo) => {
        return todo.id != id;
    });
    localStorage.setItem('todos', JSON.stringify(todos));

    draw();
}

function sort() {
    switch(this.dataset.sortby) {
        case 'created':
            todos.sort((item1, item2) => {
                if (item1.createdAt === item2.createdAt) return 0;
                if (item1.createdAt < item2.createdAt) return -1;
                if (item1.createdAt > item2.createdAt) return 1;
            });
            break;
        case 'priority':
            todos.sort((item1, item2) => {
                if (item1.priority === item2.priority) return 0;
                if (item1.priority < item2.priority) return -1;
                if (item1.priority > item2.priority) return 1;
            });
            break;
        case 'dueDate':
            todos.sort((item1, item2) => {
                if (item1.dueDate === item2.dueDate) return 0;
                if (item1.dueDate < item2.dueDate) return -1;
                if (item1.dueDate > item2.dueDate) return 1;
            });
            break;
    }

    draw();
}

function getTodoById(id) {
    return todos.find((item) => {
        return item.id == id;
    });
}

window.onload = function() {
    var localStorageTodos = JSON.parse(localStorage.getItem('todos'));
    if (localStorageTodos) {
        todos = localStorageTodos;
    }
    draw();
}
