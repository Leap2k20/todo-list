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

function toggleTodoItem(e) {
    if (e.target.classList.contains('kebab-more')) {
        return;
    }
    this.querySelector('.item-more').classList.toggle('hidden');
}

function toggleKebab() {
    this.querySelector('ul').classList.toggle('hidden');
}

// Event handlers
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
var $priority = document.querySelector('#modal-container .priority');
var $priorityItems = $priority.querySelectorAll('.priority-item');
$priorityItems.forEach(($item) => {
    $item.addEventListener('click', function() {
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
