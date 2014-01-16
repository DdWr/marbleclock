<!--

	David Weber
	Jeffrey Delawder
	ITCS 4102/5102
	4/16/2013

	Marble Clock

	This program combines HTML and JavaScript to produce the behavior of a Marble Clock. 
	There are several objects that comprise the clock, particularly Marble, marbleClock, 
	Resevoir, and Tray. The clock works off of a timer.

-->

<html>
<head>
	<link rel="stylesheet" href="style.css" />
	<script type="text/javascript" src="jquery-1.9.1.js"></script>
	<script type="text/javascript" src="jquery-ui-1.10.2.custom.js"></script>
	<script type="text/javascript" src="MarbleClock.js"></script>
	<script type="text/javascript" src="Tray.js"></script>
	<script type="text/javascript" src="Resevoir.js"></script>
	<script type="text/javascript" src="Marble.js"></script>
	<script type="text/javascript">

		//Taking input from user for reservoir size
		var resevoirSize=prompt("Please enter a size for the marble resevoir between 21 and 9999",21);
		while(resevoirSize < 21 || resevoirSize > 9999)
		{
			resevoirSize = prompt("Please enter a size for the marble resevoir between 21 and 9999",21);
		}

		var resevoir = new Resevoir(resevoirSize);

		//Create array of trays for the MarbleClock object
		var trays = {"first"	: new Tray(4,1),
		             "second"	: new Tray(2,2), 
		             "third" 	: new Tray(3 ,3), 
		             "fourth" 	: new Tray(11, 4), 
		             "resevoir"	: resevoir};
        //Hour and minute counts
		var minuteCount = 0;
		var hourCount = 0;
		//And off we go....
		var clock = new MarbleClock(trays);
		$(document).ready(function(){
			resevoir.fill();
		});
	</script>
</head>
<body>
	<!--SVG used to draw lines -->
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  		<line x1="70" y1="75" x2="190" y2="75"
  		style="stroke:rgb(128,128,128);stroke-width:2"/>
		<line x1="70" y1="75" x2="70" y2="370"
  		style="stroke:rgb(128,128,128);stroke-width:2"/>
  		<line x1="70" y1="370" x2="190" y2="370"
  		style="stroke:rgb(128,128,128);stroke-width:2"/>
	</svg>
	<div id="movingMarble" class="circle"></div>
	<div id="marbleClock">
		<table id="marbleClockTable">
			<tr id="topTray">
				<td class="label">Minute x1: </td>
				<td><div id="1_1" class="circle"></div></td>
				<td><div id="1_2" class="circle"></div></td>
				<td><div id="1_3" class="circle"></div></td>
				<td><div id="1_4" class="circle"></div></td>
			</tr>		
			<tr id="secondTray">
				<td class="label">Minute x5: </td>
				<td><div id="2_1" class="circle"></div></td>
				<td><div id="2_2" class="circle"></div></td>
			</tr>		
			<tr id="thirdTray">
				<td class="label">Minute x15:</td>
				<td><div id="3_1" class="circle"></div></td>
				<td><div id="3_2" class="circle"></div></td> 
				<td><div id="3_3" class="circle"></div></td>
			</tr>
			<tr id="fourthTray">
				<td class="label">Hour x1: </td>
				<td><div id="4_1" class="circle"></div></td>
				<td><div id="4_2" class="circle"></div></td>
				<td><div id="4_3" class="circle"></div></td>
				<td><div id="4_4" class="circle"></div></td>
				<td><div id="4_5" class="circle"></div></td>
				<td><div id="4_6" class="circle"></div></td>
				<td><div id="4_7" class="circle"></div></td>
				<td><div id="4_8" class="circle"></div></td>
				<td><div id="4_9" class="circle"></div></td>
				<td><div id="4_10" class="circle"></div></td>
				<td><div id="4_11" class="circle"></div></td>
			</tr>
		</table></br>
		<div id="label">Time (hh:mm):</div><div id="time">00:00</div>
	</div>
	<div id="resevoir"><table id="resevoirTable"></table></div>
</body>
</html>
