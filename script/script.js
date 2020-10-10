let money = 100; //любое число “Доход за месяц”, 
let income = 'Фриланс'; //строка с дополнительными доходом 
let addExpenses = 'Такси, интернет'; //строка дополнительных расходов 
let deposit = true; // любое булево значение
let mission = 1000; //любое число
let period = 1; //число от 1 до 12 (месяцев) 
let budgetDay = 1000; //дневной бюджет

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);

console.log("Период равен " + period + " Месяцев");
console.log("Цель зарабоать " + mission + " рублей/долларов");


console.log(addExpenses.toLowerCase().split(","));
console.log(budgetDay);