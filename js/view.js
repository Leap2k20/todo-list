//:1 Modal Section
function openModal(todo) {
    var $modal = document.querySelector('#modal-container');
    if (todo) { // Task Edit
        $modal.querySelector('#title').value = todo.title;
        $modal.querySelector('#description').value = todo.description;
        $modal.querySelector('#date').value = todo.dueDate;

        var priorityClassName = 'priority low';
        if (todo.priority == 2) priorityClassName = 'priority medium';
        if (todo.priority == 3) priorityClassName = 'priority high';
        $modal.querySelector('.priority').className = priorityClassName;
        $modal.querySelector('.priority').dataset.priority = todo.priority;
        $modal.querySelector('.title').innerText = 'Edit';
        $modal.dataset.editingid = todo.id;

    } else {  // New Task
        delete $modal.dataset.editingid;
        $modal.querySelector('.title').innerText = 'New Task';
    }

    $modal.style.display = 'block';
}

function closeModal() {
    var $modal = document.querySelector('#modal-container');
    $modal.querySelector('#title').value = '';
    $modal.querySelector('#description').value = '';
    $modal.querySelector('#date').value = '';
    $modal.querySelector('.priority').className = 'priority low';
    $modal.querySelector('.priority').dataset.priority = '1';

    $modal.style.display = 'none';
}

document.querySelector('#modal-container .done-button').onclick = function() {
    var $modal = document.querySelector('#modal-container');

    var $titleWrapper = $modal.querySelector('.input-wrapper');
    var $title = $modal.querySelector('#title');
    var $description = $modal.querySelector('#description');
    var $dueDate = $modal.querySelector('#date');
    var $priority = $modal.querySelector('.priority');

    // validation
    if ($title.value.length < 6) {
        $titleWrapper.classList.add('error');
        return;
    }

    if (!$modal.dataset.editingid) {
        var newTodo = {
            id: parseInt(Math.random() * 9999999999),
            title: $title.value,
            description: $description.value,
            dueDate: $dueDate.value,
            createdAt: new Date().toISOString(),
            priority: $priority.dataset.priority,
            isDone: false,
        };
        create(newTodo)
    } else {
        var id = $modal.dataset.editingid;
        var title = $title.value;
        var description = $description.value;
        var dueDate = $dueDate.value;
        var priority = $priority.dataset.priority;

        let updatingFields = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
        };

        update(id, updatingFields);
    }
    closeModal();
};

document.querySelector('#add-task').onclick = (e) => {
    openModal();
}
document.querySelector('#modal-container').onclick = function(event) {
    if (event.target === this) {
        closeModal();
    }
}
document.querySelector('#modal-container .input-wrapper').onclick = function() {
    this.classList.remove('error');
}
//:1 Blabla
function toggleTodoDetail(e) {
    if (e.target.classList.contains('kebab-more')) {
        return;
    }
    this.querySelector('.item-more').classList.toggle('hidden');
}
function toggleKebab() {
    this.querySelector('ul').classList.toggle('hidden');
}
document.querySelectorAll('#modal-container .priority .priority-item').forEach(($item) => {
    $item.addEventListener('click', function() {
        var $priority = document.querySelector('#modal-container .priority');
        $priority.className = 'priority';
        $priority.dataset.priority = this.dataset.priority;

        switch(this.dataset.priority) {
            case '1':
                $priority.classList.add('low');
                break;
            case '2':
                $priority.classList.add('medium');
                break;
            case '3':
                $priority.classList.add('high');
                break;
        }
    });
});

//:1 Helpers
function onEditClick() {
    var id = this.closest('.todo-item').dataset.id;
    var todo = getTodo(id);
    console.log(todo);
    openModal(todo);
}

function $createTodo(todo) {
    var $todoLi = document.createElement('li');
    var priorityClass = 'low';
    if (todo.priority == 2) priorityClass = 'medium';
    if (todo.priority == 3) priorityClass = 'high';

    var todoContent = `
        <div class="todo-item" data-id="${ todo.id }">
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
    $todoLi.querySelector('.is-done').onchange = function() {
        toggleIsDone(todo.id);
    }

    $todoLi.onclick = toggleTodoDetail;
    $todoLi.querySelector('.kebab').onclick = toggleKebab;

    $todoLi.querySelector('.item-delete').onclick = function() {
        deleteTodo(todo.id);
    };
    $todoLi.querySelector('.item-edit').onclick = onEditClick;
    return $todoLi;
}
//:1 Clear completed tasks
document.querySelector('#clear-completed-task').onclick = function() {
    clearCompletedTasks();
};

//:1 Sort
document.querySelectorAll('.sort-dropdown .dropdown-item').forEach(($dropdownItem) => {
    $dropdownItem.onclick = function() {
        sort(this.dataset.sortby);
    };
});

// Main draw function
function draw(todos) {
    var $todoList = document.querySelector('#todo-list');
    var $completedTodoList = document.querySelector('#todo-list-completed');

    $todoList.innerHTML = '';
    $completedTodoList.innerHTML = '';

    todos.forEach((todo) => {
        $newTodo = $createTodo(todo);

        if (todo.isDone) {
            $completedTodoList.append($newTodo);
        } else {
            $todoList.append($newTodo);
        }
    });
}
