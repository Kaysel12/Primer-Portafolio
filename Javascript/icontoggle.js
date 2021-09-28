const iconMenu = document.getElementById('icon__menu');
const menuSecundario = document.getElementById('menu__s');

iconMenu.addEventListener('click', ()=>{
     menuSecundario.classList.toggle('display')
});