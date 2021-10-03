 

let add = document.getElementById('increase');
let remove = document.getElementById('decrease');
let int = document.getElementById('value');
let integer = 0;
let reset = document.getElementById('reseter')

add.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;
})
remove.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;
     
})
reset.addEventListener('click', function(){
    integer = 0;
    int.innerHTML = integer;
     
})