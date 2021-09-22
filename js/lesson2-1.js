const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');
const tabsHeaderName = document.querySelectorAll('.design__title');

for (let btn of tabsHandlerElems){
    btn.addEventListener('click', ()=>{
        tabsHandlerElems.forEach(item=>{
            item.classList.remove('design-list__item_active');
        });
        btn.classList.add('design-list__item_active');
        let attr= btn.dataset.tabsHandler;

        tabsContentElems.forEach(item=>{
            if (item.dataset.tabsField === attr){
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        
       switch(attr){
           case "body": 
                tabsHeaderName[0].classList.add('hidden');
                tabsHeaderName[1].classList.remove('hidden');
            break;
            case "interior":
                tabsHeaderName[0].classList.remove('hidden');
                tabsHeaderName[1].classList.add('hidden');
            break;

            default: break;
       }

    })
}