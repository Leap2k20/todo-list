var sorter = document.querySelector('.sort-list');
function onClickSort(){
    sorter.classList.toggle('hide');
}

var sidenav = document.querySelector('.sidenav');
function onClickMov(){
    sidenav.classList.toggle('mov');
}

var onclear = document.querySelector('#button');
var box = document.querySelector('.whiteBox');

onclear.addEventListener('click',function(){
    box.classList.add('show');
});

box.onclick = function(event) {
    if (event.target == box) {
    box.classList.remove('show');
    }
}

var todoListSungah = document.querySelector('.todo-list');
var secondary = document.querySelector('.todo-secondary');
todoListSungah.onclick = function() {
    secondary.classList.toggle('sungah');
}