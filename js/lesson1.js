const featureLinks = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

featureLinks.forEach((link, index) =>{
    link.addEventListener('click', () =>{
       
        featureLinks.forEach((item, index) =>{
         if (item!==featureLinks[index]){
            item.classList.remove('feature__link_active');
         }
        });
        lists.forEach(listItem =>{
            if (listItem!==lists[index]){
            listItem.classList.add('hidden');
            }
        });
        
        link.classList.toggle('feature__link_active');
        lists[index].classList.toggle('hidden');
        
    })
})