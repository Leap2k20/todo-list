function create(newTodo) {
    Model.createNewTodo(newTodo);

    draw(Model.listTodos());
}

function update(id, data) {
    let todo = Model.getTodo(id);
    todo.title = data.title;
    todo.description = data.description;
    todo.dueDate = data.dueDate;
    todo.priority = data.priority;

    // Amazing!!! Spread Operator
    // todo = {
    //     ...todo,
    //     ...data,
    // }

    Model.replaceTodo(id, todo);

    draw(Model.listTodos());
}

function sort(sortBy) {
    let todos = Model.listTodos();

    switch(sortBy) {
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

    Model.replaceAllTodos(todos);

    draw(Model.listTodos());
}

function deleteTodo(id) {
    Model.removeTodo(id);

    draw(Model.listTodos());
}

function clearCompletedTasks() {
    let todos = Model.listTodos();
    todos = todos.filter((todo) => {
        return !todo.isDone;
    });

    Model.replaceAllTodos(todos);

    draw(Model.listTodos());
}

function toggleIsDone(id) {
    let todo = Model.getTodo(id);
    todo.isDone = !todo.isDone;

    Model.replaceTodo(id, todo);

    draw(Model.listTodos());
}

function getTodoById(id) {
    return Model.getTodo(id);
}

window.onload = function() {
    draw(Model.listTodos());
}
