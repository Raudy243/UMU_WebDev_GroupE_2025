// index.js — fade card images on hover 
document.addEventListener('DOMContentLoaded',()=>
      document.querySelectorAll('.card img')
     .forEach(i=>{i.style.transition='opacity .25s';
    i.addEventListener('mouseenter',()=>i.style.opacity='.6');
    i.addEventListener('mouseleave',()=>i.style.opacity='1')
}));
