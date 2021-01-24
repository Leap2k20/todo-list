var addTask = document.getElementById('add-task');
var modal = document.getElementById('modal-container');
addTask.onclick = (e) => {
    console.log(modal);
    modal.style.display = 'block';
}

modal.onclick = (e) => {
    modal.style.display = 'none';
}