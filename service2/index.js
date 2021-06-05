const express = require('express')

const app = express()

app.get('/service2',(req,res,)=>{
res.send('Hello from service 2')
})

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Service running on ${port}`)
})