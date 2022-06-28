function loadAboutUs()
{
    const content_div = document.querySelector('#content');
    content_div.replaceChildren();
    createElements(content_div);
    
}

function createElements(parent)
{
    const div = document.createElement('div');
    div.classList.add('aboutusdiv');
    const contactinfo = document.createElement('p');
    const address = document.createElement('p');
    const description = document.createElement('p');
    address.textContent = '221 B Baker Street London, United Kingdom';
    contactinfo.textContent = 'Contact Us at 919755029226';
    description.textContent = 'Working Hours : 7am to 7pm Monday to Saturday';
    div.appendChild(address);
    div.appendChild(contactinfo);
    div.appendChild(description);
    parent.appendChild(div);
}

export {loadAboutUs};