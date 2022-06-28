function loadMenu()
{
    const content_div = document.querySelector('#content');
    content_div.replaceChildren();
    addMenuItems(content_div);
}
function menuItem(name,description,price,img)
{
    return{name:name,description:description,price:price,img:img}
}
function addMenuItems(parent)
{
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu');
    parent.appendChild(menuItemsDiv);
    const salad = menuItem('salad','Big Salad','100 dollars','url(/home/aman/top/js/restaurant/src/salad.jpg)');
    const panner = menuItem('paneer','Shahi Paneer with Authentic Indian Taste','250 dollars','url(/home/aman/top/js/restaurant/src/panner.jpg)');
    const dal = menuItem('dal Fry','Shai Punjabi Dal Fry' ,'150 dollars','url(/home/aman/top/js/restaurant/src/dal.jpg)');
    let Items =[salad,panner,dal];
    createItems(Items,menuItemsDiv);
}

function createItems(items,parent_div)
{
    for(let item of items)
    {
        const new_div = document.createElement('div');
        new_div.classList.add('menu-item');
        const h3 = document.createElement('h3');
        const description = document.createElement('p');
        const price = document.createElement('p');
        h3.textContent=item.name;
        description.textContent=item.description;
        price.textContent=item.price;
        new_div.appendChild(h3);
        new_div.appendChild(description);
        new_div.appendChild(price);
        new_div.style['backgroundImage']+=item.img;
        parent_div.appendChild(new_div);
    }
}
export {loadMenu};