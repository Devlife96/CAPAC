// Generic Elements
const searchBoxes = document.querySelectorAll('.filter-box');
const searchIcons = document.querySelectorAll('._send');
const displayContainers = document.querySelectorAll('.display-search');

// Filter Data Function
function filterData(searchInput, container, listItemSelector, lastNameSelector, firstNameSelector, searchIcon) {
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const listItems = container.querySelectorAll(listItemSelector);

        // Show or hide search icon based on input
        if (searchTerm === '') {
            searchIcon.innerHTML = '<i class="bi bi-search fs-16"></i>';
        } else {
            searchIcon.innerHTML = '<i class="bi bi-x-lg fs-16"></i>';
        }

        listItems.forEach(item => {
            const lastName = item.querySelector(lastNameSelector).textContent.trim().toLowerCase();
            const firstName = item.querySelector(firstNameSelector).textContent.trim().toLowerCase();

            // Check if either first name or last name matches the search term
            if (lastName.includes(searchTerm) || firstName.includes(searchTerm)) {
                item.classList.remove("hide");
            } else {
                item.classList.add("Hide");
            }
        });

        // Show or hide display containers based on filtered items
        const visibleItems = container.querySelectorAll(listItemSelector + ':not(.hide)');
        const hasVisibleItems = visibleItems.length > 0;
        displayContainers.forEach(displayContainer => {
            displayContainer.classList.toggle('hide', !hasVisibleItems);
        });
    });
}

// Apply filter for Proformat
const proformatSearchBox = document.querySelector('.proformat-container .filter-box');
const proformatContainer = document.querySelector('.proformat-container');
const proformatListItemSelector = '.proformat';
const proformatLastNameSelector = '.pro-lname';
const proformatFirstNameSelector = '.pro-fname';
const proformatSearchIcon = document.querySelector('.proformat-container ._send');

filterData(proformatSearchBox, proformatContainer, proformatListItemSelector, proformatLastNameSelector, proformatFirstNameSelector, proformatSearchIcon);

// Apply filter for Cheques
const chequeSearchBox = document.querySelector('.cheque-container .filter-box');
const chequeContainer = document.querySelector('.cheque-container');
const chequeListItemSelector = '.cheque';
const chequeLastNameSelector = '.ch-lname';
const chequeFirstNameSelector = '.ch-fname';
const chequeSearchIcon = document.querySelector('.cheque-container ._send');

filterData(chequeSearchBox, chequeContainer, chequeListItemSelector, chequeLastNameSelector, chequeFirstNameSelector, chequeSearchIcon);





// Get DOM elements
const _form = document.querySelector('.search-filter');
const _table = document.querySelector('.result');
// Call the function to initialize filtering behavior

filterTable(_form, _table);

function filterTable(form, table) 
{
    if(form != null)
    {
        form.addEventListener('keyup', function() 
        {
            var searchTerm = form.value.trim().toLowerCase();
            var listItems = table.querySelectorAll('tbody tr');

            // Define the custom contains selector
            var containsSelector = function(elem) {
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf(searchTerm) !== -1;
            };

            // Filter list items
            listItems.forEach(function(item) {
                if (containsSelector(item)) {
                    item.setAttribute('visible', 'true');
                } else {
                    item.setAttribute('visible', 'false');
                }
            });
        });
    }
}









// Generic Elements
const search = document.querySelectorAll('.filter-box');
const icon = document.querySelectorAll('._send');
const display = document.querySelectorAll('.display-search');



document.addEventListener('DOMContentLoaded', function() {
   // Filter Proformat
    const _procontainer = document.querySelector('.proformat-container');
    FilterData(search,_procontainer,'.proformat','.pro-lname','.pro-fname',icon);

    // filter Cheques
    const _chcontainer = document.querySelector('.cheque-container');
    FilterData(search, _chcontainer, '.cheque', '.ch-lname','.ch-fname',icon);
});




function FilterData(formSearch, container,mainBox, lname,fname,icon) {

   display.forEach(d=>{
    d.classList.add('hide')
   });

   formSearch.forEach(form =>{
    form.addEventListener('keyup',()=>{
        if(form.value == ''){
           icon.forEach(i=>{
                i.innerHTML = '<i class="bi bi-search fs-16"></i>';
           });
        } 
        else{
           icon.forEach(i =>{
             i.innerHTML = '<i class="bi bi-x-lg fs-16"></i>'
           });
        }
         const item = form.value.trim().toLowerCase();
         const listItems = container.querySelectorAll(mainBox);
        

         const containsSelector = function(elem) {
            return (elem.textContent || elem.innerText || '').toLowerCase().indexOf(item) !== -1;
        };
       
        //Filter list by FirstName OR LastName
        listItems.forEach(it =>{
            it.querySelectorAll(fname).forEach(f=>{
                it.querySelectorAll(lname).forEach(l=>{
                    if(containsSelector(f) || containsSelector(l)){
                        it.classList.remove("hide") 
                        display.forEach(d=>{
                            d.appendChild(it)
                            d.classList.remove('hide')
                        })  
                        
                    }
                    else{
                        it.classList.add("hide")
                        display.forEach(d=>{
                            d.classList.add('hide')
                        }) 
                    }
                });
                    
                 });
                 
        });
});
   });
   
    
}

// // filter Supplier
// const _supContainer = document.querySelector('.supplier-container');
// FilterData(search, _supContainer, '.supplier','.su-lname', '.su-fname', icon);

// function FilterData(formSearch, container,mainBox, lname,fname,icon) {
//     display.classList.add('hide')
//     formSearch.forEach(form =>{
//      form.addEventListener('keyup',()=>{
//          if(form.value == ''){
//              icon.innerHTML = '<i class="bi bi-search fs-16"></i>'
//          } 
//          else{
//              icon.innerHTML = '<i class="bi bi-x-lg fs-16"></i>'
//          }
//           const item = formSearch.value.trim().toLowerCase();
//           let listItems = container.querySelectorAll(mainBox);
 
//           const containsSelector = function(elem) {
//              return (elem.textContent || elem.innerText || '').toLowerCase().indexOf(item) !== -1;
//          };
        
//          //Filter list by FirstName OR LastName
//          listItems.forEach(it =>{
//               lname = it.querySelectorAll(lname);
//               fname = it.querySelectorAll(fname);
//               fname.forEach(f=>{
//                  lname.forEach(l=>{
//                      if(containsSelector(f) || containsSelector(l)){
//                          it.classList.remove("hide")   
//                          display.appendChild(it)
//                          display.classList.remove('hide')
//                      }
//                      else{
//                          it.classList.add("hide")
//                          display.classList.add('hide')
//                      }
//                  });
                     
//                   });
                  
//          });
//  });
//     });
    
     
//  }
 