//function appendAndDelete(s, t, k) {


//}


let s = "abc";
let t = "def";
let k = 3;

let s_String = s.toString();
let t_String = t.toString();

let sArray = s_String.split("");
let tArray = t_String.split("");

for(let i = 0; i < sArray.length(); i++){
if(sArray[i] === tArray[i]){
    sArray.pop();
} else{
    k-=1;
}

console.log(sArray,tArray);


// node appendDelete.js





