const express=require('express')
const bodyParser =require('body-parser')
const connectMongoDb=require('./connection.js')
const userRoutes=require('./routes/user')
const {logReqRes}=require('./middlewares/index')
const app=express();


app.use(bodyParser.json());
app.use('/api/users',userRoutes)

//connect mongoDb
connectMongoDb("mongodb://localhost:27017/user-app")
.then(()=>{
  console.log("connect to mongo")
})
 .catch((err)=>{
  console.log("Error",err)
 })

app.use(logReqRes('logger.txt'))

app.listen(8000,()=>{
    console.log('server is run')
})
