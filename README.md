<!DOCTYPE html>

<html>
<head>
	<meta charset="utf-8">
	<title> Clicker </title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>

<div class="APP">
	<div class="infobar" style="width: 200px; margin: 0 auto;" id="title" data-title="Желуди">
			<text id="balance">0</text>
		</div>
	<div id="APP_MAIN">
		<div class="infobar">
			<div class=item>
				<div class="item" id="title" data-title="Скорость сбора желудей за клик">
					<text>желудей<br><text id="click_earnings"></text> за клик</text>
				</div>

				<div class="item" id="title" data-title="Скорость сбора желудей в секунду">
					<text>желудей<br><text id="auto_earnings"></text> в секунду</text>
				</div>
			</div>
		</div>

	
		<div class="panel">
			<div class="item">
				<a class="panel_buttons" onclick="shop_menu()">Магазин</a>
				<a class="panel_buttons" onclick="lottery_menu()">Лотерея</a>
			</div>
		</div>

		<div style="height: 100px;"></div>
	
		<a style="text-align: center; display: block;" >
			<img class="button_click" onclick="click_event()" src="icon.png" width="200" id="button_click">
		</a>
	</div>

	<div style="display: none;" id="APP_SHOP">

		<div style="overflow: auto; height: 450px;" id="shop">
		
		</div>

		<a class="buttons" onclick="main_menu()"><--</a>
	</div>

	<div style="display: none;" id="APP_LOTTERY">
		<div style="overflow: auto; height: 450px;">
			<center><br>Выигрыш в лотерею составит x3<br>Шанс на выигрыш 40%<br><br></center>
			<center><text id="lottery_info"><br></text><br></center>
			<a class="buttons" onclick="lottery(500)">Стоимость 0.5 желудей</a>
			<a class="buttons" onclick="lottery(1000)">Стоимость 1 желудь</a>
			<a class="buttons" onclick="lottery(5000)">Стоимость 5 желудей</a>
			<a class="buttons" onclick="lottery(10000)">Стоимость 10 желудей</a>
			<a class="buttons" onclick="lottery(15000)">Стоимость 15 желудей</a>
		</div>

		<a class="buttons" onclick="main_menu()"><--</a>
	</div>
</div>


<script type="text/javascript" src="main.js"></script>
</body>
</html>
