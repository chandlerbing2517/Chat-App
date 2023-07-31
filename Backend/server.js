const express=require("express");
const app=express();
const dotenv=require('dotenv');
//const cors = require('cors')
const colors = require('colors');
const connectDB=require('./config/db');
const UserRoutes=require('./Routes/userRoutes');
const chatRoutes=require('./Routes/chatRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
//const path = require('node:path');
dotenv.config();
connectDB();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
//app.use(cors());
const {chats} = require("./data/data");
app.get("/",(req,res)=>{
    res.send("API");
})
app.use('/api/user',UserRoutes)
app.use('/api/chat',chatRoutes);
app.use(notFound);
app.use(errorHandler);
const port=process.env.PORT||3001;
app.listen(port,console.log("Perfect"));