import { loadHomePage } from './loader.js';
loadHomePage();
const li_items = document.querySelectorAll('li');
li_items.forEach((item)=>{
    item.addEventListener('click', function()
    {
        console.log('clicked');
    })
});