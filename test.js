const express = require("express");
const app = express();
const port= 3000;

app.get('/',(요청,응답)=>{
    응답.send('Helli world!');
});
app.listen(port,()=>{
    console.log(`server id listening at localhost ${port}`);
});