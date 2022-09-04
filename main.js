// set up
let addButton = document.getElementById('addButton');
let Name = document.querySelector("#name")
let Date = document.querySelector("#Date")
let Amount = document.querySelector("#Amount")




// set button function
addButton.onclick = function add(){
    if(Name.value==='' || Date.value==='' || Amount.value===''){
        alert('please make sure the you filled all the required inputes')
    }
    else{
        //create td name
        const tableDataName = document.createElement('td')
        tableDataName.classList = 'data-name'
        tableDataName.style.display='block';
        tableDataName.innerHTML = Name.value;
        let headName = document.getElementById('head-name')
        headName.appendChild(tableDataName)
        Name.value='';
        
        // create td date
        const tableDataDate = document.createElement('td')
        tableDataDate.classList = 'data-date';
        tableDataDate.style.display='block';
        tableDataDate.innerHTML = Date.value;
        let headDate= document.getElementById('head-date')
        headDate.appendChild(tableDataDate)
        Date.value='';

        //create td amount
        const tableDataAmount = document.createElement('td');
        tableDataAmount.classList = 'data-amount';
        tableDataAmount.style.display='block';
        tableDataAmount.innerHTML = Amount.value;
        let headAmount = document.getElementById('head-amount');
        headAmount.appendChild(tableDataAmount)
        Amount.value='';

        //create remove button
        let thremovebutton = document.getElementById('removeButton');
        let tdremovebutton = document.createElement('td');
        tdremovebutton.style.display='block'
        thremovebutton.appendChild(tdremovebutton)
        let removebutton = document.createElement('input');
        removebutton.setAttribute("type","button");
        removebutton.style = 'background-color:rgb(34, 224, 34); border:none; cursor:pointer; color:#fff;font-weight:800;'
        // thremovebutton.style.display='inline';
        removebutton.setAttribute('value','remove')
        tdremovebutton.appendChild(removebutton);
        //remove items function 
        removebutton.onclick = ()=> {
                                    tableDataName.remove()
                                    tableDataDate.remove()
                                    tableDataAmount.remove()
                                    tdremovebutton.remove()
                                }
    }
}


