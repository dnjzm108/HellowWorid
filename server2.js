const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const bodyParser = require('body-parser');

nunjucks.configure('views',{
    express:app,
    auroescape:true,
});
app.use(bodyParser.urlencoded({extended:false}));

app.set('viwe wngine','html');

app.get('/',(요청,응답)=>{
    console.log(요청);
    console.log(요청.query.name);
    console.log(요청.query.user_id);
    console.log(요청.query.user_pw);


응답.render('index.html',{
    mame:요청.query.name,
    user_id:요청.query.id,
    user_pw:요청.query.pw
});
});

app.post('/',(요청,응답)=>{
    console.log(요청.body);
    응답.send('회원가입이 완료 되셨습니다.')
});
app.listen(3400,()=>{
    console.log('server start port : 3400');
});