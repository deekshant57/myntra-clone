const express=require("express");

const router=express.Router();

const cathomeliving=require("../models/categoryhome.model");

router.post("/",async(req,res)=>{
    try{
        const cathomelivingdatas=await cathomeliving.insertMany(req.body);
        return res.status(200).send(cathomelivingdatas);
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

router.get("/",async(req,res)=>{
    try{
        const cathomelivingdatas=await cathomeliving.find().lean().exec();
        return res.status(200).send(cathomelivingdatas);
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});


module.exports=router;