
const buyNowbtn = document.querySelector('#regular-submit-btn');


buyNowbtn.addEventListener('click',function(){
    console.log(buyNowbtn)
    alert("Slot has been registered, Thank you for Joining Us");
    const nameInput = document.querySelector('#regular-name');
    const name = nameInput.value;
    nameInput.value = "";

    const emailInput = document.querySelector('#regular-email');
    const email = emailInput.value;
    emailInput.value = "";

    // const passwordInput = document.querySelector('#signup-password-input')
    // const password = passwordInput.value;
    // passwordInput.value="";

    const genderInput = document.querySelector('#regular-gender')
    const gender = genderInput.value;
    genderInput.value="";

    const planInput = document.querySelector('#regular-plan')
    const plan = planInput.value;
    planInput.value="";

    const timeInput = document.querySelector('#regular-time')
    const time = timeInput.value;
    timeInput.value="";
    console.log(plan,time)

    fetch('http://localhost:5500/AppendRegular',{
       headers: 
       {
           'Content-type':'application/json'
       },
       method:'POST',
      
       body:JSON.stringify({name:name , email:email , gender:gender , plan:plan ,time:time}),
    })
    .then(response => response.json())
     .then(data => insertRowIntoTable(data['data']));
   
})