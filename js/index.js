// Search

let search = document.querySelector('.search_box');

document.querySelector('#search_icon').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

// Navbar

let navbar = document.querySelector('.navbar');

document.querySelector('#menu_icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

// أحذف القائمة المنسدلة و البحث إذا تحرك تحت أو فوق

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}

// Header Animation

let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('active', window.scrollY > 0);
});