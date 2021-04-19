const express = require('express');  //express 를 생성한다.
const app = express();  // app에다 express 객체를 담는다.
const port = 3000;

/*
app- express 에 대한 객체
app.get() 이벤트 입니다  url 에 변동에대한 이벤트
app.get() 어떻게 실행되는가?
2가지 매개변수가 있습니다.
1.경로 입니다'/'=> localhost:3000
2.콜백함수 ()=>{2가지의 인자값이 존재합니다}
ex) filter((value,key)==>{});
응답이란
서버는 요청을 받은 내용을 토대로 응답을 해주는 기계
요리사는 고객에게 요청을 받아서 요리를 만들어서 내주는 사람입니다.

응답해줌.보냄('뚝배기');
응답.send('Hello world!');
*/

app.get('/',(요청,응답)=>{  //naver.com 자기자신
    응답.send('Hellow world');
});
app.get('/hello',(요청,응답)=>{  //naver.com/hello 자기자신
    응답.send('Hellow world2');
});
app.get('/jin',(요청,응답)=>{  //naver.com/hello 자기자신
    응답.send('i am  jin');
});

app.listen(port,()=>{
    console.log(`server is listening at localhost ${port}`);
});
app.listen(port,()=>{
    console.log(`server is listening at localhost ${port}`);
}); // app 객채에서 listen() 매서드를 호출했스빈다.listen 매서드에는 2가지 매개변수 || 인자값이 들어갑니디
//1.port 가 들어갑니다. [컴퓨터는 5만개정도의 구멍이 있습니다. 5만번 까지 포트가 존재한다.]
//만약 zoom 인터넷을 사용한다. 3000이라고 가정..
//저희코드도 3000이라고 하면 두번째 사용한거는 실행이 안된다. 8080 8000 
//2.실행되었을때 콜백합수가 들어간다.
//


// get ; 읽기  post ;쓰기  put ; 수정  deleate; 삭제
// get 은 url에 직관적으로 보인다. get요청  눈에 보이는 데이터
//post 는 로그인 , 회원가입 에 쓰인다.  눈에 안보이는 데이터 

//express 라는 라이브러리를 다운받아야 실행가능하다.
//npm init
//npm express
//npm install express
//터미널에 치다
//1순위 npm 사용할수있게 만든다음 (npm init)
//2순위 nom을 통해 express 설치

//터미널으 키고 / server.js 가 있는 폴더안에서 / npm init
//start  node 파일명
//end ctrl+C
//다시 시작하려면 방향키 위로 하면 전에 사용한게 나옴
// 브라우저에 localhost:3000
//localhost:3000/jin 내가지정해놓은대로 나온다.

//코드를 수정하면 서버를 무조건 껐다 켜야 적용이된다.