
function calculateFare(distance){
    const baseFare = 10
    let totalFare = 0
    if(distance <= 2){
        totalFare += baseFare
        return totalFare
    }
    else{
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
    } 
    }
}

module.exports = calculateFare