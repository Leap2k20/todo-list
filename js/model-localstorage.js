function getFromLocalStorage(key, defaultValue) {
    let todos = JSON.parse(localStorage.getItem(key));
    if (!todos) {
        todos = defaultValue;
    }
    return todos;
}
function setToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

let Model = {
    createNewTodo: function(newTodo) {
        let todos = getFromLocalStorage('todos', []);

        todos.push(newTodo);
        setToLocalStorage('todos', todos);
    },
    listTodos: function() {
        return getFromLocalStorage('todos', []);
    },
    getTodo: function(id) {
        let todos = getFromLocalStorage('todos', []);
        return todos.find((todo) => {
            return todo.id == id;
        });
    },
    replaceAllTodos: function(newTodos) {
        setToLocalStorage(newTodos);
    },
    replaceTodo: function(id, todo) {
        let todos = getFromLocalStorage('todos', []);
        var index = todos.findIndex((item) => {
            return item.id == id;
        });

        todos[index] = todo;
        setToLocalStorage('todos', todos);
    },
    removeTodo: function(id) {
        let todos = getFromLocalStorage('todos', []);
        todos = todos.filter((todo) => {
            return todo.id != id;
        });
        setToLocalStorage('todos', todos);
    },
};
