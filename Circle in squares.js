var STARTING_SIZE = getWidth();
var MIN_SIZE = 5;

function start() 
{
	var side = STARTING_SIZE;
	var radius = side/2;
	while(radius > MIN_SIZE)
	{
	    var sqr = new Rectangle(side, side);
	    sqr.setColor(Randomizer.nextColor());
	    sqr.setPosition(getWidth()/2 - side/2, getHeight()/2 - side/2);
	    add(sqr);
	    //draw the circle
	    var cir = new Circle(radius);
	    cir.setColor(Randomizer.nextColor());
	    cir.setPosition(getWidth()/2, getHeight()/2);
	    add(cir);
	    
	    //change the side and radius mesures
	    side = 2*radius/Math.sqrt(2);
	    radius = side/2;
	}
}
