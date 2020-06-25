"use strict";


let modal = document.getElementById('myModal');
let callModalWindow = document.getElementById('callModalWindow');
let span = document.getElementsByClassName("close")[0];
let save = document.getElementById('save');

callModalWindow.addEventListener("click", () => {
    modal.style.display = "block";
});

span.addEventListener("click", () => {
    modal.style.display = "none";
});

function headTable(params) {
    let thead = document.createElement('thead')
    let tr = document.createElement('tr');
    tr.innerHTML = '<td>Name</td><td>Id</td><td>Phone</td><td>Edit</td>';
    thead.appendChild(tr);
    document.getElementById('visitorsList').appendChild(thead);
}
headTable();
function createVisitor() {
    let visitors = [];
    let id = (visitors.length + 1);
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let edit = '&#9998;';
    let visitor = {
        id: id,
        name: name,
        phone: phone,
        edit: edit,
    }
    visitors.push(visitor);
    console.log(visitors);
    modal.style.display = "none";
    if (visitors.length > 0) {
        let countVisitors = visitors.length;
        /* let table = document.createElement('table'); */
        let tbody = document.createElement('tbody');

        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        let items = ['name', 'id', 'phone','edit'];
        for (let i = 0; i < countVisitors; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 4; j++) {
                let td = document.createElement('td');
                let item = visitors[i][items[j]];
                td.innerHTML = item
                tr.appendChild(td); 
            }
            tbody.appendChild(tr);
            /* table.appendChild(tbody); */
            document.getElementById('visitorsList').appendChild(tbody);

        }
    }
}




save.addEventListener("click", createVisitor)





