/*
npm install express
npm install nunjucks
npm install chokidar
npm install dotenv
npm install mysql
*/
require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const mysql = require('mysql');
const app = express();
const port = process.env.SERVER_PORT;
const bodyParser = require('body-parser')
console.log(port);


app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    autoescape:true,
});
app.use(bodyParser.urlencoded({extended:false}));

let connection = mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'0000',
     database:'jin',
});
connection.connect();

app.get('/',(req,res)=>{
    //SQL SELECT 
    connection.query("select * from user",(error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);
            results.forEach(ele=>{
                console.log(ele.userid,ele.userpw,ele.username);
            });
        }
    });

    res.render('index2.html',{
        name:req.query.username,
        userid:req.query.userid,
        userpw:req.query.userpw
    });
});

app.post('/join',(req,res)=>{
    console.log(req.body);
    // req.body 에있는 내용을 하나씨가져와보기
    // query문 을 작성해보자
    // 쿼리문을 실행시킨다 join.html을 실행 시킨다 (di,pw,name)
   let id= req.body.userid;
   let pw= req.body.userpw;
   let name= req.body.username;
   let sql = `insert into user(userid,userpw,username) values('${id}','${pw}','${name}')`;
   connection.query(sql,(error,results)=>{
       if(error){
           console.log(error);
       }else{
           console.log(results);
           res.render('join.html',{
               id:id,
               pw:pw,
               name:name
           });
       }
   });
});

app.listen(3000,()=>{
    console.log(`sever start port:${port}`);
});

