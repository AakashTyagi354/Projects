//  let count = 0;

//  const value = document.querySelector('#value');
//  const btns = document.querySelector(".btn");
//  btns.forEach(function (btn){
//         btn.addEventListener('click',function(e){
//              const style = e.currentTarget.classList;
//              if(style)
//         })
//  });

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