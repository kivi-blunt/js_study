let num = 266219;
let newMult;
function multNum (num) {
    let mult=1;
    num.toString().split('').forEach(function(item, i,num){
        mult*=num[i];
})
 console.log(mult);
 console.log(mult**3);
 console.log((mult**3).toString().slice(0,2));
}

newMult = multNum(num);

