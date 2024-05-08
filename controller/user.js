const User=require('../models/user')

async function handleGetAllUsers(req,res){
    const allDbUsers=await User.find({});
     return res.json(allDbUsers)
}

async function handleDeleteById(req,res){
    await User.findByIdAndDelete(req.params.id,{last_name:'changed'})
    return res.status(200).send({status:'update'})
   
}

async function handleUpdateById(req,res){
    await User.findByIdAndDelete(req.params.id, { lastName: 'Changed' })
    return res.json({ status: 'Success' })

}


async function handleCreateNewUser(req, res){


    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({
            error: "Bad Request",
        });
    }
    try {
        const result = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title,
        });
        console.log("result", result);
        return res.status(200).json({ msg: 'Success', id: result._id});
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }


}


module.exports={
    handleGetAllUsers,
    handleDeleteById,
    handleCreateNewUser,
    handleUpdateById}