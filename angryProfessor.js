//function angryProfessor(k, a) {


//}

//let a = [-1,-3,0,5,7,8];
let a = [0 ,-1, 2, 1]
let k = 2;
let threshold = 0;

for(let i = 0; i <= a.length; i++){
    if (a[i]<=0){
        threshold = threshold  + 1;
    }else if(a[i]>0){
        threshold = threshold;
    }
}

if(threshold > k){
    console.log("Yes")
} else{
    console.log("No")
}
console.log(threshold)
// node angryProfessor.js