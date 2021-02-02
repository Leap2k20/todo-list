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
    db.collection('todos').doc(newTodo.id + '').set(newTodo).then(()=> {
        todos.push(newTodo);
        draw(todos);
    })
}

function update(id, data) {
    console.log(id);
    console.log(data);
    db.collection('todos').doc(id).set(data, { merge: true }).then(()=> {
        var index = findIndex(id);
        todos[index] = {
           ...getTodo(id),
           ...data
        }
        draw(todos);
    })
    // Amazing!!! Spread Operator
    // todo = {
    //     ...todo,
    //     ...data,
    // }
}

function deleteTodo(id) {
    db.collection('todos').doc(`${id}`).delete().then(()=> {
        var index = findIndex(id);
        todos.splice(index, 1);
        draw(todos);
    })
}

function clearCompletedTasks() { 
    var deleteItems = todos.filter((todo) => {
        return todo.isDone;
    });
    for(var i = 0; i < deleteItems.length; i ++){
        db.collection('todos').doc(`${deleteItems[i].id}`).delete().then(()=> {
        });
    }
    todos = todos.filter((todo) => {
        return !todo.isDone;
    });
    draw(todos);
}

function toggleIsDone(id) {
    let todo = getTodo(id); 
    todo.isDone = !todo.isDone;
    db.collection('todos').doc(`${id}`).set(todo, { merge: true }).then(()=> {
        var index = findIndex(id);
        todos[index] = {
           ...getTodo(id),
            isDone: todo.isDone
        }
        draw(todos);
    })
   
}



function findIndex(id) {
    return todos.findIndex((todo) => {
        return todo.id == id;
    });
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






window.onload = function() {
    db.collection('todos').get().then(drawFromSnapshot);
};
