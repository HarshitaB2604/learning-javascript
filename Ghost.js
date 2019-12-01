// Constants for main ghost body
var HEAD_RADIUS = 70;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 120;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2);
var BODY_COLOR = Color.red;

// Constants for eyes
var PUPIL_RADIUS = 8;
var PUPIL_LEFT_OFFSET = 16;
var PUPIL_RIGHT_OFFSET = 40;
var EYE_RADIUS = 20;
var EYE_OFFSET = 28;
var EYE_COLOR = Color.white;
var PUPIL_COLOR = Color.blue;

/* This program draws a ghost on the canvas. */
function start()
{
    //draws the head of the ghost
    var head = new Circle(HEAD_RADIUS);
    head.setPosition(getWidth()/2, getHeight()/2 - HEAD_RADIUS);
    head.setColor(BODY_COLOR);
    add(head);
    
    //draws body of the ghost
    var body = new Rectangle(BODY_WIDTH, BODY_HEIGHT);
    body.setPosition(getWidth()/2 - 
    HEAD_RADIUS, getHeight()/2 - HEAD_RADIUS);
    body.setColor(BODY_COLOR);
    add(body);

    //draws the legs of the body
    var legPX = (getWidth()/2 - HEAD_RADIUS) + FOOT_RADIUS;
    for(var x = 0; x < 3; x++)
    {
        var leg = new Circle(FOOT_RADIUS);
        leg.setPosition(legPX, getHeight() - (BODY_HEIGHT + HEAD_RADIUS));
        leg.setColor(BODY_COLOR);
        add(leg);
        
        legPX = legPX + FOOT_RADIUS*2;
    }
    
    //left eye
    var leftEye = new Circle(EYE_RADIUS);
    leftEye.setPosition(getWidth()/2 - EYE_OFFSET, 
    getHeight()/2 - HEAD_RADIUS);
    leftEye.setColor(EYE_COLOR);
    add(leftEye);
    
    var leftPupil = new Circle(PUPIL_RADIUS);
    leftPupil.setPosition(getWidth()/2 - PUPIL_LEFT_OFFSET, 
    getHeight()/2 - HEAD_RADIUS);
    leftPupil.setColor(PUPIL_COLOR);
    add(leftPupil);
    
    
    //draws right eye
    var rightEye = new Circle(EYE_RADIUS);
    rightEye.setPosition(getWidth()/2 + EYE_OFFSET, 
    getHeight()/2 - HEAD_RADIUS);
    rightEye.setColor(EYE_COLOR);
    add(rightEye);
    
    var rightPupil = new Circle(PUPIL_RADIUS);
    rightPupil.setPosition(getWidth()/2 + PUPIL_RIGHT_OFFSET, 
    getHeight()/2 - HEAD_RADIUS);
    rightPupil.setColor(PUPIL_COLOR);
    add(rightPupil);
    
    
}
