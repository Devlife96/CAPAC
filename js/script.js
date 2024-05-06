const width = window.innerWidth;
const links = document.querySelectorAll('.web-details');
const _menuContainer= document.querySelectorAll('._menu-container')
const drop = document.querySelectorAll('._menu-dropdown');
const _menu_icon = document.querySelectorAll('._menu');
if (width < 1024)
links.forEach(el =>{
    el.addEventListener('click',(e)=>{
        e.preventDefault()
    })
})

playAction(_menuContainer, '._menu', '._menu-dropdown')

// Dropdown Menu
  function removeAction(element, content, id) {
    element.forEach((el, index) => {
      if (index != id) {
        el.querySelector(content).classList.add("hide");
      }
    });
  }


  function playAction(element,header, content) {
    element.forEach((el, id) => {
       let _header = el.querySelector(header);
      let _content = el.querySelector(content);
      _content.classList.add("hide");
  
      _header.addEventListener("click", () => {
        if (_content.classList.contains("hide")) {
          _content.classList.remove("hide");
          _header.innerHTML= ' <i class="bi bi-x-lg white-4 fs-28 "></i>'
        } else {
          _content.classList.add("hide");
          _header.innerHTML = ' <i class="bi bi-filter-left white-4 fs-28 "></i>'
        }
        removeAction(element, content, id);
      });
    });
  }



