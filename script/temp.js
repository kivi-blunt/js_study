
let arr = [];
let newArr = [];
for(let i=0; i<7;i++)
{
    arr[i]=prompt('Введите многозначное число');
  if ((arr[i].toString()[0])==='2'||(arr[i].toString()[0])==='4')
    {
        newArr.push(arr[i]);
    }
}

function isPrime (n) {
    for (let j=2; j<n; j++){
         if(n%j == 0) {
         return false;
        }
    }
        return n>1;
     
}


 for (let i=2; i<100; i++) {
     if (isPrime(i))
     console.log(i + ': Делители этого числа: 1 и ' + i);
 }
