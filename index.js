console.log('Hello World');

// Global vars
var bNewTask = document.querySelector('header .part2 .new-task');
var bSort = document.querySelector('main .sort .sort-content div');
var bMenu = document.querySelector('header .part1 .menu-icon');
var bNewProj = document.querySelector('aside .new-proj');
var bSubmit = document.querySelector('.add-project button');
var iProjName = document.querySelector('.add-project input');
var $nav = document.querySelector('aside');
var wTask = document.querySelector('.add-task');
var wProj = document.querySelector('.add-project');

// Function
function fNewProj() {
    if (iProjName.value === '') {
        alert('Please fill out this field.');
    } else {
        wProj.classList.toggle('open');

        var $project = document.createElement('div');
        $project.className = 'project';
        var $project_button = document.createElement('button');
        $project_button.innerHTML = '...';
        $project.append($project_button);
        var $project_name = document.createElement('span');
        $project_name.className = 'text';
        $project_name.innerHTML = iProjName.value;
        $project.append($project_name);
        var $project_triangle = document.createElement('span');
        $project_triangle.className = 'triangle';
        $project_triangle.innerHTML = '▶︎';
        $project.append($project_triangle);
        var $project_extension = document.createElement('div');
        $project_extension.className = 'extension';
        $project.append($project_extension);
        var $project_extension_button1 = document.createElement('button');
        $project_extension_button1.innerHTML = 'EDIT';
        $project_extension.append($project_extension_button1);
        var $project_extension_button2 = document.createElement('button');
        $project_extension_button1.innerHTML = 'DELETE';
        $project_extension.append($project_extension_button2);

        $nav.append($project);
        iProjName.value = '';
    }
}

// Button
bNewTask.onclick = () => {
    wTask.classList.toggle('open');
    document.querySelector('header .part2 .new-task .plus').classList.toggle('open');
}

bSort.onclick = () => {
    document.querySelector('main .sort .sort-content ul').classList.toggle('open');
}

bMenu.onclick = () => {
    $nav.classList.toggle('open');
    bMenu.classList.toggle('open');
}

bNewProj.onclick = () => {
    wProj.classList.toggle('open');
    bSubmit.onclick = fNewProj;
}



//Main
