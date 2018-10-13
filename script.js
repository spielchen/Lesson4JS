let money, 
		time;

function start (){
	 money = +prompt("Ваш бюджет на месяц?");
	 time = prompt("Введите дату в формате YYYY-MM-DD");

	 while(isNaN(money) || money == "" || money == null){
	 		money = +prompt("Ваш бюджет на месяц?");
	 }
}
start();

let appData = {
		money,
		time, 
		expenses: {},
		income:[],
		optionalExpenses:{},
		savings: true,
		chooseExpenses: function(){
			for (let i = 0; i < 2; i++) { 
				let a = prompt("Введите обязательную статью расходов в этом месяце"), 
						b = prompt("Во сколько обойдется?"); 
				if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
				&& a != '' && b != '' && a.length <50) { 
						console.log('done') 
						appData.expenses[a] = b; 
				}	else {
					alert("Введите статью расходов!");
					console.log('Была ошибка');
					i--;
				};
		};
	},
	detectDayBudget: function(){
		appData.moneyPerDay = (appData.money / 30).toFixed();
		alert('Бюджет за 1 день: '+ (appData.money / 30).toFixed());
	},
	detectLevel: function(){
		if (appData.moneyPerDay < 100){
					console.log('Минимальный уровень достатка')
				} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
					console.log('Средний уровень достатка');
				} else if ( appData.moneyPerDay > 2000) {
					console.log('Высокий уровень достатка');
				} else {
					console.log('произошла ошибка')
				}
	},
	checkSavings: function(){
		if(appData.savings == true ) {
			let save = +prompt('Какая сумма накопления?'),
					percent = +prompt('Под какой процент?');
			appData.monthIncome = save/100/12*percent;
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
		}
	},
	chooseOptExpenses: function(){
		for(let a = 0; a < 3; a++) {
 		let optExpenses = prompt('Статья необязательных расходов?');
			appData.optionalExpenses[a + 1] = optExpenses;
	}
	console.log(appData.optionalExpenses);
	},
	chooseIncome: function chooseIncome(){
		let items = prompt("Что принесет дополнительный доход?(Перечислить через запятую)",'');
				while (!isNaN(items) || items == null || items == ""){
								console.log('Все верно!');
								items = prompt("Что принесет дополнительный доход?(Перечислить через запятую)",'');
							};
		let arr = items.split(",");
		for (let i = 0; i < arr.length; i++){
			if (Number(arr[i])){
				alert(arr[i] + '- это число');
			} else {
				appData.income.push(arr[i])
			}
		}
		appData.income.push(prompt("Может что-то еще?",''));
		appData.income.sort();
		console.log('Способы доп. заработка: ');
		appData.income.forEach(function(item, i, arr) {
			++i;
			console.log(i + ": " + item);
		});
	}
};
console.log('Наша программа включает в себя данные: ');
for ( let key in appData){
 	console.log(key + appData);
 }

console.log(appData.expenses);

