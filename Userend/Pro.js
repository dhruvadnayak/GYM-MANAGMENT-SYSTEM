
const EnrollNowbtn = document.querySelector('#pro-submit-btn');


EnrollNowbtn.addEventListener('click',function(){
    console.log(EnrollNowbtn)
    const nameInput = document.querySelector('#pro-name');
    const name = nameInput.value;
    nameInput.value = "";

    const emailInput = document.querySelector('#pro-email');
    const email = emailInput.value;
    emailInput.value = "";

    // const passwordInput = document.querySelector('#signup-password-input')
    // const password = passwordInput.value;
    // passwordInput.value="";

    const genderInput = document.querySelector('#pro-gender')
    const gender = genderInput.value;
    genderInput.value="";

    const planInput = document.querySelector('#pro-plan')
    const plan = planInput.value;
    planInput.value="";

    const timeInput = document.querySelector('#pro-time')
    const time = timeInput.value;
    timeInput.value="";
    console.log(plan,time)

    fetch('http://localhost:5500/AppendPro',{
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