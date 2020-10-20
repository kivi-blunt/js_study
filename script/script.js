let money; 

let isNumber = function(n) {
    return !isNaN(parseFloat(n)&&isFinite(n));
};
let start = function () {
    money = prompt('Ваш месячный доход?', 40000);
    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?', 40000);
    }
    appData.asking();
    appData.getBudget(money);
    appData.getTargetMonth();
};
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false, 
    percetDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3, 
    dayAmount: 30,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    newTarget:0,
    asking: function(){
        if (confirm('Есть ли у вас доп заработок?')) {
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'таксую');
            while (isNumber(itemIncome)) {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'таксую');
            }
            let cashIncome = prompt('Сколько в месяц?', 10000);
            while(!isNumber(cashIncome)) {
                cashIncome = prompt('Сколько в месяц?', 10000);
            }
            appData.income[itemIncome] = cashIncome;
        }
        let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'салик,танцы,Привте');
        appData.addExpenses = addExpenses.toLowerCase().split(",");
       
        appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
        appData.budget = money;
       
        for (var i=0; i<2;i++){
                    let temp;
                    let temp2;
                    temp = prompt ('Введите обязателььную стать расходов', 'Садик'); 
                    temp2=+prompt('Во сколько это обойдется?', 1500);
                        if (isNumber(temp2)) {
                        appData.expensesMonth+=temp2;
                        appData.expenses[temp]=temp2;
                    }
                }
        
        
        
    },
    
    getBudget: function (money) {
        appData.budgetMonth = money-appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth/appData.dayAmount;
    },

        
    getTargetMonth: function () {
        let target= Math.ceil(appData.mission/appData.budgetMonth);
            if (target>=0) {
                console.log('Цель будет достигнута');
            } else {
                console.log('Цель не будет достигнута');
            }
      appData.newTarget = target;
    },
    getStatusIncome: function(budgetDay) {
        if(budgetDay<0) console.log('Что то пошло не так');
        if (budgetDay>=1200) 
            console.log('У вас высокий уровень дохода');
        else if (budgetDay>=600) 
            console.log('У вас Средний уровень дохода');
        else if (budgetDay>=0) 
            console.log('У вас низкий уровень дохода');
    },
    getInfoDeposit: function() {
        if(appData.deposit) {
            appData.percetDeposit = prompt('Какой у вас процент', '10');
            while (!isNumber(appData.percetDeposit)) {
                appData.percetDeposit = prompt('Какой у вас процент', '10');
            }
            appData.moneyDeposit = prompt ('Сколько денег заложено', 10000);  
            while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Сколько денег заложено', 10000);
            }      }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth*appData.period;
    }
};
start();

console.log('Сумма всех обяхательных расходов за месяц:'+ appData.expensesMonth);
console.log('Цель будет достигнута за: ' + appData.newTarget+ ' месяцев');
appData.getStatusIncome(appData.budgetDay);
/*console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    console.log(key+appData[key]);
} */
let tempStr='';
for (let set in appData.addExpenses) {
    tempStr+=(appData.addExpenses[set].charAt(0).toUpperCase()+appData.addExpenses[set].slice(1)+(', '));
}
console.log(tempStr);

