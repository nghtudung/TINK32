const em = document.querySelector('.em');
const classname = document.querySelector('.classname');
const header = document.querySelector('.header');
em.addEventListener('animationend', ()=>{
    classname.style.opacity = 1;
    classname.classList.add('animate__animated','animate__zoomInDown');
});
classname.addEventListener('animationend', ()=>{
    header.style.opacity = 1;
    header.classList.add('animate__animated','animate__slideInDown');
});

