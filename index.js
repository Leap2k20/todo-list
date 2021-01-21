var todoList = document.querySelector('#todo-list>div');


function onClickButton(){
    todoList.classList.remove('collapsed');
}

var modal = document.getElementById('modal');

// var modal = document.getElementById('modal');
var btn = document.querySelector("#plus-li");

var isModalOpen = false;
btn.onclick = function() {
    if (isModalOpen) {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
    isModalOpen = !isModalOpen;
}
