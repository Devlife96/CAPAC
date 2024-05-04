const width = window.innerWidth;
const links = document.querySelectorAll('.web-details');
if (width < 1024)
links.forEach(el =>{
    el.addEventListener('click',(e)=>{
        e.preventDefault()
    })
})
