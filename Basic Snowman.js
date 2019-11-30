/* Constants representing the radius of the top, middle,
 * and bottom snowball. */
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;

function start()
{
	//bottom circle
	var botmCir = new Circle(BOTTOM_RADIUS);
	botmCir.setPosition(getWidth()/2, getHeight() - BOTTOM_RADIUS);
	botmCir.setColor(Color.gray);
	add(botmCir);
	
	//middle circle
	var midCir = new Circle(MID_RADIUS);
	midCir.setPosition(getWidth()/2, getHeight() - 
	(BOTTOM_RADIUS*2 + MID_RADIUS));
	midCir.setColor(Color.gray);
	add(midCir);
	
	//top circle
	var topCir = new Circle(TOP_RADIUS);
	topCir.setPosition(getWidth()/2, getHeight() - 
	(BOTTOM_RADIUS*2 + MID_RADIUS*2 + TOP_RADIUS));
	topCir.setColor(Color.gray);
	add(topCir);
}
