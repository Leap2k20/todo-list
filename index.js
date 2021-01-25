// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// New Task
var addtasktitle = document.querySelector('.modal-container input.title');
var addtaskdate = document.querySelector('.modal-container input.date');
var addtaskdesc = document.querySelector('.modal-container textarea');
var addtaskbutton = document.querySelector('.modal-container button');
var newtask =document.querySelector('main .active-task');

function addTask(){
    var $task = document.createElement('div');
    $task.className = 'task-container';

    var $task_prio = document.createElement('div');
    $task_prio.className = "priority";
        var $task_prio_red = document.createElement('div');
        $task_prio_red.className = 'prio1';
        

        var $task_prio_green = document.createElement('div');
        $task_prio_green.className = 'prio2';
        
        
        var $task_prio_blue = document.createElement('div');
        $task_prio_blue.className = 'prio3';

        $task_prio.append($task_prio_red)
        $task_prio.append($task_prio_green)
        $task_prio.append($task_prio_blue)

    $task.append($task_prio);

    var $task_title = document.createElement('div');
    $task_title.innerHTML = addtasktitle.value;
    $task.append($task_title);
    
    var $task_date = document.createElement('div');
    $task_date.innerHTML = addtaskdate.value;
    $task.append($task_date);
    
    var $task_checkbox = document.createElement('input');
    $task_checkbox.type = 'checkbox'
    $task.append($task_checkbox);
    newtask.append($task);
    console.log(modal);
  }
  
