const express = require('express')

const app = express()

app.get('/service1',(req,res,)=>{
res.send('Hello from service 1')
})

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Service running on ${port}`)
})