const router = require('express').Router()

function calculateFare(distance){
    const baseFare = 10
    let totalFare = 0
    if(distance <= 2){
        totalFare += baseFare
        return totalFare
    }
    else let totalFare;
    if (distance > 2 && distance <= 5) {
        totalFare += 20
        return totalFare
    } else if (distance > 5 && distance <= 12) {
        totalFare += 30
        return totalFare
    } else if (distance > 12 && distance <= 21) {
        totalFare += 40
        return totalFare
    } else if (distance > 21 && distance <= 32) {
        totalFare += 50
        return totalFare
    } else if (distance > 32) {
        totalFare += 60
        return totalFare
    } else {
        if (distance < 0) {
            throw ("Distance cannot be negative")
        } else {
            throw ("Distance not measurable")
        }

    }
}
distance = 19
router.get("/calculateFare",(req,res) =>{
    try{
        const fare = calculateFare(distance)
        res.status(200).send(fare)
    }
    catch (e){
        res.status(400).send(e)
    }
})