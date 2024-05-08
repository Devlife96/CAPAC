

document.addEventListener('DOMContentLoaded',()=>{

    // Generic Elements
    const display = document.querySelectorAll('.display-search')
    const form = document.querySelectorAll('.filter-box')
    const icon = document.querySelectorAll('._send')

    // Filter supplier
    const _supplier = document.querySelector('.supplier-container')
    filterData(form,_supplier,'.supplier','.su-fname','.su-lname',icon)
    
    // filter Cheque
    const _cheque = document.querySelector('.cheque-container')
    filterData(form,_cheque,'.cheque','.ch-fname','.ch-lname',icon)

    // filter Cheque
    const _proformat = document.querySelector('.proformat-container')
    filterData(form,_proformat,'.proformat','.pro-fname','.pro-lname',icon)

    // filter Cheque
    const _requisition = document.querySelector('.requisition-container')
    filterData(form,_requisition,'.requisition','.re-prod-name','.re-name',icon)

     // filter Cheque
     const _receipt = document.querySelector('.receipt-container')
     filterData(form,_receipt,'.receipt','.rc-fname','.rc-lname',icon)

    // filter Data
    function filterData(input,container,content,fname,lname,icon){
        // hide the display container
        if(input != null){
            display.forEach(d=>{
                d.classList.add("hide")
            })

           input.forEach(_form=>{
            _form.addEventListener('keyup',()=>{


                if (_form.value == '') {
                   icon.forEach(i=>{
                         i.innerHTML= ' <i class="bi bi-search fs-16"></i>'
                   });
                }else{
                    icon.forEach(j=>{
                        j.innerHTML = '<i class="bi bi-x-lg fs-16"></i>'
                    })
                }

                const item = _form.value.trim().toLowerCase()
                const lists = container.querySelectorAll(content)

                // test if data exist
                const containsData = (element)=>{
                    return (element.textContent || element.innerText || '').toLowerCase().indexOf(item) !== -1;
                }

                // filter by firstName OR lastName
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

            })
           })













        }
    }


});

