var SIDE_LENGTH = 100;

function start()
{
	var sqr = new Rectangle(SIDE_LENGTH, SIDE_LENGTH);
	
	//sets square in the middle
	sqr.setPosition(getWidth()/2 - SIDE_LENGTH/2, 
	getHeight()/2 - SIDE_LENGTH/2);
	//randomizes color
	sqr.setColor(Randomizer.nextColor());
	
  add(sqr);
}
