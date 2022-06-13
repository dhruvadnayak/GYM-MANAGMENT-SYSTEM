// document.addEventListener('DOMContentLoaded',function(){
//     fetch('http://localhost:5500/gtAll')
//    .then(response => response.json())
//    .then(data => loadHTMLTable(data['data']));
// });



const signupbtn = document.querySelector('.submit-signup-btn');

console.log(signupbtn)


signupbtn.addEventListener("click",function(){
   
    const nameInput = document.querySelector('#signup-name-input');
    const name = nameInput.value;
    nameInput.value = "";

    const emailInput = document.querySelector('#signup-email-input');
    const email = emailInput.value;
    emailInput.value = "";

    const passwordInput = document.querySelector('#signup-password-input')
    const password = passwordInput.value;
    passwordInput.value="";

    const genderInput = document.querySelector('#signup-gender-input')
    const gender = genderInput.value;
    genderInput.value="";

    const contactInput = document.querySelector('#signup-contact-input')
    const contact = contactInput.value;
    contactInput.value="";

    console.log(name,email,password,gender,contact);

    fetch('http://localhost:5500/append',{
       headers: 
       {
           'Content-type':'application/json'
       },
       method:'POST',
      
       body:JSON.stringify({name:name , email:email , password:password,gender:gender ,contact:contact}),
    })
    .then(response => response.json())



    .then(data => insertRowIntoTable(data['data']));
   
})


const loginbtn = document.querySelector('.submit-login-btn');

console.log(loginbtn)


loginbtn.addEventListener("click",function(){

    const nameInput = document.querySelector('#login-name-input');
    const loginName = nameInput.value;
    nameInput.value = "";

    const passwordInput = document.querySelector('#login-password-input');
    const loginPass = passwordInput.value;
    passwordInput.value="";

    fetch('http://localhost:5500/GetLoginAll/' + loginName,loginPass)
    .then(response => response.json())
    .then(data =>  loadHTMLTable(data['data']));

})
// function insertRowIntoTable(data){
//     const table = document.querySelector('table tbody');
    

//     let tableHtml = "<tr>";

//     data.forEach(function({ID , name , email ,gender, contact}){
        
//         tableHtml +=`<td>${ID}</td>`
//         tableHtml +=`<td>${name}</td>`
//         tableHtml +=`<td>${email}</td>`
//         tableHtml +=`<td>${gender}</td>`
//         tableHtml +=`<td>${contact}</td>`
//         tableHtml +=`<td><button class ="delete-btn" data-id = ${ID}>Delete</td>`
//         tableHtml +=`<td> <button class ="edit-row-btn" data-id = ${ID}>Edit</td>`
    
//     })   ;
//     tableHtml+="</tr>";

//     if(isTableData){
//         table.innerHTML=tableHtml;
//     } else{
//         const newRow = table.insertRow();
//         newRow.innerHTML = tableHtml;
//     }
// }


// function loadHTMLTable(data){
//     const table = document.querySelector('table tbody');

//      if (data.length === 0){
//          table.innerHTML = "<tr><td class =' no-data ' colspan='7'>No Data</td></tr>";
         
//      }
//      let tableHtml ="";

//      data.forEach(function({ID , name , email, gender,contact}){
//          tableHtml +="<tr>";
//          tableHtml +=`<td>${ID}</td>`
//          tableHtml +=`<td>${name}</td>`
//          tableHtml +=`<td>${email}</td>`
//         tableHtml +=`<td>${gender}</td>`
//         tableHtml +=`<td>${contact}</td>`
//         tableHtml +=`<td><button class ="delete-btn" data-id = ${ID}>Delete</td>`
//         tableHtml +=`<td> <button class ="edit-row-btn" data-id = ${ID}>Edit</td>`
//          tableHtml +="</tr>"
//      });

//      table.innerHTML = tableHtml;
//     }

