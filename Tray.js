//Create a stack-like class named Tray
function Tray(length, trayId)
{
	this.tray = new Array(length);
	this.marbleCount = 0;
	this.capacity = length;
	this.isFull = false;
	this.trayId = trayId;
}

//Extend the Tray class with a push() method
Tray.prototype.push = function(){
	if(this.marbleCount < this.capacity) {
		var marble = resevoir.dequeue();
		this.tray[this.marbleCount] = marble;
		this.marbleCount++;
		var id = this.trayId + "_" + Math.abs(this.marbleCount - (this.capacity + 1));
		id = id.toString();

		//console.log("Adding marble with id "+marble.id+"to slot: " +id);
		$('#movingMarble').html(marble.id);
		$('#movingMarble').animate({
            left:50
        }, 400,function(){
	        	$('#movingMarble').animate({
	            top:60
      	 }, 400,function(){
		        	$('#movingMarble').animate({
		            left:190,
		            opacity: 0
        		}, 400,function(){
			        $(this).css("left", "190");
			        $(this).css("top", "352");
			        $(this).css("opacity", "1");
			        $("#"+id).animate({
			            backgroundColor: "#FA830C"
			        }, 100, function(){
			       		$("#"+id).html(marble.id);
			        });
			 });
 		});
	});
		minuteCount++;
		if(this.trayId == 4){
			hourCount++;
		}
		return true;
	}
	else{
		this.isFull = true;
		switch(this.trayId){
			case 1:
			clock.trays.second.push();

			if(!clock.trays.second.isFull)
				{
					this.emptyTray();
				}
			break;

			case 2:
				clock.trays.third.push();
				if(!clock.trays.third.isFull)
				{
					clock.trays.first.emptyTray();
					this.emptyTray();
				}
			break;

			case 3:
				clock.trays.fourth.push();
				minuteCount = 0;
				if(!clock.trays.fourth.isFull)
				{
					clock.trays.first.emptyTray();
					clock.trays.second.emptyTray();
					this.emptyTray();
				}
			break;
			case 4:
				clearInterval(clock.timer);
				console.log("Cycle complete!");
				resevoir.iterations++;
				console.log("Checking order for "+ resevoir.iterations +" times!");
				resevoir.checkOrder();
				hourCount = 0;
				minuteCount = 0;
				clock.trays.first.emptyTray();
				clock.trays.second.emptyTray();
				clock.trays.third.emptyTray();
				clock.trays.fourth.emptyTray();

			break;
			default:
			break;
		}
		return false;
	}
};

//Extend the Tray class with an emptyTray() method
Tray.prototype.emptyTray = function()
{
	this.isFull = false;
	//console.log("Pause!");
	for(var i = 1; i <= this.marbleCount; i++)
	{
	var id = this.trayId + "_" + i;
	id = id.toString();
	//console.log("Removing marble from slot: "+id);
		$("#"+id).css("background-color", "white");
		$("#"+id).empty();
	}

	for(var k = 0; k < this.marbleCount; k++)
	{
		this.pop(k);
	}
	resevoir.update();
	this.marbleCount = 0;

};

//Method for popping
Tray.prototype.pop = function(index)
{
	var marble = this.tray[index];
	resevoir.tray.push(marble);
	resevoir.update();
	//JS splice() methid is an effective way of popping off a desired element from an array.
	this.tray.splice(this.marbleCount, 1);
};