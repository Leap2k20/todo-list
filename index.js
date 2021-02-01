var $modal = document.getElementById("myModal");
var btn = document.getElementById("plus-li");
var $doneButton = $modal.querySelector('.done-button');

var $title = $modal.querySelector('#title');
var $description = $modal.querySelector('#description');
var $dueDate = $modal.querySelector('.date');

btn.onclick = function() {
    $modal.style.display = "block";
  }

window.onclick = function(event) {
    if (event.target == $modal) {
      modal.style.display = "none";
  }
};


$doneButton.onclick = function() {
    $modal.style.display = "none";

    var newTodo = {
      title: $title.value ,
      description: description.value,
      dueDate: $dueDate.value,
      priority: 1,
    };
    addTodo(newTodo);
};

var todos = [];

function addTodo(newTodo) {
  console.log('old todos', todos);
  todos.push(newTodo);
  console.log('new todos', todos);
}

