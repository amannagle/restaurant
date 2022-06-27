function loadHomePage()
{
    const body = document.querySelector('body');
    const content_div = document.querySelector('#content');
    const header = document.createElement('header');
    const h3 = document.createElement('h3');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const section = document.createElement('section');
    const description= document.createElement('p');
    h3.textContent="Aman's Bistro";
    header.appendChild(h3);
    header.appendChild(nav);
    body.appendChild(header);
    body.appendChild(content_div);
    // content_div.style[backgroundImage]='url(background.webp)';
    nav.classList.add('navbar');
    nav.appendChild(ul);
    for(let i=0;i<3;i++)
    {
        ul.appendChild(document.createElement('li'));
    }
    const list_items = document.querySelectorAll('li');
    list_items[0].textContent='Home';
    list_items[1].textContent='Menu';
    list_items[2].textContent='About Us';
    content_div.appendChild(section);
    section.appendChild(description);
    description.textContent="We are a tight-knit, fun-loving, devoted team of local cooks spreading the gospel of good times and good food at Aman's Bistro.  We offer limited capacity onsite events in our restaurant kitchen space. And worry not, our krewe will travel to your destination of choice  from hotel ballrooms to private kitchens to entertain groups of all sizes. We cook, we tell stories, we deliver informative culinary demonstrations and lectures, but most of all … we treat every event like you’re a guest at our dinner table. "
}
export {loadHomePage }; 
