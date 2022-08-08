import express from 'express';

const router = express.Router();

import users from '../model/users.js';

router.post("/adduser",async(req,res)=>{
    console.log("=======",req.body);
    const data = new users(req.body)
    console.log("============",data);
    try{
        await data.save()
        res.status(200).json({
            message:"user added successfully"
        })
    }
    catch(err){
        res.status(500).json({
            message:"User Insert Failed"
        })
    }
})

router.get("/getuser",async(req,res)=>{
    const {id} = req.body
    try{
         await users.find()

        res.status(200).json({
            message:"user found successfully",
            data
        })
    }
    catch(err){
        res.status(500).json({
            message:"User fetch Failed"
        })
    }

})
export default router;