//Checking first sum pair in an sorted array is zero
//[-5,-4,-3,-2,0,2,4,6,8] (Input)
//[-4,4] -> output
function Sumpair(array){
   let  left=0;
   let  Right=array.length -1;
   while(left<Right){
       let sum=array[left]+array[Right];
       if(sum===0){
           return [array[left],array[Right]];
       }else sum>0 ?Right--:left++;
   }
}
let pair = Sumpair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(pair)
//complexity-o(n) linear complexity