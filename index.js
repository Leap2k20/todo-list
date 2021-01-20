console.log('Hello World');

// Global vars
var bNewTask = document.querySelector('header .part2 .new-task');
var bSort = document.querySelector('main .sort .sort-content div');
var bMenu = document.querySelector('header .part1 .menu-icon');
var bNewProj = document.querySelector('aside .new-proj');
var bSubmit = document.querySelector('.add-project button');
var iProjName = document.querySelector('.add-project input');
var $projects = document.querySelector('.aside');

// Function
function fNewProj() {
    if (iProjName.innerHTML.length < 1) {
        alert('Proj name bichne uu');
    } else {
        createNewProject();
    }
}

function createNewProject(){
    for (var todoItem of todos) {
        createTodoItem(todoItem.priority, todoItem.text, todoItem.date);
    }
}

function createTodoItem(priority, text, date) {
    var $item = document.createElement('div');

    var $priority = document.createElement('span');
    $priority.classList.add('red');
    $priority.innerText = priority;

    var $text = document.createElement('span');
    $text.classList.add('green');
    $text.innerText = text;
    $text.onclick = function() {
        alert(this.innerHTML);
    }

    var $date = document.createElement('span');
    $date.classList.add('blue');
    $date.innerText = date;

    $item.append($priority, $text, $date);
    return $item;
}

// Button
bNewTask.onclick = () => {
    document.querySelector('.add-task').classList.toggle('open');
    document.querySelector('header .part2 .new-task .plus').classList.toggle('open');
}

bSort.onclick = () => {
    document.querySelector('main .sort .sort-content ul').classList.toggle('open');
}

bMenu.onclick = () => {
    document.querySelector('aside').classList.toggle('open');
    bMenu.classList.toggle('open');
}

bNewProj.onclick = () => {
    document.querySelector('.add-project').classList.toggle('open');
    bSubmit.onclick = fNewProj;
}

//Main