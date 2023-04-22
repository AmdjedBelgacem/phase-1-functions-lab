function distanceFromHqInBlocks(distance){
    return Math.abs(42 - distance);
} 

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264;
}

function distanceTravelledInFeet(from, to){
    return Math.abs(to-from)*264;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    }
    else if ((distance >= 400) && (distance <= 2000 )){
        return 2.56;
    }
    else if ((distance > 2000) && (distance < 2500)){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}