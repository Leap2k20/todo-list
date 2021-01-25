

var list = document.getElementById('0');

var modal = document.getElementById('mod');
var ismodalopen = false;

function onclicknewtask() {
    if(ismodalopen) {
        mod.style.display = 'none';
    } else {
        mod.style.display = 'block';
    }
    ismodalopen = !ismodalopen;
}

function clickList () {
    console.log('click');
    list.classList.toggle('title');
}