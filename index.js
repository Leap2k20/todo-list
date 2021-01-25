var list = document.getElementById('0');

var modal = document.querySelector('mod');
var ismodalopen = false;

function onclicknewtask() {
    if(ismodalopen) {
        mod.style.display = 'none';
    } else {
        mod.style.display = 'block';
    }
    ismodalopen = !ismodalopen;
}

function clickList () {
    console.log('click');
    list.classList.toggle('title');
}


var $doneButton = document.querySelector('.done');
var $title = document.querySelector('#title');
var $description = document.querySelector('#description');
var $dueDate = document.querySelector('#duedate');

$doneButton.onclick = function() {
    mod.style.display = 'none';

    var newTodo = {
        title : $title.value,
        description : $description.value,
        dueDate : $dueDate.value,
        priority : 1,
    };

    console.log(newTodo);
    addTodo(newTodo);

};

var todos = [];

function addTodo(newTodo) {
    console.log('old todos', todos);
    todos.push(newTodo);
    console.log('newtodos', todos);
}