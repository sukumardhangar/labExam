const express =  require('express');
const appForEmps = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'manager',
    database : 'NodejsDB'
   });


appForEmps.get("/", (request, response)=>{
    connection.query("select * from Employee", (error, result)=>{
                if(error==null)
                {
                    var data = JSON.stringify(result) 
                    response.setHeader("Content-Type","application/json");
                    response.write(data);
                } 
                else
                {
                    console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
                }
                response.end();
    })

})

appForEmps.post("/", (request, response)=>{
  

    var query = 
    `insert into Employee(id,Ename,email,password,empid,dname,doj) values(${request.body.id},'${request.body.Ename}','${request.body.email}','${request.body.password}',${request.body.empid},'${request.body.dname}','${request.body.doj}')`
        connection.query(query, (error, result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result) 
            response.setHeader("Content-Type","application/json");
            response.write(data);
        } 
        else
        {
            response.setHeader("Content-Type","application/json");
            response.write(error)
        }
        response.end();
})
})

appForEmps.put("/", (request, response)=>{
    var query = 
    `update Employee set dname = '${request.body.dname}',
                    doj = '${request.body.doj}' where id = ${request.body.id}`;

    connection.query(query, (error, result)=>{
                        if(error==null)
                        {
                            var data = JSON.stringify(result) 
                            response.setHeader("Content-Type","application/json");
                            response.write(data);
                        } 
                        else
                        {
                            console.log(error);
                            response.setHeader("Content-Type","application/json");
                            response.write(error)
                        }
                        response.end();
                })
})

appForEmps.delete("/:id", (request, response)=>{
    var query = 
    `delete from Employee where id = ${request.params.id}`;
                    
    connection.query(query, (error, result)=>{
                        if(error==null)
                        {
                            var data = JSON.stringify(result) 
                            response.setHeader("Content-Type","application/json");
                            response.write(data);
                        } 
                        else
                        {
                            console.log(error);
                            response.setHeader("Content-Type","application/json");
                            response.write(error)
                        }
                        response.end();
                })
})

module.exports = appForEmps;