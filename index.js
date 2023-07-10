const express =  require('express');
const empsRelatedRoutes = require('./routes/emp');

console.log("done")
console.log("done")

const app = express();
app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})

app.use(express.json()); 


app.use('/emps',empsRelatedRoutes)

app.listen(9999,()=>{console.log("Server Started at 9999")})

// const express = require('express')
// const cors = require('cors')
// const mysql = require('mysql');

// const app = express()
// app.use(cors('*'))

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'manager',
//     database : 'NodejsDB'
//    });


//    app.get("/", (request, response)=>{
//     connection.query("select * from Employee", (error, result)=>{
//                 if(error==null)
//                 {
//                     var data = JSON.stringify(result) 
//                     response.setHeader("Content-Type","application/json");
//                     response.write(data);
//                 } 
//                 else
//                 {
//                     console.log(error);
//                     response.setHeader("Content-Type","application/json");
//                     response.write(error)
//                 }
//                 response.end();
//     })

// })

// app.post("/", (request, response)=>{
  

//     var query = 
//     `insert into Employee(id,Ename,email,password,empid,dname,doj) values(${request.body.id},'${request.body.Ename}','${request.body.email}','${request.body.password}',${request.body.empid},'${request.body.dname}','${request.body.doj}')`
//         connection.query(query, (error, result)=>{
//         if(error==null)
//         {
//             var data = JSON.stringify(result) 
//             response.setHeader("Content-Type","application/json");
//             response.write(data);
//         } 
//         else
//         {
//             response.setHeader("Content-Type","application/json");
//             response.write(error)
//         }
//         response.end();
// })
// })

// app.put("/", (request, response)=>{
//     var query = 
//     `update Employee set dname = '${request.body.dname}',
//                     doj = '${request.body.doj}' where id = ${request.body.id}`;

//     connection.query(query, (error, result)=>{
//                         if(error==null)
//                         {
//                             var data = JSON.stringify(result) 
//                             response.setHeader("Content-Type","application/json");
//                             response.write(data);
//                         } 
//                         else
//                         {
//                             console.log(error);
//                             response.setHeader("Content-Type","application/json");
//                             response.write(error)
//                         }
//                         response.end();
//                 })
// })

// app.delete("/:id", (request, response)=>{
//     var query = 
//     `delete from Employee where id = ${request.params.id}`;
                    
//     connection.query(query, (error, result)=>{
//                         if(error==null)
//                         {
//                             var data = JSON.stringify(result) 
//                             response.setHeader("Content-Type","application/json");
//                             response.write(data);
//                         } 
//                         else
//                         {
//                             console.log(error);
//                             response.setHeader("Content-Type","application/json");
//                             response.write(error)
//                         }
//                         response.end();
//                 })
// })

// app.listen(4000, '0.0.0.0', () => {
//   console.log('server started on port 4000')})