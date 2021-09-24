const form = document.querySelector('.form-test-drive');
let message = document.createElement('span');
const sendBtn = document.querySelector('.form__button');
const sendMessage = function (){
    message.innerText = 'Спасибо за заявку! Менеджер скоро с Вами свяжется';
    message.classList.add('contacts__descr');
    form.append(message);
    sendBtn.classList.add('hidden');

}
const clearMessage = function (){
    message.remove();
    sendBtn.classList.remove('hidden');
    form.reset();
}

//'https://jsonplaceholder.typicode.com/todos/1'

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();

    for (let elem of form.elements)
    {
        elem.classList.remove('red-input');
    }
     
    let data = {};
    
    for (let elem of form.elements){
        if (elem.name){
            if (elem.value=='' || elem.value[0]==' '){
                elem.classList.add('red-input');
            } else{
                data[elem.name] =elem.value;
            }
            
        }
    }
    if (data.name && data.mail && data.phone  && !data.name.match(/^[ ]+$/) && !data.mail.match(/^[ ]+$/) && !data.phone.match(/^[ ]+$/)){

        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then(response =>{
            if (response.status===200 || response.status===201){
                return response.json()
            } else {
                throw new Error (response.status)
            }
        }).then(data =>{
            sendMessage();
            setTimeout(clearMessage, 3500);

        }).catch(error=>{
            alert('Произошла ошибка, статус: ' + error.message)
        })
    }
    
})