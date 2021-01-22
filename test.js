

let height = [2,5,4,5,2];
let k = 7;
let dose = 0;

for(let i = 0; i < height.length; i++){
   if(height[i]>k){
       (height[i] - k ) > dose ? dose = height[i] - k : dose = dose

   } else{
       dose = dose
   }
}

console.log(dose)


// node test.js