var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 120;
var STOPLIGHT_HEIGHT = 350;
var DIST_BETWEEN_LIGHTS = 100;
var GRAY_COLOR = "#737071";

var CENTER_RECT_X = getWidth()/2 - STOPLIGHT_WIDTH/2;
var CENTER_RECT_Y = getHeight()/2 - STOPLIGHT_HEIGHT/2;

function start()
{
	drawBase();
	
	//**************************LIGHTS***********************************
	var lightY = getHeight()/2;
	
	//red light
	drawCircle(Color.red, getWidth()/2, lightY - DIST_BETWEEN_LIGHTS);
	//yellow light
	drawCircle(Color.yellow, getWidth()/2, lightY);
	//green light
	drawCircle(Color.green, getWidth()/2, lightY + DIST_BETWEEN_LIGHTS);
}

//******************FUNCTIONS*********************
function drawBase()
{
    var rect = new Rectangle(STOPLIGHT_WIDTH, STOPLIGHT_HEIGHT);
    rect.setPosition(CENTER_RECT_X, CENTER_RECT_Y);
    rect.setColor(GRAY_COLOR);
    add(rect);
}

function drawCircle(color, x, y)
{
    var circle = new Circle(LIGHT_RADIUS);
    circle.setPosition(x, y);
    circle.setColor(color);
    add(circle);
}
