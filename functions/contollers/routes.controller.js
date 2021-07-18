const router = require('express').Router()

router.get('/user',(req,res)=>{
    res.status(200).send('hello')
})







module.exports = router;