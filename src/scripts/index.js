import './style.css';
import home from "./home"
import homeImage from './home-image.jpg';


const parent = document.createElement('div');
parent.id = 'parent';
document.body.appendChild(parent)
parent.appendChild(home());

const hbImage = new Image();
hbImage.src = homeImage;
parent.appendChild(hbImage);