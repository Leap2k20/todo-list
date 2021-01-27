var $addTask = document.getElementById('add-task');
var $modal = document.getElementById('modal-container');
$addTask.onclick = (e) => {
    $modal.style.display = 'block';
}

$modal.onclick = (event) => {
    if (event.target === $modal) {
        $modal.style.display = 'none';
    }
}

$modal.querySelector('.input-wrapper').onclick = function() {
    this.classList.remove('error');
}

// Priority component
var $priority = $modal.querySelector('.priority');
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
})

function toggleTodoItem(e) {
    if (e.target.classList.contains('kebab-more')) {
        return;
    }
    this.querySelector('.item-more').classList.toggle('hidden');
}

function toggleKebab() {
    this.querySelector('ul').classList.toggle('hidden');
}
