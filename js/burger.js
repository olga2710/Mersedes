//humburger-menu  menu-active

const burger = document.querySelector('.humburger-menu');
const mobileMenu = document.querySelector('.menu');


const toggleMenu = () =>{
    mobileMenu.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');

}


burger.addEventListener('click',()=> toggleMenu());

mobileMenu.addEventListener('click', (ev)=>{
    const target = ev.target;
    if (target.classList.contains('menu-list__link')){
        toggleMenu()
    }
})