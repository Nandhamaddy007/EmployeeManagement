const express = require('express');
const cors = require('cors')
const bodyParser=require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.post('/login', (req, res) => {
    console.log(req.body)
    let logAuth=req.body
    
    if(logAuth.user=='Admin' && logAuth.pass=='12345'){
        res.send(
            {token:"Admin"}
            );
    }else if(Object.keys(logAuth).length > 0){
        res.send(
            {token:"Employee"}
            );
    }else{
        console.log('empty request')
        res.send(
            {token:"bad request"}
        )
    }
    
});
app.get('/Getdata',(req,res)=>{
    res.json(
        {
            "emp":[
            {"empid":"1001"},
            {"empid":"1002"},
            {"empid":"1003"}
    ]}
    )
})
app.post('/AddEmployee',(req,res)=>{
    
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));