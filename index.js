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

var modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click',function(){
    box.classList.remove('show');
});


//    function onClickcollapsed(){
//      console.log("hellow World");
//        sungah.classList.toggle('collapsed');
//    }