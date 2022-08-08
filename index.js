import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import { connectDB } from './src/db-init/dbconn.js';

import users from "./src/routes/users.js";

const app = express()

const port = 5000

app.use(bodyParser.json())

app.use(cors())

connectDB()

// app.get("/",(req,res)=>{res.send("Hello World")})

app.use("/",users)


app.all("*",(req,res)=>{res.send("Route not found")})

app.listen(port,()=>console.log(`Server is running on port ${port}`))
