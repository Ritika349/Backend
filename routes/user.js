const express =require('express')
const {handleGetAllUsers, handleDeleteById, handleCreateNewUser, handleUpdateById}=require('../controller/user')
const router=express.Router() 


router.get('/',handleGetAllUsers)
  
router.post('/',handleCreateNewUser)
  
 router.route('/:id',handleUpdateById)
  .patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{last_name:'changed'})
   return res.status(200).send({status:'update'})
  }).delete(handleDeleteById);

 module.exports=router   
  