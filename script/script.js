let money = prompt('Ваш месячный доход?'); //Спрашиваем у пользователя
let income = 'Фриланс'; //строка с дополнительными доходом 
let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую'); //строка дополнительных расходов 
let deposit = confirm('Есть ли у вас депозит в банке?'); // любое булево значение
let expenses1 = prompt ('Введите обязателььную стать расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt ('Введите обязателььную стать расходов');
let amount2 = +prompt('Во сколько это обойдется?');
let mission = 1000; //любое число
let period = 1; //число от 1 до 12 (месяцев) 
let DayAmount = 30;
let budgetMonth = money-(amount1+amount2);
let budgetDay = budgetMonth/DayAmount; //дневной бюджет




console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);

console.log("Период равен " + period + " Месяцев");
console.log("Цель зарабоать " + mission + " рублей/долларов");


console.log(addExpenses.toLowerCase().split(","));

console.log('Бюджет на месяц:'+ budgetMonth);
console.log('Цель будет достигнута за:' + Math.ceil(mission/budgetMonth)+ 'месяцев');
console.log('Бюджет на день:'+  Math.floor(budgetDay));

if(budgetDay<0) console.log('Что то пошло не так');
if (budgetDay>=1200) 
    console.log('У вас высокий уровень дохода');
else if (budgetDay>=600) 
    console.log('У вас Средний уровень дохода');
else if (budgetDay>=0) 
    console.log('У вас низкий уровень дохода');