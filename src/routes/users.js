import express from 'express';

const router = express.Router();

import users from '../model/users.js';

router.post("/register",async(req,res)=>{

    const { username,email, password } = req.body;
    // console.log("=======",req.body);
    const data = new users(req.body)

    console.log('====================================');
    console.log(data);
    console.log('====================================');

    let user = await users.findOne({email})

    console.log("============",user?.email);
    try{
        if(data.email !== user?.email){
        await data.save()
        res.status(200).json({
            message:"user added successfully"
        })}
        else{
            res.status(400).json({
                messgae:"Email Already Registered"
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:"User Insert Failed"
        })
    }
})

// router.get("/getuser",async(req,res)=>{
//     const {id} = req.body
//     try{
//          await users.find()

//         res.status(200).json({
//             message:"user found successfully",
//             data
//         })
//     }
//     catch(err){
//         res.status(500).json({
//             message:"User fetch Failed"
//         })
//     }

// })
export default router;