

document.addEventListener('DOMContentLoaded',()=>{

    // Filter Table
    // Get DOM elements
    const _form = document.querySelectorAll('.search-filter');
    const _table = document.querySelectorAll('.result');
    const iconTable = document.querySelectorAll('.icon')
    // Call the function to initialize filtering behavior

    filterTable(_form, _table,iconTable);

    function filterTable(form, table,_icon) 
    {
        form.forEach(f=>{
            if(f != null)
                {
                    f.addEventListener('keyup', function() 
                    {
                        if (f.value == '') {
                            _icon.forEach(i=>{
                                  i.innerHTML= ' <i class="bi bi-search fs-16"></i>'
                            });
                         }else{
                             _icon.forEach(j=>{
                                 j.innerHTML = '<i class="bi bi-x-lg fs-16"></i>'
                             })
                         }
                        const searchTerm = f.value.trim().toLowerCase();
                        table.forEach(tab=>{
                            const containsSelector = function(elem) {
                                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf(searchTerm) !== -1;
                            };
                            const tr = tab.querySelectorAll('tbody tr');
                            tr.forEach(line =>{
                                if (containsSelector(line)) {
                                    line.setAttribute('visible', 'true');
                                } else {
                                    line.setAttribute('visible', 'false');
                                }
                            })
                        })
                    });
                }
        })
    }




    // Filter Other Content 

    // Generic Elements
    const display = document.querySelectorAll('.display-search')
    const form = document.querySelectorAll('.filter-box')
    const icon = document.querySelectorAll('._send')

    // Filter supplier
    const _supplier = document.querySelector('.supplier-container')
    filterData(form,_supplier,'.supplier','.su-fname','.su-lname','',icon)
    
    // filter Cheque
    const _cheque = document.querySelector('.cheque-container')
    filterData(form,_cheque,'.cheque','.ch-fname','.ch-lname','.ch-number',icon)

    // filter Proformat
    const _proformat = document.querySelector('.proformat-container')
    filterData(form,_proformat,'.proformat','.pro-fname','.pro-lname','.pro-number',icon)

    // filter Requisition
    const _requisition = document.querySelector('.requisition-container')
    filterData(form,_requisition,'.requisition','.re-prod-name','.re-name','.req-number',icon)

     // filter Receipt
     const _receipt = document.querySelector('.receipt-container')
     filterData(form,_receipt,'.receipt','.rc-fname','.rc-lname','.rc-number',icon)

    // filter Data
    function filterData(input,container,content,fname,lname,number,icon){
        // hide the display container
        if(input != null){
            display.forEach(d=>{
                d.classList.add("hide")
            })
           
           input.forEach(_form=>{
            _form.addEventListener('keyup',()=>{

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

                const item = _form.value.trim().toLowerCase()
                const lists = container.querySelectorAll(content)

                // test if data exist
                const containsData = (element)=>{
                    return (element.textContent || element.innerText || '').toLowerCase().indexOf(item) !== -1;
                }

                // filter by firstName OR lastName OR Number

                if(number == ''){
                    lists.forEach(list =>{
                        list.querySelectorAll(fname).forEach(f=>{
                             list.querySelectorAll(lname).forEach(l=>{
                                 if(containsData(f) || containsData(l)){
                                     list.classList.remove("hide")
                                     display.forEach(data=>{
                                         data.appendChild(list)
                                         data.classList.remove("hide")
                                     })
                                 }else{
                                     list.classList.add("hide")
                                     display.forEach(data=>{
                                         data.classList.remove("hide")
                                     })
                                 }
                             })
                             
                        })
                         
                     })
                }else{
                    lists.forEach(list =>{
                        list.querySelectorAll(fname).forEach(f=>{
                             list.querySelectorAll(lname).forEach(l=>{
                                list.querySelectorAll(number).forEach(n=>{
                                    if(containsData(f) || containsData(l) || containsData(n)){
                                        list.classList.remove("hide")
                                        display.forEach(data=>{
                                            data.appendChild(list)
                                            data.classList.remove("hide")
                                        })
                                    }else{
                                        list.classList.add("hide")
                                        display.forEach(data=>{
                                            data.classList.remove("hide")
                                        })
                                    }
                                })
                             })
                             
                        })
                         
                     })
                }
            })
           })
        }
    }


});

