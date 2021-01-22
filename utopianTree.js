//function utopianTree(n) {


//}

let n = 5;
let treeHeight = 1;

for (let i = 0; i <= n; i++){
    if(i === 0){
        treeHeight;
    } else if(i%2 !== 0){
        treeHeight = treeHeight*2;
    } else{
        treeHeight = treeHeight + 1;
    }
}

console.log(treeHeight)

// node utopianTree.js