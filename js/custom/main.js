// TARGETING CLASSES 
const sideMenu= document.querySelector("aside");
const menuBtn= document.querySelector("#menu-btn");
const closeBtn= document.querySelector("#close-btn");



menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})


const viewModel= document.querySelector('.view-model');
const aside = document.querySelector('.aside');

viewModel.addEventListener('click',function(){
    aside.classList.add('');
})