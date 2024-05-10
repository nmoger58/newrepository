require('dotenv').config()

const express= require('express')

const app=express()

const port =4000

//  it is a virtual port  where server listens the request


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/myport',(req,res)=>{
    res.send('This is my first server')
})
// here myport is called route
app.get('/login',(req,res)=>{
    res.send("<h1> Please login with your account </h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// This is displayed on the terminal