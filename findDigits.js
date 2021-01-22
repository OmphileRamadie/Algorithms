

//function findDigits(n) {


//}


let n = 1012;
let count = 0;

let numString = n.toString();
let numArray = numString.split("");

for (let i = 0; i < numArray.length; i++){

    if(n %  numArray[i] === 0){
        count+=1;
    } else{
        count = count;
    }
}

console.log(count);



// node findDigits.js