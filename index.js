console.log('Hello World');

// Global vars
// Button
var bNewTask = document.querySelector('header .part2 .new-task');
var bSort = document.querySelector('main .sort .sort-content div');
var bMenu = document.querySelector('header .part1 .menu-icon');
var bNewProj = document.querySelector('aside .new-proj');
var bSubmit = document.querySelector('.add-project button');
var bDone = document.querySelector('.add-task .content-wrapper .priority-wrapper button');


// Input
var iProjName = document.querySelector('.add-project input');
var iTaskName = document.querySelector('.add-task .content-wrapper input.title');
var iTaskDate = document.querySelector('.add-task .content-wrapper input.date');
var iTaskDesc = document.querySelector('.add-task .content-wrapper textarea');
var $nav = document.querySelector('aside');
var $taskActive = document.querySelector('main .task-active');

// Window
var wTask = document.querySelector('.add-task');
var wProj = document.querySelector('.add-project');

// Array
var projects = [];

// Function
function createNewProj() {
    if (iProjName.value === '') {
        alert('Please fill out this field.');
    } else {
        wProj.classList.toggle('open');

        var $project = document.createElement('div');
        $project.className = 'project';

        var $project_button = document.createElement('button1');
        $project_button.innerHTML = '...';
        $project_button.classList.add('threeDot');
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
        $project_extension_button2.innerHTML = 'DELETE';
        $project_extension.append($project_extension_button2);

        // Object attributes
        var project = {
            threeDot : $project_button,
            name : $project_name,
            triangle : $project_triangle,
            extension : $project_extension,
            edit : $project_extension_button1,
            dlete : $project_extension_button2,
        }
        console.log(project);

        // Append elements
        $nav.append($project);
        projects = projects.concat(project);
        $project_button.dataID = projects.indexOf(project);
        console.log(projects.indexOf(project));
        $project_triangle.dataID = projects.indexOf(project);
        $project_extension_button1.dataID = projects.indexOf(project);
        $project_extension_button2.dataID = projects.indexOf(project);
        iProjName.value = '';


        var bExtensions = document.querySelectorAll('aside .project button1');
        for (var i = 0; i < bExtensions.length; i++) {
            bExtensions[i].onclick = () => {
                console.log('daragdaw');
                for (var j = 1; j < projects.length; j++) {
                    console.log('daragdaw1');
                    console.log(i + ' ' + j);
                    if (i == j) {
                        console.log('daragdaw2');
                        projects[j-1]['extension'].classList.toggle('open');
                    }
                }
            }
        }
    }
}

function createNewTask() {
    if (iTaskName.value === '') {
        alert('Please fill out this field.');
    } else {
        wTask.classList.toggle('open');

        var $task = document.createElement('div');
        $task.className = 'task-wrapper';

        var $task_summary = document.createElement('div');
        $task_summary.className = 'summary';

        var $task_summary_priority = document.createElement('div');
        $task_summary_priority.className = 'priority';
        var $task_summary_priority_high = document.createElement('div');
        $task_summary_priority_high.className = 'priority-high';
        var $task_summary_priority_mid = document.createElement('div');
        $task_summary_priority_mid.className = 'priority-mid';
        var $task_summary_priority_low = document.createElement('div');
        $task_summary_priority_low.className = 'priority-low';
        $task_summary_priority.append($task_summary_priority_high);
        $task_summary_priority.append($task_summary_priority_mid);
        $task_summary_priority.append($task_summary_priority_low);

        var $task_summary_title = document.createElement('p');
        $task_summary_title.innerHTML = iTaskName.value;

        var $task_summary_date = document.createElement('span');
        $task_summary_date.innerHTML = iTaskDate.value;

        var $task_summary_check = document.createElement('input');
        $task_summary_check.type = 'checkbox';

        $task_summary.append($task_summary_priority);
        $task_summary.append($task_summary_title);
        $task_summary.append($task_summary_date);
        $task_summary.append($task_summary_check);

        var $task_hr = document.createElement('hr');

        var $task_extension = document.createElement('div');
        $task_extension.className = 'task-name';

        var $task_extension_title = document.createElement('p');
        $task_extension_title.innerHTML = iTaskName;
        var $task_extension_button = document.createElement('button');
        $task_extension_button.innerHTML = '...';
        var $task_extension_urgutgul = document.createElement('div');
        $task_extension_urgutgul.className = 'extension';
        var $task_extension_urgutgul_edit = document.createElement('button');
        $task_extension_urgutgul_edit.innerHTML = 'EDIT';
        var $task_extension_urgutgul_delete = document.createElement('button');
        $task_extension_urgutgul_delete.innerHTML = 'DELETE';
        $task_extension_urgutgul.append($task_extension_urgutgul_edit);
        $task_extension_urgutgul.append($task_extension_urgutgul_delete);
        $task_extension.append($task_extension_title);
        $task_extension.append($task_extension_button);
        $task_extension.append($task_extension_urgutgul);

        var $task_description = document.createElement('div');
        $task_description.className = 'task-desc';
        $task_description.innerHTML = iTaskDesc.value;


        $task.append($task_summary);
        $task.append($task_hr);
        $task.append($task_extension);
        $task.append($task_description);
        $taskActive.append($task);
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
    bSubmit.onclick = createNewProj;
}

bNewTask.onclick = () => {
    wTask.classList.toggle('open');
    bDone.onclick = createNewTask;
}




//Main
