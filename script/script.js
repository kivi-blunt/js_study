let money = prompt('Ваш месячный доход?'); //Спрашиваем у пользователя
let income = 'Фриланс'; //строка с дополнительными доходом 
let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую'); //строка дополнительных расходов 
let deposit = confirm('Есть ли у вас депозит в банке?'); // любое булево значение
let expenses1 = prompt ('Введите обязателььную стать расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt ('Введите обязателььную стать расходов');
let amount2 = +prompt('Во сколько это обойдется?');
let mission = 100000; //любое число
let period = 1; //число от 1 до 12 (месяцев) 
let dayAmount=30;
const getExpensesMonth = function() {
    let result=0;
        for (var i=0; i<arguments.length;i++){
            result+=arguments[i];
        }
    return result;
}
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth);
let budgetDay = accumulatedMonth/dayAmount; //дневной бюджет

function getAccumulatedMonth(money, getExpensesMonth) {
    return money-getExpensesMonth(amount1, amount2);
}

function getTargetMonth(accumulatedMonth, mission) {
    return Math.ceil(mission/accumulatedMonth);
}

function getStatusIncome(budgetDay) {
    if(budgetDay<0) console.log('Что то пошло не так');
    if (budgetDay>=1200) 
        console.log('У вас высокий уровень дохода');
    else if (budgetDay>=600) 
        console.log('У вас Средний уровень дохода');
    else if (budgetDay>=0) 
        console.log('У вас низкий уровень дохода');
}

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log('Сумма всех обяхательных расходов за месяц:'+getExpensesMonth(amount1, amount2));
console.log(addExpenses.toLowerCase().split(","));
console.log('Доходы минус расходы' + accumulatedMonth);
console.log('Цель будет достигнута за:' + getTargetMonth(accumulatedMonth,mission)+ 'месяцев');
console.log('Бюджет на день:'+  Math.floor(budgetDay));
getStatusIncome(budgetDay);
