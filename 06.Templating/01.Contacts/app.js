import { render } from '../node_modules/lit-html/lit-html.js'
import { contacts } from './contacts.js'
import cardTemplate from './card.js'

const container = document.getElementById('contacts');
container.addEventListener('click', onClick)


const result = contacts.map(cardTemplate);
render(result, container)


function onClick(event) {
    if (event.target.classList == 'detailsBtn') {
        const element = event.target.parentNode;
        const currentStyle = element.querySelector('.details').style.display
        if (currentStyle == 'none') {
            element.querySelector('.details').style.display = 'block'
        } else {
            element.querySelector('.details').style.display = 'none'
        }
    }

}