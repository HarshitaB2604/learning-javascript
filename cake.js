//*******cake constants*********
var cakeWidth = getWidth()*3/4 - 8;
var cakeHeight = 200;
var cakeX = getWidth()/8 - 3;
var cakeY = getWidth()*3/8;

//*******plate constants********
var plateWidth = getWidth()*3/4;
var plateHeight = 50;
var PLATE_Y = cakeY + cakeHeight + DEC_CIR_RADIUS;

//*****cake decor constants*******
var DEC_CIR_RADIUS = 12;

function start()
{
    
    
    //**********plate thing************

    var plate = new Rectangle(plateWidth, plateHeight);
    plate.setColor(Color.blue);
    plate.setPosition(cakeX, PLATE_Y);
    add(plate);
    
    //*************cake****************

    
    var cake = new Rectangle(cakeWidth, cakeHeight);
    cake.setPosition(cakeX, cakeY);
    cake.setColor(Color.orange);
    add(cake);
    //*********cake decorations***************
    var cakeDecorX = getWidth()/8;
    for(var x = 0; x < 13; x++)
    {
        var cakeDecor = new Circle(DEC_CIR_RADIUS);
        cakeDecor.setColor(Color.purple);
        cakeDecor.setPosition(cakeDecorX, cakeY);
        add(cakeDecor);
        
        //bottom line
        var cakeDecorB = new Circle(DEC_CIR_RADIUS);
        cakeDecorB.setColor(Color.purple);
        cakeDecorB.setPosition(cakeDecorX, cakeY + cakeHeight);
        add(cakeDecorB);
        
        cakeDecorX = cakeDecorX + DEC_CIR_RADIUS*2
    }
     

    //**********birthday congradulations*************
    var happy_bday = new Text("HAPPY BIRTHDAY!", "23pt Arial");
    happy_bday.setPosition(getWidth()/8 + 10, getHeight()/2 + 15);
    happy_bday.setColor(Color.red);
    add(happy_bday);
    
    
    //******************candles*************************
    /*var candleNum = readLine("How old are you?");
    */
}
