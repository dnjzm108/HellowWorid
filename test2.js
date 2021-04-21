const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const bodyParser = require('body-parser');

nunjucks.configure('views',{
    express:app,
    auroescape:true,
});

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','html');

app.get('/',(요청,응답)=>{
    console.log(요청);
    console.log(요청.query.name);
    console.log(요청.query.user_id);
    console.log(요청.query.user_pw);

응답.render('index.html',{
    name:요청.query.name,
    user_id:요청.query.id,
    user_pw:요청.query.pw
 });
});
app.post('/',(요청,응답)=>{
    console.log(요청,body);
    응답.send('로그인이 완료되셨습니다.')
});
app.listen(3500,()=>{
    console.log('server start port : 3500');
});
