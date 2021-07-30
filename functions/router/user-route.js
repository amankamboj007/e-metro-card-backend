
const { create,getuserdetails,updatedetails,deleteuser } = require("../contollers/routes.controller");
  
let user = [{
    user1:{
    "Name": "Abc TEST",
    "Phone_No" : "+919990316787",
    "Email":"covigo@gmail.com"
    },
    user2:{
        "Name": "Abc2 TEST",
        "Phone_No" : "+919998888222",
        "Email":"covigo123@gmail.com"
    },
    user3:{
        "Name": "Abc3 TEST",
        "Phone_No" : "+918899889988",
        "Email":"covigo456@gmail.com"
    }
}]
var router = require("express").Router();
console.log('hi')
router.get("/",(req,res)=>{
    res.json(200,user)
        })
router.post('/Add',create)
router.get('/all',getuserdetails)
router.put('/update',updatedetails)
router.put('/delete',deleteuser)
module.exports = router