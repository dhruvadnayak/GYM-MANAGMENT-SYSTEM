document.addEventListener('DOMContentLoaded',function(){
    fetch('http://localhost:5500/GetAllRegular')
   .then(response => response.json())
   .then(data => loadHTMLTable(data['data']));
});

document.querySelector('table tbody').addEventListener('click',function(event){
   
   if(event.target.className === "delete-btn"){
       deleteregularId(event.target.dataset.id);
   }
});

//delete row from user

function deleteregularId(id){
   fetch('http://localhost:5500/DeleteRegular/' + id,{
       method:'DELETE'
   })
   .then(response => response.json())
   .then(data =>{
       if (data.success){
           location.reload();
       }
   });
}

// search name 

const searchBtn = document.querySelector('#search-regular-btn');

searchBtn.onclick = function(){
    const searchValue = document.querySelector('#search-input').value
    fetch('http://localhost:5500/SearchRegular/' + searchValue)
    .then(response => response.json())
    .then(data =>  loadHTMLTable(data['data']));

}





// user insert function

// const signupbtn = document.querySelector('.submit-signup-btn');

// console.log(signupbtn)
// signupbtn.addEventListener('click',function(){

//     const nameInput = document.querySelector('#signup-name-input');
//     const name = nameInput.value;
//     nameInput.value = "";

//     const emailInput = document.querySelector('#signup-email-input');
//     const email = emailInput.value;
//     emailInput.value = "";

//     // const passwordInput = document.querySelector('#signup-password-input')
//     // const password = passwordInput.value;
//     // passwordInput.value="";

//     const genderInput = document.querySelector('#signup-password-input')
//     const gender = genderInput.value;
//     genderInput.value="";

//     const contactInput = document.querySelector('#signup-password-input')
//     const contact = contactInput.value;
//     contactInput.value="";

//     fetch('http://localhost:5500/append',{
//        headers: 
//        {
//            'Content-type':'application/json'
//        },
//        method:'POST',
     
//        body:JSON.stringify({name:name , email:email , gender:gender ,contact:contact}),
//     })
//     .then(response => response.json())
//     .then(data => insertRowIntoTable(data['data']));
//     location.reload()
// })





function loadHTMLTable(data){
   const table = document.querySelector('table tbody');

    if (data.length === 0){
        table.innerHTML = "<tr><td class =' no-data ' colspan='7'>No Data</td></tr>";
        return;
    }
    let tableHtml ="";

    data.forEach(function({ID, name ,email ,gender,plan,time}){
        tableHtml +="<tr>";
        // tableHtml +=`<td>${ID}</td>`
        tableHtml +=`<td>${name}</td>`
        tableHtml +=`<td>${email}</td>`
       tableHtml +=`<td>${gender}</td>`
       tableHtml +=`<td>${plan}</td>`
       tableHtml +=`<td>${time}</td>`
       tableHtml +=`<td><button class ="delete-btn" data-id = ${ID}>Delete</td>`
        tableHtml +="</tr>"
    });

    table.innerHTML = tableHtml;
   }