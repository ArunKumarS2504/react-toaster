const { get } = require('mongoose');
const User=require('../model/userModels');

const create=async(req,res)=>{
    try{
        const userData=new User(req.body);
        if(!userData){
            return res.status(404).send({message:'User data not found'})
        }
        await userData.save();
        res.status(200).json({message:'User created successfully',data:userData});
    }
    catch(error){
        res.status(500).json({msg:error.message})
    }
}

const getOne=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).send({message:'User not found'})
        }
        res.status(200).json({message:'User found',data:userExist});
    }catch(error){
        res.status(500).json({msg:error.message})
    }
};

const getAll=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).send({message:'User not found'})
        }
        res.status(200).json({userData});
    }catch(error){
        res.status(500).json({msg:error.message})
    }
};

const update=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).send({message:'User not found'})
        }
        const updateData=await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({message:'User update successfully',data:userExist});
    }catch(error){
        res.status(500).json({msg:error.message})
    }
};

const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id
        const userExist = await User.findById(id)
        if(!userExist){
            return rex.status(404).send({message:'User not exist'})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({msg:'User Deleted'})
    }
    catch(error){
        res.status(500).json({msg:error.message})
    }
}

module.exports= {
    create:create,
    update:update,
    getAll:getAll,
    getOne:getOne,
    deleteUser:deleteUser
}