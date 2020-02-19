//**********************CONSTANTS*************************
var POLE_WIDTH = 5;
var LIGHT_RADIUS = 10;
var LIGHT_REQUIRED_HEIGHT = 200;

//***********************MAIN*****************************
function start(){
	drawBuilding(50, 200, 50);
	drawBuilding(100, 300, 125);
	drawBuilding(50, 150, 200);
	drawBuilding(100, 350, 275);

	// Add some more buildings!
}

//***********************FUNCTIONS************************
//draw the building
function drawBuilding(width, height, xPosition)
{
    //draw the building
    var building = new Rectangle(width, height);
    building.setColor(Color.black);
    building.setPosition(xPosition - width/2, getHeight() - height);
    add(building);
    
    //add the warning light if needed
    if(height > LIGHT_REQUIRED_HEIGHT)
    {
        warningLight(width, height, xPosition);
    }
}

//draw the warning light
function warningLight(bWidth, bHeight, buildingX)
{
    //pole part of the light
    var POLE_X_POSITION = buildingX;
    var POLE_Y_POSITION = getHeight() - bHeight - 1/6*bHeight;
    
    var lightPole = new Rectangle(POLE_WIDTH, 1/6*bHeight);
    lightPole.setColor(Color.black);
    lightPole.setPosition(POLE_X_POSITION, POLE_Y_POSITION);
    add(lightPole);
    
    //circular light part of it
    var LIGHT_X_POSITION = buildingX + LIGHT_RADIUS/4;
    var LIGHT_Y_POSITION = getHeight() - bHeight - 1/6*bHeight - LIGHT_RADIUS/2;
    
    var warningLight = new Circle(LIGHT_RADIUS);
    warningLight.setColor(Color.green);
    warningLight.setPosition(LIGHT_X_POSITION, LIGHT_Y_POSITION);
    add(warningLight);
}
