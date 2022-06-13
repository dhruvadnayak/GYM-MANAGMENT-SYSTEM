
const EnrollBtnNow = document.querySelector('#zumba-submit-btn');


EnrollBtnNow.addEventListener('click',function(){
    console.log(EnrollBtnNow)
    const nameInput = document.querySelector('#zumba-name');
    const name = nameInput.value;
    nameInput.value = "";

    const emailInput = document.querySelector('#zumba-email');
    const email = emailInput.value;
    emailInput.value = "";

    // const passwordInput = document.querySelector('#signup-password-input')
    // const password = passwordInput.value;
    // passwordInput.value="";

    const genderInput = document.querySelector('#zumba-gender')
    const gender = genderInput.value;
    genderInput.value="";

    const planInput = document.querySelector('#zumba-plan')
    const plan = planInput.value;
    planInput.value="";

    const timeInput = document.querySelector('#zumba-time')
    const time = timeInput.value;
    timeInput.value="";
    console.log(plan,time)

    fetch('http://localhost:5500/AppendZumba',{
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