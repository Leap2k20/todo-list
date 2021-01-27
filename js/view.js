var $todoList = document.querySelector('#todo-list');
var $completedTodoList = document.querySelector('#todo-list-completed');

var $modal = document.querySelector('#modal-container');
var $doneButton = $modal.querySelector('.done-button');

$doneButton.onclick = function() {
    var $titleWrapper = $modal.querySelector('.input-wrapper');
    var $title = $modal.querySelector('#title');
    var $description = $modal.querySelector('#description');
    var $dueDate = $modal.querySelector('#date');
    var $priority = $modal.querySelector('.priority');

    if ($title.value.length < 6) {
        $titleWrapper.classList.add('error');
        // alert('Гарчиг 5с дээш тэмдэгт байх шаардлагатай!!!');
        return;
    }

    var newTodo = {
        id: parseInt(Math.random() * 9999999999),
        title: $title.value,
        description: $description.value,
        dueDate: $dueDate.value,
        priority: $priority.dataset.priority,
        isDone: false,
    };
    addTodo(newTodo);

    // Clearing add todo form
    $title.value = '';
    $dueDate.value = '';
    $description.value = '';
    $priority.className = 'priority low';
    $priority.dataset.priority = '1';

    $modal.style.display = 'none';
};

function $createTodo(todo) {
    var $todoLi = document.createElement('li');
    var priorityClass = 'low';
    if (todo.priority == 2) priorityClass = 'medium';
    if (todo.priority == 3) priorityClass = 'high';

    var todoContent = `
        <div class="todo-item">
          <div class="item-display">
            <div class="priority ${ priorityClass }">
              <div class="priority-item"></div>
              <div class="priority-item"></div>
              <div class="priority-item"></div>
            </div>
            <span class="todo-item-title">${ todo.title }</span>
            <span class="created-at">${ todo.dueDate }</span>
            <div class="item-status">
              <input type="checkbox" ${ todo.isDone ? 'checked' : '' } class="is-done" data-id="${ todo.id }">
            </div>
          </div>
          <div class="item-more hidden">
              <div class="divider-border"></div>
              <div class="row flex">
                <div class="flex-1">
                    <h4>${todo.title}</h4>
                    <h5>${todo.description}</h5>
                </div>
                <div>
                  <div class="kebab">
                      <span class="kebab-more">...</span>
                      <ul class="hidden">
                          <li class="item-edit">EDIT</li>
                          <li class="item-delete" data-id="${ todo.id }">DELETE</li>
                      </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>`;

    $todoLi.innerHTML = todoContent;
    $todoLi.querySelector('.is-done').onchange = toggleIsDone;

    $todoLi.onclick = toggleTodoItem;
    $todoLi.querySelector('.kebab').onclick = toggleKebab;

    $todoLi.querySelector('.item-delete').onclick = deleteTodo;
    return $todoLi;
}

function draw() {
    // Step 1: Clear entire screen
    $todoList.innerHTML = '';
    $completedTodoList.innerHTML = '';

    // Step 2: Draw all todos
    todos.forEach((todo) => {
        $newTodo = $createTodo(todo);

        if (todo.isDone) {
            $completedTodoList.append($newTodo);
        } else {
            $todoList.append($newTodo);
        }
    });
}
