//function viralAdvertising(n) {


//}

let liked = 0;
let likedCumulative = 0;
let shared = 5;
let n = 4;


for(let i = 1; i <= n; i++){
    
        liked = Math.floor(shared / 2);
        likedCumulative = likedCumulative + liked;
        shared = liked * 3;
    

}

console.log(likedCumulative);

// node viralAdvertising.js
