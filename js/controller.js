let db = firebase.firestore();
let todos = [];
const products = [
    {
        'name': 'banana',
        'price': 2500,
    }
]

function drawFromSnapshot(snapshot) {
    console.log("updated");
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

function deleteTodo(id) {
    db.collection('todos').doc(`${id}`).delete();
}

function clearCompletedTasks() { 
    // var deleteItems = todos.filter((todo) => {
    //     return todo.isDone;
    // });
    db.collection('todos')
        // .where('isDone','==',false)
        .where('priority','>=', 2)
        .get().then((snapshot) => {
        snapshot.forEach((doc)=> {
            console.log(doc.data());
        })
    })
}

function toggleIsDone(id) {
    let todo = getTodo(id); 
    todo.isDone = !todo.isDone;
    db.collection('todos').doc(`${id}`).set(todo, { merge: true })
   
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

    // Model.replaceAllTodos(todos);

    // draw(Model.listTodos());
}

window.onload = function() {
    db.collection('todos').onSnapshot(drawFromSnapshot);
};
