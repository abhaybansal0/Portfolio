import '../styles/modern-normalize.css';
import '../styles/style_new.css';
import '../styles/Components/header.css'
import '../styles/Components/home.css'
import '../styles/Components/about.css'
import '../styles/Components/projects.css'
import '../styles/Components/contact.css'
import '../styles/utilities.css';


import lazyloading from './utils/lazy_loading';

lazyloading();


console.log("Welcome To My Portfolio!");



document.querySelector(".header__ham").addEventListener("click", ()=>{
    document.querySelector(".header__menu").classList.toggle("hidden");
})
document.querySelector(".header__menu").addEventListener("click", ()=>{
    document.querySelector(".header__menu").classList.toggle("hidden");
})
