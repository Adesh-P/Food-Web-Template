let navBar = document.querySelector('.navbar');
let formClose= document.querySelector('#form-close');

window.onscroll = () =>{
    formClose.classList.remove('fa-times');
    navBar.classList.remove('active');
}

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});