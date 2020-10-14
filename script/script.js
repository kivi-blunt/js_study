let money;
/*let income = 'Фриланс'; //строка с дополнительными доходом 
let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую'); //строка дополнительных расходов 
let deposit = confirm('Есть ли у вас депозит в банке?'); // любое булево значение
let expenses1 = prompt ('Введите обязателььную стать расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt ('Введите обязателььную стать расходов');
let amount2 = +prompt('Во сколько это обойдется?');*/
let mission = 100000; //любое число
let period = 1; //число от 1 до 12 (месяцев) 
let dayAmount=30;
let isNumber = function(n) {
    return !isNaN(parseFloat(n)&&isFinite(n));
};
let start = function () {
    money = prompt('Ваш месячный доход?');
    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }
};
start();
let expenses = [];
const getExpensesMonth = function() {
    let result=0;
        for (var i=0; i<2;i++){
            expenses[i]=prompt ('Введите обязателььную стать расходов');
            let temp=+prompt('Во сколько это обойдется?');
            if (isNumber(temp))
            result+=temp;
        }
    console.log(expenses);
    return result;
};

let totalExp = getExpensesMonth();
let accumulatedMonth = getAccumulatedMonth(money, totalExp);
let budgetDay = accumulatedMonth/dayAmount; //дневной бюджет

function getAccumulatedMonth(money, totalExp) {
    return money-totalExp;
}

function getTargetMonth(accumulatedMonth, mission) {
    let target= Math.ceil(mission/accumulatedMonth);
        if (target>=0) {
            console.log('Цель будет достигнута');
        } else {
             console.log('Цель не будет достигнута');
        }
    return target;
}
let targetMonth = getTargetMonth(accumulatedMonth, mission);
function getStatusIncome(budgetDay) {
    if(budgetDay<0) console.log('Что то пошло не так');
    if (budgetDay>=1200) 
        console.log('У вас высокий уровень дохода');
    else if (budgetDay>=600) 
        console.log('У вас Средний уровень дохода');
    else if (budgetDay>=0) 
        console.log('У вас низкий уровень дохода');
}


/*console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));*/
console.log('Сумма всех обяхательных расходов за месяц:'+ totalExp);
//console.log(addExpenses.toLowerCase().split(","));
console.log('Доходы минус расходы' + accumulatedMonth);
console.log('Цель будет достигнута за:' + targetMonth+ 'месяцев');
console.log('Бюджет на день:'+  Math.floor(budgetDay));
getStatusIncome(budgetDay);
