const express=require('express');

var app=express();

app.use(express.static(__dirname+'/public'))

const port=process.env.PORT || 3000;

app.get('/public/help.html',(req,res)=>{
    res.send({
        name : 'debarghya',
        like: 'photography'
    });
});

app.listen(port,()=>{
    console.log('server is running!');
})