const mysql = require ('mysql');
const dotenv = require('dotenv');
// const { resolve } = require('path/posix');
dotenv.config();
let instance = null;

const connection = mysql.createConnection({
    host:'localhost',
    user:'SERVER',
    password:'SERVER@035',
    database:'GYM_MANAGMENT',
    port:3306
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    console.log('db '+ connection.state);
});

class Dbservice{
    static getDbserviceInstance(){
        return instance ? instance : new Dbservice();
    }
    
    async getAllData(){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM trainee";

                connection.query(query, (err , results)=>{
                    if(err) reject (new Error(err.message));
                    resolve(results);
                })
            }); 

            // console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }

    async insertNewName(name,salary) {
        try{

            const insertID = await new Promise((resolve,reject)=>{
                const query = "INSERT INTO trainee (name,salary) VALUES(?,?);";

                connection.query(query, [name,salary],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.insertID);
                })
            }); 

            //  console.log(insertID);
            return {
                ID:insertID,
                name:name,
                salary:salary,
                // service:service
            };

        }catch(error){
            console.log(error);
        }
    }

    async deleteRowById(id){
        try{
            id = parseInt(id , 10);
            const response= await new Promise((resolve,reject)=>{
                const query = "DELETE FROM trainee WHERE id = ?";
    
                connection.query(query, [id],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.affectedRows);
                })
            }); 
            return response === 1 ? true:false;
            // console.log(response);

        }catch(error){
            console.log(error);
            return false;
        }
    }
    
    async updateNameById(id,name){

        try{
            console.log(id,name)
            id = parseInt(id , 10);
            const response= await new Promise((resolve,reject)=>{
                const query = "UPDATE trainee SET name = ? WHERE ID = ?";
    
                connection.query(query, [name,id],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.affectedRows);
                })
            }); 
            return response === 1 ? true:false;
            // console.log(response);

        }catch(error){
            console.log(error);
            return false;
        }
    }
    async searchByName(name){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM trainee WHERE name = ?";

                connection.query(query,[name], (err , results)=>{
                    if(err) reject (new Error(err.message));
                    resolve(results);
                })
            }); 

            // console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }

    ////////////////////////////////// User getAll //////////////////////////////////////

    async gtAllData(){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM user_sign";

                connection.query(query, (err , results)=>{
                    if(err) reject (new Error(err.message));
                    resolve(results);
                })
            }); 

            // console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }


    //////////////////////////////// user login check ////////////////////////////////

    async checkUserSign(loginName,loginPass){
        try{
            const response =await new Promise((resolve,reject)=>{

                const query = "SELECT * FROM user_sign WHERE loginName=? AND loginPass=?";
                connection.query(query,[loginName,loginPass],(err,result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            });
            console.log(response.length);
            const t=response.length
            return t=== 0? false :true;
          
        }catch(err){
            console.log(err);
            return false;
        }
    }


    /////////////////////////////////  user insert function  ///////////////////////////////////

    async appendNewName(name,email,passowrd,gender,contact) {
        try{

            const insertID = await new Promise((resolve,reject)=>{
                const query = "INSERT INTO user_sign (name,email,password,gender,contact) VALUES(?,?,?,?,?);";

                connection.query(query, [name,email,passowrd,gender,contact],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.insertID);
                })
            }); 

            console.log(insertID,contact);
            return {
                ID:insertID,
                name:name,
                email:email,
                passowrd:passowrd,
                gender:gender,
                contact:contact
            };

        }catch(error){
            console.log(error);
        }
    }
    
    //////////////////////////////// user delete function  //////////////////////////////////

    async deleteById(id){
        try{
            id = parseInt(id , 10);
            const response= await new Promise((resolve,reject)=>{
                const query = "DELETE FROM user_sign WHERE id = ?";
    
                connection.query(query, [id],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.affectedRows);
                })
            }); 
            return response === 1 ? true:false;
            // console.log(response);

        }catch(error){
            console.log(error);
            return false;
        }
    }

    ///////////////////////////////  user search function  //////////////////////////////////////

    async searchUserName(name){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM user_sign WHERE name = ?";

                connection.query(query,[name], (err , results)=>{
                    if(err) reject (new Error(err.message));
                    resolve(results);
                })
            }); 

            // console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }

    // GetAll function for regular

    async GetAllDataRegular(){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM regular";

                connection.query(query, (err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            }); 

         console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }

    // append name to regular info

    async AppendNewNameRegular(name,email,gender,plan,time) {
        try{

            const insertID = await new Promise((resolve,reject)=>{
                const query = "INSERT INTO regular (name,email,gender,plan,time) VALUES(?,?,?,?,?);";

                connection.query(query, [name,email,gender,plan,time],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.insertID);
                })
            }); 

            console.log(insertID);
            return {
                ID:insertID,
                name:name,
                email:email,
                gender:gender,
                plan:plan,
                time:time
            };

        }catch(error){
            console.log(error);
        }
    }

    // search function of regular

    async SearchRegularName(name){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM regular WHERE name = ?";

                connection.query(query,[name], (err , results)=>{
                    if(err) reject (new Error(err.message));
                    resolve(results);
                })
            }); 

            // console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }

    // regular delete function

    async deleteregularId(id){
        try{
            id = parseInt(id , 10);
            const response= await new Promise((resolve,reject)=>{
                const query = "DELETE FROM regular WHERE id = ?";
    
                connection.query(query, [id],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.affectedRows);
                })
            }); 
            return response === 1 ? true:false;
            // console.log(response);

        }catch(error){
            console.log(error);
            return false;
        }
    }

    ////// GetAllPro function for Pro table

    async GetAllDataPro(){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM pro";

                connection.query(query, (err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            }); 

         console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }

    ////// Append function for Pro Table

    
    async AppendNewNamePro(name,email,gender,plan,time) {
        try{

            const insertID = await new Promise((resolve,reject)=>{
                const query = "INSERT INTO pro (name,email,gender,plan,time) VALUES(?,?,?,?,?);";

                connection.query(query, [name,email,gender,plan,time],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.insertID);
                })
            }); 

            console.log(insertID);
            return {
                ID:insertID,
                name:name,
                email:email,
                gender:gender,
                plan:plan,
                time:time
            };

        }catch(error){
            console.log(error);
        }
    }

    ////// Search function for Pro table

    async SearchProName(name){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM pro WHERE name = ?";

                connection.query(query,[name], (err , results)=>{
                    if(err) reject (new Error(err.message));
                    resolve(results);
                })
            }); 

            // console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }

    ////// Delete function for Pro table

    async deleteproId(id){
        try{
            id = parseInt(id , 10);
            const response= await new Promise((resolve,reject)=>{
                const query = "DELETE FROM pro WHERE id = ?";
    
                connection.query(query, [id],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.affectedRows);
                })
            }); 
            return response === 1 ? true:false;
            // console.log(response);

        }catch(error){
            console.log(error);
            return false;
        }
    }

    ////// GetAllPro function for Zumba table

    async GetAllDataZumba(){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM zumba";

                connection.query(query, (err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result);
                })
            }); 

         console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }

    ////// Append function for Zumba Table

    
    async AppendNewNameZumba(name,email,gender,plan,time) {
        try{

            const insertID = await new Promise((resolve,reject)=>{
                const query = "INSERT INTO zumba (name,email,gender,plan,time) VALUES(?,?,?,?,?);";

                connection.query(query, [name,email,gender,plan,time],(err , result)=>{
                    if(err) reject (new Error(err.message));
                    resolve(result.insertID);
                })
            }); 

            console.log(insertID);
            return {
                ID:insertID,
                name:name,
                email:email,
                gender:gender,
                plan:plan,
                time:time
            };

        }catch(error){
            console.log(error);
        }
    }

     ////// Search function for Zumba table

     async SearchZumbaName(name){
        try{ 
            const response = await new Promise((resolve,reject)=>{
                const query = "SELECT * FROM zumba WHERE name = ?";

                connection.query(query,[name], (err , results)=>{
                    if(err) reject (new Error(err.message));
                    resolve(results);
                })
            }); 

            // console.log(response);
            return response;
        }catch(error){
            console.log(error);
        }
    }

 ////// Delete function for Zumba table

 async deletezumbaId(id){
    try{
        id = parseInt(id , 10);
        const response= await new Promise((resolve,reject)=>{
            const query = "DELETE FROM zumba WHERE id = ?";

            connection.query(query, [id],(err , result)=>{
                if(err) reject (new Error(err.message));
                resolve(result.affectedRows);
            })
        }); 
        return response === 1 ? true:false;
        // console.log(response);

    }catch(error){
        console.log(error);
        return false;
    }
}




}

module.exports = Dbservice;