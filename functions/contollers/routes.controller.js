const db = require("../models");
const userModel = db.user

const create = async(req, res) => {
  // Create a Tutorial
  const User = {

      name:req.body.name,
      phoneNumber:req.body.phoneNumber,
      email:req.body.email,
      isActive:"true",
      walletID:req.body.walletID
  
  };
 if(!User.name || !User.phoneNumber || !User.email || !User.walletID)
 {
   return res.status(400).send('Entities Missing')
 }
  // Save User in the database
  await userModel.create(User)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
const getuserdetails = async (req, res) => {
try{
  const userDetails = await userModel.findAll({where:{isActive:true}})
if(!userDetails){
  return res.status(200).send({
      status: 404,
      message: 'No data found'   
  });
}
res.status(200).send({
  status: 200,

  data:userDetails  
});
}
catch(error){
console.log(error)
return res.status(400).send({
  message:'Unable to find data',
  errors: error,
  status: 400
});
}
}
const updatedetails = async (req, res) => {
  try{
  const userDetails =await userModel.update({  
    name:req.body.name,
    phoneNumber:req.body.phoneNumber,
    email:req.body.email,
    walletID:req.body.walletID
  },
      {where: {userID: req.body.userID,isActive: true}  
  });
if(userDetails == 0 ){
  return res.status(200).send({
      status: 404,
      message: 'No data found'   
  });
}
res.status(200).send({
  status: 200,
  message: 'user Update Successfully'
});
}
catch(error){
console.log(error)
return res.status(400).send({
  message:'Unable to update user',
  errors: error,
  status: 400
});
}}
const deleteuser = async (req, res) => {
  try{
        
  const userDetails =await userModel.update({  
    isActive:"false"
    
  },
      {where: {userID: req.body.userID} 
  });
if(!userDetails){
  return res.status(200).send({
      status: 404,
      message: 'No data found'   
  });
}
res.status(200).send({
  status: 200,
  message: 'user deleted Successfully'
});
}
catch(error){
console.log(error)
return res.status(400).send({
  message:'Unable to update user',
  errors: error,
  status: 400
});
}}

module.exports = {
  create,
  getuserdetails,
  updatedetails,
  deleteuser
}