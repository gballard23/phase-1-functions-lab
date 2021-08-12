// Code your solution in this file!
const start = 42;

function distanceFromHqInBlocks(blocks){
   if(blocks >= 42){
   return blocks - start;
   }
   else{ 
       return start - blocks;
   }
}

function distanceFromHqInFeet(blocks){
   if(blocks >= start){
       return ((blocks - start) * 264)
   }else{
       return ((start - blocks) * 264)
    }
}

function distanceTravelledInFeet(blocks, blocks2){
    if(blocks > blocks2){
        return ((blocks - blocks2) * 264)
    }else{ 
        return ((blocks2 - blocks) * 264)
    } 
}


function calculatesFarePrice(blocks, blocks2){
    const distanceTravelled = distanceTravelledInFeet(blocks, blocks2);
    if(distanceTravelled < 400){
        return 0;
    }
    else if(distanceTravelled  >= 400 && distanceTravelled <= 2000){
        return ((distanceTravelled - 400) * 0.02)
    }
    else if(distanceTravelled > 2000  && distanceTravelled <= 2500){
        return 25
    }
    else if(distanceTravelled > 2500){
    return 'cannot travel that far'
    }
}