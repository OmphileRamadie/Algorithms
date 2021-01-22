let seats = [];

let m = 19;
let s = 2;
let counter = s;
let n = 7;


for(let i = 1; i <= m; i++){ 
 seats.push(counter);
 counter === n ? counter = 1 : counter++;
}
console.log(seats[seats.length-1]);

// node saveThePrisoner.js