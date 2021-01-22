//function designerPdfViewer(h, word) {


//}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
let word = "zaba";
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let splitWord = word.split('');
let actualHeight = 0;
let heightHolder = 0;
let answer = 0;
let letterIndex = 0;

for(let i = 0; i < splitWord.length; i++){

 letterIndex = alphabet.indexOf(splitWord[i])
 heightHolder = h[letterIndex] > heightHolder ? h[letterIndex] : heightHolder
 actualHeight = heightHolder > actualHeight ? heightHolder : actualHeight
 
 
 heightHolder = 0;
}

answer = actualHeight * splitWord.length
console.log(answer);




//console.log(height);

// node designerPdf.js


 

