let todos = [];
let db = firebase.firestore();

function drawFromSnapshot(snapshot) {
    todos = [];
    snapshot.forEach((doc) => {
        todos.push(doc.data());
    });

    draw(todos);
}

function create(newTodo) {
    db.collection('todos').doc(newTodo.id + '').set(newTodo);
   
}

function update(id, data) {
    db.collection('todos').doc(id).set(data, { merge: true });

    // Amazing!!! Spread Operator
    // todo = {
    //     ...todo,
    //     ...data,
    // }

}

function getTodo(id) {  
    return todos.find((todo) => {
        return todo.id == id;
    });
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



window.onload = function() {
    db.collection('todos').onSnapshot(drawFromSnapshot);
};
