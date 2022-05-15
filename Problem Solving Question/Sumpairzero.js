//Checking first sum pair in an sorted array is zero
//[-5,-4,-3,-2,0,2,4,6,8] (Input)
//[-4,4] -> output
function sum(array){
    for(let i=0;i<array.length;i++){
        // console.log(i);
        for(let j=1;j<array.length;j++){
            // console.log([array[i],array[j]]);
            if(array[i]+array[j]===0){
                return ([array[i],array[j]]);
                // return [array[i],array[j]
            }
        }
    }
}
const pair = sum([-5,-4,-3,-2,0,2,4,6,8]);
console.log(pair);