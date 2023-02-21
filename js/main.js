const navMenu = document.querySelector('.nav-menu');
const container = document.querySelector('.container');

container.addEventListener('click', () => {
        
    navMenu.style.display = 'flex';
     
});

const buttonX = document.querySelector('.button-x');

buttonX.addEventListener('click', () => {
        
    navMenu.style.display = 'none';
     
});