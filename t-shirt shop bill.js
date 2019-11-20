//Declare a constant here to represent the cost of a tshirt
var COST_OF_SHIRT = 20;

function start()
{
	var shirtNum = readInt("How many t-shirts would you like to buy?");
	
	println("Total Cost: " + shirtNum*COST_OF_SHIRT);
	
}
