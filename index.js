var sorter = document.querySelector('.sort-list');
var sungah = document.querySelector('.todolist');

var sidenav = document.querySelector('.sidenav');

function onClickSort(){
    sorter.classList.toggle('hide');
}

function onClickMov(){
    sidenav.classList.toggle('mov');
}

//    function onClickcollapsed(){
//      console.log("hellow World");
//        sungah.classList.toggle('collapsed');
//    }