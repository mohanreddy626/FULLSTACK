import express from "express";
import users from "./user.js";
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello,world!');
});

app.get('/api/user',(req,res) =>{
    res.send(users);
});

app.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`);
});
