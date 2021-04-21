require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const mysql = require('mysql');
const app = express();
const port = process.env.SERVER_PORT;
const bodyParser = require('body-parser');

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    autoescape: true,
});

app.use(bodyParser.urlencoded({ extended: false }));

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'jin',
});

connection.connect();

app.get('/', (req, res) => {
    connection.query("select * from homework", (errpr, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            redults.forEach(ele => {
                console.log(ele.id, ele.pw, ele.name, ele.gender);
            });
        }
    });
    res.render('index2.html', {
        name: req.query.name
    });
});

app.post('/join', (req, res) => {
    console.log(req.body);
    let id = req.body.id;
    let pw = req.body.pw;
    let name = req.body.name;
    let gender = req.body.gender;
    let sql = `insert into homework(name,id,pw,gender) values('${name}','${id}','${pw}','${gender}')`;
    connection.query(sql, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            res.render('join.html', {
                name: name,
                id: id,
                pw: pw,
                gender: gender
            });
        }
    });
});

app.listen(3000, () => {
    console.log(`server start port:${port}`);
});