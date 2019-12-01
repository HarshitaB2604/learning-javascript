var PAN_RADIUS = getWidth()/3;
var HANDLE_WIDTH = getWidth()/2;
var HANDLE_HEIGHT = HANDLE_WIDTH/4;
var PAN_COLOR = Color.GRAY;

var PAN_BOTTOM_RADIUS = PAN_RADIUS-20;
var PAN_BOTTOM_COLOR = Color.BLACK;

var EGG_RADIUS = PAN_BOTTOM_RADIUS/4;
var EGG_WHITE_COLOR = Color.WHITE;
var EGG_YOL_COLOR = Color.YELLOW; 

var HIGHLIGHT_RADIUS = EGG_RADIUS/4;
var HIGHLIGHT_COLOR = Color.WHITE;


function start() 
{
    //pan
    var pan = new Circle(PAN_RADIUS);
    pan.setPosition(getWidth()/2, getHeight()/2);
    pan.setColor(PAN_COLOR);
    add(pan);
    
    //handle
    var handle = new Rectangle(HANDLE_WIDTH, HANDLE_HEIGHT);
    handle.setPosition(getWidth()/2 + PAN_RADIUS - 3, 
    getHeight()/2 - HANDLE_HEIGHT/2);
    handle.setColor(PAN_COLOR);
    add(handle);
    
    //pan bottom
    var panBotm = new Circle(PAN_BOTTOM_RADIUS);
    panBotm.setPosition(getWidth()/2, getHeight()/2);
    panBotm.setColor(PAN_BOTTOM_COLOR);
    add(panBotm);
    
    //egg white
    var eggW1 = new Circle(EGG_RADIUS);
    eggW1.setPosition(getWidth()/2 - EGG_RADIUS*2, getHeight()/2);
    eggW1.setColor(EGG_WHITE_COLOR);
    add(eggW1);
    var eggW2 = new Circle(EGG_RADIUS);
    eggW2.setPosition(getWidth()/2 - 20, getHeight()/2 - EGG_RADIUS);
    eggW2.setColor(EGG_WHITE_COLOR);
    add(eggW2);
    var eggW3 = new Circle(EGG_RADIUS);
    eggW3.setPosition(getWidth()/2 - 20, getHeight()/2 + EGG_RADIUS);
    eggW3.setColor(EGG_WHITE_COLOR);
    add(eggW3);
    var eggW4 = new Circle(EGG_RADIUS);
    eggW4.setPosition(getWidth()/2 + EGG_RADIUS, 
    getHeight()/2 - EGG_RADIUS);
    eggW4.setColor(EGG_WHITE_COLOR);
    add(eggW4);
    var eggW5 = new Circle(EGG_RADIUS);
    eggW5.setPosition(getWidth()/2 + EGG_RADIUS, 
    getHeight()/2 + EGG_RADIUS - 10);
    eggW5.setColor(EGG_WHITE_COLOR);
    add(eggW5);
    
    //egg yolk
    var eggYolk = new Circle(EGG_RADIUS);
    eggYolk.setPosition(getWidth()/2, getHeight()/2);
    eggYolk.setColor(EGG_YOL_COLOR);
    add(eggYolk);
    
    var eggHighlight = new Circle(HIGHLIGHT_RADIUS);
    eggHighlight.setPosition(getWidth()/2 + 10, getHeight()/2 - 10);
    eggHighlight.setColor(HIGHLIGHT_COLOR);
    add(eggHighlight);

}
