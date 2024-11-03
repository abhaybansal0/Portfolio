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

window.addEventListener('resize', ()=>{
    window.scrollTo(0, 0);
})


document.querySelector(".header__ham").addEventListener("click", ()=>{
    document.querySelector(".header__menu").classList.toggle("hidden");
})
document.querySelector(".header__menu").addEventListener("click", ()=>{
    document.querySelector(".header__menu").classList.toggle("hidden");
})

// document.querySelectorAll(".close").forEach(element => {
//     element.addEventListener("click", ()=>{
//         console.log("An list item was clicked");
        
//         document.querySelector(".header__menu").classList.toggle("hidden");
//     }) 
// });
