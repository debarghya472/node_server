const express=require('express');

var app=express();

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.send({
        name : 'debarghya',
        like: 'photography'
    });
});

app.listen(3000,()=>{
    console.log('server is running!');
})