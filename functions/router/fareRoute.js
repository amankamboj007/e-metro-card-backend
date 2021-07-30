const router = require('express').Router()
const fareCalculation = require('../contollers/fareCalculation.controller')
router.get("/",(req,res) =>{
    let sourceStation = "Netaji Subhash Palace"
    let fares = {
        "Kashmere Gate" : 20,
        "Rajiv Chowk"   : 30,
        "Vaishali"      : 60
    }
    fare = fares["Kashmere Gate"]
    res.json({"fare": fare})
})
module.exports = router

