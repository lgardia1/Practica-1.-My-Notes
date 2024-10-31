const menu = document.getElementById('Menu');
const sideBar = document.getElementById('SideBar');


// Alterna la clase show
menu.addEventListener('click', ()=>{
    sideBar.classList.toggle('show');
});


//  Elimina la clase show en caso que no se elimine con el click
document.addEventListener('resize', ()=>{
    if(window.innerWidth > 1221) {
        sideBar.classList.remove('show');
    }
});