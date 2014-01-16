//Create a queue-like class named Resevoir
function Resevoir(resevoirSize)
{
	this.tray = new Array(resevoirSize);
	//Number of iterations for reservoir marbles to be reordered.
	this.iterations = 0;
}


Resevoir.prototype.dequeue = function(){
	//Dequeue a marble!
	var marble = this.tray.shift();

	//console.log("Dequeueing marble with id of " + marble.id);

	//this.tray[this.frontIndex] = 0;
	this.update();
	return marble;
};
Resevoir.prototype.fill = function(){
	var html = "";
	for (var i = 0; i < Math.ceil(resevoirSize/10); i++) {
		html += "<tr>";
		for(var j = 0 ; j < 10; j++)
		{
			if(i*10+j < resevoirSize)
			{
				var marble = new Marble((i*10+j)+1);
				//console.log("Creating marble with id of"+marble.id);
				this.tray[(i*10+j)] = marble;
				html += "<td><div id='"+marble.id+"' class=\"resevoirBubble\">"+marble.id+"</div></td>";
			}
		}
		html+="</tr>";
	}
	$("#resevoirTable").html(html);
};
Resevoir.prototype.listMarbles = function(){
	for(var i = 0; i < this.tray.length; i++)
	{
		//console.log(this.tray[i].id);
	}
};

//Update the reservoir on the HTML page
Resevoir.prototype.update = function(){
	var html = "";
	for (var i = 0; i < Math.ceil(resevoirSize/10); i++) {
		html += "<tr>";
		for(var j = 0 ; j < 10; j++)
		{
			if(i*10+j < this.tray.length)
			{
				var index = i*10+j;
				//console.log("Attemping to access marble at index "+index);
				var marble = this.tray[index];
				html += "<td><div id='"+marble.id+"' class=\"resevoirBubble\">"+marble.id+"</div></td>";
			}
		}
		html+="</tr>";
	}
	$("#resevoirTable").html(html);
};

//Check the order of the reservoir
Resevoir.prototype.checkOrder = function()
{
	for(var i = 0; i < this.tray.length; i++)
	{
		var marble = this.tray[i];
		if (marble.id + 1 == i)
		{
			continue;
		}
		else
		{
			console.log("Not in order!");
			return;
		}
	}
	console.log("Items in order after "+this.iterations+"!");

}
