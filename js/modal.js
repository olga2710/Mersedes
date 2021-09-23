const btnModal = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');

btnModal.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        modal.classList.remove('hidden');
    })
})


modal.addEventListener('click', (ev)=>{
    const target = ev.target;

    if ((target.classList.contains('modal__close'))||(target.classList.contains('overlay'))){
        modal.classList.add('hidden');
    }
})