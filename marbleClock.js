/* Marble Clock class */

function MarbleClock(trays){
	//Set instance variables
	this.trays = trays;
	this.timer = setInterval(this.addMarble,1500);
}

MarbleClock.prototype.addMarble = function(){
	//Attempt to add marble to first tray
	this.trays.first.push();
	
	//Create string for time output
	if(minuteCount < 10 && hourCount < 10)
	{
		timeString = "0" + hourCount + ":" + "0" + minuteCount;
	}
	else if(hourCount < 10)
	{
		timeString = "0" + hourCount + ":" + minuteCount;
	}
	else if(minuteCount < 10)
	{
		timeString = hourCount + ":" + "0" + minuteCount;
	}
	else
	{
		timeString = hourCount + ":" + minuteCount;
	}
	//Update time label on marble clock page
	$('#time').html(timeString);
	console.log("    Minute tray count: "+this.trays.first.marbleCount);
	console.log(" Minute x5 tray count: "+this.trays.second.marbleCount);
	console.log("Minute x15 tray count: "+this.trays.third.marbleCount);
 	console.log("   Hour x1 tray count: "+this.trays.fourth.marbleCount);
 	console.log("   Minute Count: "+minuteCount);
 	console.log("     Hour Count: "+hourCount);
};