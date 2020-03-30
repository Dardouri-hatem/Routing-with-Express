const express = require ('express');

const app=express()
app.use(date=(req,res,next)=>{
let hour = new Date().getHours()
let minute = new Date().getMinutes()
if(hour>=17 || hour<08)
res.send("Our office is not open now")
else
next()
})

app.use(express.static(__dirname+'/public'))



app.listen(3000,(err)=>{
    if(err) console.log('server not running');
    else console.log('server is running on port 3000...')
})