import './index.css';
import jsIcon from './assets/picture.png';


const jsImageHTML = document.createElement('img')
const body = document.querySelector("body")
jsImageHTML.className = 'js-icon'
body.append(jsImageHTML)
jsImageHTML.src = jsIcon
console.log('Hello World!')