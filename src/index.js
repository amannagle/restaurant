import { loadHomePage } from './loader.js';
import {loadMenu} from './loadmenu.js';
loadHomePage();
addlisteners();

function switchTab(e)
{
        if (e.target.textContent == 'Menu')
        loadMenu();
        else if (e.target.textContent == 'Home')
        {   loadHomePage();
            addlisteners();
        }
}

function addlisteners()
{
    const li_items = document.querySelectorAll('li');
    li_items.forEach((item)=>{
    item.addEventListener('click', switchTab)
    });
}