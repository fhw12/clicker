let balance = document.getElementById("balance");
let shop = document.getElementById("shop");
let button_click = document.getElementById("button_click");
let button_click_rotate = 0;

let data = {
	balance: 10000, // 10 монет для теста
	click: 5,
	auto: 1,

	update: {
		click: [
			{
				name: "Корзина",
				price: 50,
				upgrade: 1,
			},

			{
				name: "Мешок",
				price: 200,
				upgrade: 3,
			},

			{
				name: "Коробка",
				price: 500,
				upgrade: 5,
			},
		],

		auto: [
			{
				name: "Проросток",
				price: 100,
				upgrade: 1,
			},

			{
				name: "Росток",
				price: 150,
				upgrade: 3,
			},

			{
				name: "Саженец",
				price: 250,
				upgrade: 5,
			},

			{
				name: "Маленькое дерево",
				price: 1000,
				upgrade: 10,
			},

			{
				name: "Дерево",
				price: 2500,
				upgrade: 15,
			},

			{
				name: "Большое дерево",
				price: 5000,
				upgrade: 30,
			},	
		],
	}
}

function shop_update(){
	output = `<div style="background: rgba(100, 100, 100, 0.9);" class="infobar">Сбор</div>`;
	for(i = 0; i < data.update.click.length; i++){
		style = ""
		if(data.balance < data.update.click[i].price){
			style = "background: rgb(255, 150, 150);"
		}
		output += `
		<div class="infobar">
			<div class="item">
				<text>`+ data.update.click[i].name +` +`+ (data.update.click[i].upgrade/1000).toFixed(3) +` за
				<text>`+ (data.update.click[i].price/1000).toFixed(3) + `</text> желудей</text>
				<a class="buy_buttons" onclick="shop_buy(0, ` + i + `)" style="`+style+`">Купить</a>
			</div>
		</div>`;
	}

	output += `<div style="background: rgba(100, 100, 100, 0.9);" class="infobar">Автосбор</div>`;
	for(i = 0; i < data.update.auto.length; i++){
		style = ""
		if(data.balance < data.update.auto[i].price){
			style = "background: rgb(255, 150, 150);"
		}
		output += `
		<div class="infobar">
			<div class="item">
				<text>`+ data.update.auto[i].name +` +`+ (data.update.auto[i].upgrade/1000).toFixed(3) +` за
				<text>`+ (data.update.auto[i].price/1000).toFixed(3) + `</text> желудей</text>
				<a class="buy_buttons" onclick="shop_buy(1, ` + i + `)" style="`+style+`">Купить</a>
			</div>
		</div>`;
	}

	shop.innerHTML = output;
}

function shop_buy(mode, i){
	if(mode == 0){
		if(data.balance >= data.update.click[i].price){
			data.click += data.update.click[i].upgrade;
			data.balance -= data.update.click[i].price
			data.update.click[i].price *= 3;
		}
	} else if(mode == 1){
		if(data.balance >= data.update.auto[i].price){
			data.auto += data.update.auto[i].upgrade;
			data.balance -= data.update.auto[i].price
			data.update.auto[i].price *= 3;
		}
	}

	balance_update();
	shop_update();
}

function close(){
	document.getElementById("APP_MAIN").style = "display: none;";
	document.getElementById("APP_SHOP").style = "display: none;";
	document.getElementById("APP_LOTTERY").style = "display: none;";
}

function shop_menu(){
	close();
	document.getElementById("APP_SHOP").style = "display: block;"
}

function main_menu(){
	close();
	document.getElementById("APP_MAIN").style = "display: block;"
}

function lottery(value){
	if(data.balance >= value){ data.balance -= value; } else { return 0; }
	if(Math.random() <= 0.4){
		document.getElementById("lottery_info").innerHTML = "Вы выиграли!<br>";
		document.getElementById("lottery_info").style = "background: rgb(100, 200, 100); padding: 10px; border-radius: 10px";
		data.balance += value * 3;
	} else {
		document.getElementById("lottery_info").innerHTML = "Вы проиграли!<br>";
		document.getElementById("lottery_info").style = "background: rgb(200, 100, 100); padding: 10px; border-radius: 10px";
	}
}

function lottery_menu(){
	close();
	document.getElementById("APP_LOTTERY").style = "display: block;"
	document.getElementById("lottery_info").innerHTML = "<br>";
}

function balance_update(){
	balance.innerHTML = (data.balance/1000).toFixed(3);

	document.getElementById('click_earnings').innerHTML = (data.click/1000).toFixed(3);
	document.getElementById('auto_earnings').innerHTML = (data.auto/1000).toFixed(3);
}

function update(){
	data.balance += data.auto;
	balance_update();
	shop_update();
}

function click_event(){
	button_click.style = 'transform: rotate('+button_click_rotate+'deg)';
	button_click_rotate += 30;
	if(button_click_rotate >= 360){ button_click_rotate = 0; }
	data.balance += data.click;
	balance_update();
}

shop_update();
balance_update();

setInterval(update, 1000);