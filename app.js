const express = require ('express');
const app = express();
const cors = require ('cors');
const dotenv = require ('dotenv');
// const { response } = require('express');
// const { request } = require('http');
dotenv.config();


const dbservice = require('./dbservice');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));


///////////////// Trainer create////////////////
app.post('/insert', (request , response)=>{
   
    const { name } = request.body;
    const { salary} = request.body;
    // const { service } = request.body;
    console.log(name,salary);
    const db = dbservice.getDbserviceInstance();

    const result = db.insertNewName(name,salary);

    result
    .then(data => response.json({data:data}))
    .catch(err => console.log(err));
    // console.log('test');
});



///////////////// trainer read//////////////////

app.get('/getAll', (request,response)=>{
    const db = dbservice.getDbserviceInstance();

    const result = db.getAllData();
  result
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
});


//////////////////// trainer update /////////////////////

app.patch('/update', (request, response)=>{
    const { id } = request.body;
    const { name } = request.body;
    console.log(request.body.id);
    const db = dbservice.getDbserviceInstance();

    const result = db.updateNameById(id,name);
    result
    .then(data => response.json({success: data}))
    .catch(err => console.log(err));
})


/////////////////// trainer delete //////////////////
app.delete('/delete/:id',(request , response)=>{
    const {id} = request.params;
    const db = dbservice.getDbserviceInstance(); 
    
    const result = db.deleteRowById(id);
  result
  .then(data => response.json({success : data}))
  .catch(err => console.log(err));
})


/////////////// trainer search ////////////////////

app.get('/search/:name', (request ,response) =>{
    const { name} =request.params;
    const db = dbservice.getDbserviceInstance(); 

    const result = db.searchByName(name);
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})



////////////////// user getall /////////////////////

app.get('/gtAll', (request,response)=>{
  console.log('test1');
  const db = dbservice.getDbserviceInstance();

  const result = db.gtAllData();
result
.then(data => response.json({data : data}))
.catch(err => console.log(err));
 console.log('test');
});


////////////////////////// user to login ////////////////////

app.get('/GetLoginAll/:loginName,loginPass', (request ,response) =>{
  const { loginName} =request.params;
  const { loginPass} = request.params;
  const db = dbservice.getDbserviceInstance(); 

  const result = db.checkUserSign(loginName,loginPass);
  result
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})

/////////////////user insert /////////////////////

app.post('/append', (request , response)=>{
  const { name } = request.body;
  const { email} = request.body;
  const {password}= request.body;
  const { gender } = request.body;
  const { contact} = request.body;

  console.log(name,email,password,gender,contact)

  const db = dbservice.getDbserviceInstance();

  const result = db. appendNewName(name,email,password,gender,contact);
  console.log(result);
  result
  .then(data => response.json({data:data}))
  .catch(err => console.log(err));
});

////////////// user delete row ///////////////

app.delete('/deletee/:id',(request , response)=>{
  const {id} = request.params;
  const db = dbservice.getDbserviceInstance(); 
  
  const result = db.deleteById(id);
result
.then(data => response.json({success : data}))
.catch(err => console.log(err));
// console.log(test2)
})

//user search row

app.get('/searchh/:name', (request ,response) =>{
  const { name} =request.params;
  const db = dbservice.getDbserviceInstance(); 

  const result = db.searchUserName(name);
  result
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})


//  regular GetAll

app.get('/GetAllRegular', (request,response)=>{
  const db = dbservice.getDbserviceInstance();

  const result = db.GetAllDataRegular();
result
.then(data => response.json({data : data}))
.catch(err => console.log(err));
 console.log('test');
});


//regular append

app.post('/AppendRegular', (request , response)=>{

   console.log(request.body)
  const { name } = request.body;
  const { email} = request.body;
  const { gender } = request.body;
  const  plan =request.body.plan;
  const  time  = request.body.time;
  console.log(name,email,gender,plan,time)

  const db = dbservice.getDbserviceInstance();

  const result = db. AppendNewNameRegular(name,email,gender,request.body.plan,request.body.time);

  result
  .then(data => response.json({data:data}))
  .catch(err => console.log(err));
});

//regular search

app.get('/SearchRegular/:name', (request ,response) =>{
  const { name} =request.params;
  const db = dbservice.getDbserviceInstance(); 

  const result = db.SearchRegularName(name);
  result
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})

// regular Delete

app.delete('/DeleteRegular/:id',(request , response)=>{
  const {id} = request.params;
  const db = dbservice.getDbserviceInstance(); 
  
  const result = db.deleteregularId(id);
result
.then(data => response.json({success : data}))
.catch(err => console.log(err));
// console.log(test2)
})


/////// GetAllPro function for pro table

app.get('/GetAllPro', (request,response)=>{
  const db = dbservice.getDbserviceInstance();

  const result = db.GetAllDataPro();
result
.then(data => response.json({data : data}))
.catch(err => console.log(err));
 console.log('test');
});

//////  Delete function from Pro table

app.delete('/DeletePro/:id',(request , response)=>{
  const {id} = request.params;
  const db = dbservice.getDbserviceInstance(); 
  
  const result = db.deleteproId(id);
result
.then(data => response.json({success : data}))
.catch(err => console.log(err));
// console.log(test2)
})

////// Search function from Pro table

app.get('/SearchPro/:name', (request ,response) =>{
  const { name} =request.params;
  const db = dbservice.getDbserviceInstance(); 

  const result = db.SearchProName(name);
  result
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})


////// Append function from Pro Table

app.post('/AppendPro', (request , response)=>{

  console.log(request.body)
 const { name } = request.body;
 const { email} = request.body;
 const { gender } = request.body;
 const  plan =request.body.plan;
 const  time  = request.body.time;
 console.log(name,email,gender,plan,time)

 const db = dbservice.getDbserviceInstance();

 const result = db. AppendNewNamePro(name,email,gender,request.body.plan,request.body.time);

 result
 .then(data => response.json({data:data}))
 .catch(err => console.log(err));
});

/////// GetAllZumba function of Zumba Table

app.get('/GetAllZumba', (request,response)=>{
  const db = dbservice.getDbserviceInstance();

  const result = db.GetAllDataZumba();
result
.then(data => response.json({data : data}))
.catch(err => console.log(err));
 console.log('test');
});

//////  Delete function from Zumba table

app.delete('/DeleteZumba/:id',(request , response)=>{
  const {id} = request.params;
  const db = dbservice.getDbserviceInstance(); 
  
  const result = db.deletezumbaId(id);
result
.then(data => response.json({success : data}))
.catch(err => console.log(err));
// console.log(test2)
})

////// Search function from Zumba table

app.get('/SearchZumba/:name', (request ,response) =>{
  const { name} =request.params;
  const db = dbservice.getDbserviceInstance(); 

  const result = db.SearchZumbaName(name);
  result
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})

////// Append function from Zumba table

app.post('/AppendZumba', (request , response)=>{

  console.log(request.body)
 const { name } = request.body;
 const { email} = request.body;
 const { gender } = request.body;
 const  plan =request.body.plan;
 const  time  = request.body.time;
 console.log(name,email,gender,plan,time)

 const db = dbservice.getDbserviceInstance();

 const result = db. AppendNewNameZumba(name,email,gender,request.body.plan,request.body.time);

 result
 .then(data => response.json({data:data}))
 .catch(err => console.log(err));
});



app.listen(5500 ,()=> console.log('app is running'));