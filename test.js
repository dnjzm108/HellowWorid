//nunjucks
//터미널에서 npm install nunjucks chokidar
//메모 npm install -g ungit
//body-parser
//npm install body-parser

const express = require('express');
const nunjucks = require('nunjucks');// nunjucks 가져오기
const app = express();
const bodyParser=require('body-parser');

nunjucks.configure('views',{
    express:app,   // express는 어떤걸 쓸거냐
    autoescape:true, // 보안 문제 인데 무조건 true
});

app.use(bodyParser.urlencoded({extended:false}));
//그냥 외워야 하는 부분

app.set('view engine','html'); //nunjucks 셋팅

app.get('/',(요청,응답)=>{
    // 응답.send('Helli world!'); // view engine
    // 응답.set('title','test')
    //http://localhost:3300/?name=asdf&web7722&px=1234
    //queryString => URL 에 담는 변수
    //[도메인]=>NAVER.COM  GOOGLE.COM
    //NAVER.COM >localhost:3000
    //[도메인]? 변수 = 값&변수 = 값&변수 =값....
    //express => name=asdf&id=7722&
    /*
    name:asdf
    */
   //요청에서 qqery 라는 곳에 내요을 담아준다
   /*
   query{
       name:asdf
       id:web7772
   }
   querystring */
    console.log(요청);
    console.log(요청.query.name);
    console.log(요청.query.user_id);
    console.log(요청.query.user_pw);

    응답.render('index.html',{
        name:요청.query.name,
        user_id:요청.query.id,
        user_pw:요청.query.pw
    });
    //서버를 껏다 다시실행
});
app.post('/',(요청,응답)=>{
    console.log(요청.body);
    응답.send('post로 왔나요?')
})
app.listen(3300,()=>{
    console.log(`server start port : 3300`);
});

//get = url   post = body

