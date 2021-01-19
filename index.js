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
        var eProj = create
    }
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
