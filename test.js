const express=require('express');
const app=express();
const PORT=process.env.PORT ||  3000;

const myLogger=(req,res,next)=>{
    console.log("Request IP: " + req.ip);
    console.log("Request Method: " + req.method);
    console.log("Request date: " + new Date());

    next(); 
}
app.use(myLogger);

app.get('/',(req,res)=>{
    res.send(req.url); 
    

});


app.listen(PORT,()=>{
    console.log(`Server running port on ${PORT}`);
})