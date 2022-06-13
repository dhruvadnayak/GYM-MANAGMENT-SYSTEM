// const { response } = require("express");

// const { response } = require("express");

// const { type } = require("os");

document.addEventListener('DOMContentLoaded',function(){
    fetch('http://localhost:5500/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
})

document.querySelector('table tbody').addEventListener('click',function(event){
    
    if(event.target.className === "delete-row-btn"){
        deleteRowById(event.target.dataset.id);
    }

    if(event.target.className === "edit-row-btn"){
      handleEditRow(event.target.dataset.id);
    }
});

function deleteRowById(id){
    fetch('http://localhost:5500/delete/' + id,{
        method:'DELETE'
    })
    .then(response => response.json())
    .then(data =>{
        if (data.success){
            location.reload();
        }
    });
}

function handleEditRow(id){
    const updateSection= document.querySelector('#update-row');

    updateSection.hidden = false;

    document.querySelector('#update-name-input').dataset.id = id;
    // document.querySelector('#update-sal-input').dataset.id = id;

}


const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function(){
    const searchValue = document.querySelector('#search-input').value
    fetch('http://localhost:5500/search/' + searchValue)
    .then(response => response.json())
    .then(data =>  loadHTMLTable(data['data']));

}

const updateBtn = document.querySelector('#update-row-btn');

updateBtn.onclick = function(){
    const updateNameInput = document.querySelector('#update-name-input');
    console.log(updateNameInput);

    fetch('http://localhost:5500/update', {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
         
        body: JSON.stringify({
            id: updateNameInput.dataset.id,
            name: updateNameInput.value
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    })
}

const addBtn = document.querySelector('#add-name-btn')

addBtn.onclick = function(){

    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;
    nameInput.value = "";

    const salaryInput = document.querySelector('#salary-input');
    const salary = salaryInput.value;
    salaryInput.value = "";

    // const serviceInput = document.querySelector('#service-input')
    // const service = serviceInput.value;
    // serviceInput.value="";

    fetch('http://localhost:5500/insert',{
       headers: 
       {
           'Content-type':'application/json'
       },
       method:'POST',
      
       body:JSON.stringify({name:name , salary:salary}),
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
    location.reload()
}

function insertRowIntoTable(data){
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');

    let tableHtml = "<tr>";

    data.forEach(function({ID , name , salary , serviceid}){
        
        tableHtml +=`<td>${ID}</td>`
        tableHtml +=`<td>${name}</td>`
        tableHtml +=`<td>${salary}</td>`
        tableHtml +=`<td>${serviceid}</td>`
        tableHtml +=`<td><button class ="delete-row-btn" data-id = ${ID}>Delete</td>`
        tableHtml +=`<td> <button class ="edit-row-btn" data-id = ${ID}>Edit</td>`
    
    })   ;
    tableHtml+="</tr>";

    if(isTableData){
        table.innerHTML=tableHtml;
    } else{
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }
}


function loadHTMLTable(data){
    const table = document.querySelector('table tbody');

     if (data.length === 0){
         table.innerHTML = "<tr><td class =' no-data ' colspan='6'>No Data</td></tr>";
         return;
     }
     let tableHtml ="";

     data.forEach(function({ID , name , salary }){
         tableHtml +="<tr>";
         tableHtml +=`<td>${ID}</td>`
         tableHtml +=`<td>${name}</td>`
         tableHtml +=`<td>${salary}</td>`
        //  tableHtml +=`<td>${serviceid}</td>`
         tableHtml +=`<td><button class ="delete-row-btn" data-id = ${ID}>Delete</td>`
         tableHtml +=`<td> <button class ="edit-row-btn" data-id = ${ID}>Edit</td>`
         tableHtml +="</tr>"
     });

     table.innerHTML = tableHtml;
    }