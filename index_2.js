 

const button = document.querySelector('button');
const body = document.querySelector('body');
const  colors = ['red','green','blue','pink','yellow','violet','purple'];
const color = document.querySelector('.color');

body.style.backgroundColor = 'purple';
button.addEventListener('click',changeBackground);

function changeBackground(){
     const colorIndex = parseInt(Math.random()*colors.length)

    
    body.style.backgroundColor = colors[colorIndex];
    color.textContent = colors[colorIndex];
}