const express = require ('express');
const app=express();

const hour = new Date().getHours();

app.use(date=(req,res,next)=>{
if(hour>=17 || hour<08)
res.send("<h1>Our office is not open now</h1>")
else
next();
})

app.get("/",(req,res)=>{
    if(hour>=17 || hour<08)
    res.send("<h1>Our office is not open now</h1>")
    else {
           res.sendFile(__dirname+"/public/home.html")
    }
})

app.use(express.static(__dirname+'/public'));




app.listen(3000,(err)=>{
    if(err) console.log('Server is not running');
    else console.log('Server is running on port 3000...')
})