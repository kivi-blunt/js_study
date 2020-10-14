function newFunction (argument) {
    if (typeof(argument)!="string")
    {
        console.log("Переданный аргумент не строка");
    }
    let newString = argument.trim();
  //  console.log(argument.length);
//console.log(argument.slice(5, argument.length))
   if (argument.length>5){ 

         newString=argument.replace(argument.slice(5, newString.length),"...");
        //let arr = argument.split('');
        //let str = arr.splice(5, argument.lenght-5, '...');
        console.log(newString);
   }
    
}

let argument = prompt("Введите аргумент функции");
newFunction(argument);