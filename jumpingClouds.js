//function jumpingOnClouds(c, k) {


//}
let  k = 3;


let c =  [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
let e = 100;

for(let i = 0; i <= c.length; i = i + k){
    if (c[i] === 0){
        e = e - 1;

    } else if (c[i] === 1) {
        e = e - 1 - 2;
    }
    console.log("Inside The Loop");
    
}
console.log(e);

// node jumpingClouds.js