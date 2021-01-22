let i = 20;
let j = 23;
let k = 6;
let beautifulDays = 0;
let finalReverseNum = 0;
let absDifference = 0;
let numString = "";
let reverseNumString = "";
let numArray = [];
let reverseNumArray = [];



for(i; i<=j; i++){
    numString = i.toString(); 
    numArray = numString.split("");
    reverseNumArray = numArray.reverse();
    reverseNumString = reverseNumArray.join("");
    finalReverseNum = parseInt(reverseNumString);
    absDifference = Math.abs(i - finalReverseNum);

   if( absDifference % k === 0){
    beautifulDays++
   }
}

console.log(beautifulDays);


// node beautifulDays.js