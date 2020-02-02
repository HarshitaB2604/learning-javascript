//*******cake constants*********
var cakeWidth = getWidth()*3/4 - 8;
var cakeHeight = 200;
var cakeX = getWidth()/8 - 3;
var cakeY = getWidth()*3/8;

//*****cake decor constants*******
var DEC_CIR_RADIUS = 12;

//*******plate constants********
var plateWidth = getWidth()*3/4 + 45;
var plateHeight = 50;
var PLATE_Y = cakeY + cakeHeight;

//********candle constants************
var CANDLE_WIDTH = 7;
var CANDLE_HEIGHT = 50;
var CANDLE_Y = cakeY - CANDLE_HEIGHT;


//***************FUNCTIONS****************
function drawPlate()
{
    //**********plate thing************
    var plate = new Rectangle(plateWidth, plateHeight);
    plate.setColor(Color.blue);
    plate.setPosition(cakeX - 25, PLATE_Y);
    add(plate);
}

function addCandles(num)
{
    //******************candles*************************
    var candleCount = 0;
    
    var candleR = getWidth()/2 - DEC_CIR_RADIUS;
    var candleL = getWidth()/2;
    while(candleCount < num)
    {
        var candle = new Rectangle(CANDLE_WIDTH, CANDLE_HEIGHT);
        candle.setColor(Color.red);
        if(candleCount % 2 == 1)
        {
            candle.setPosition(candleL, CANDLE_Y);
            candleL = candleL + CANDLE_WIDTH*2;
        }
        else
        {
            candle.setPosition(candleR, CANDLE_Y);
            candleR = candleR - CANDLE_WIDTH*2;
        }
        add(candle);
        
        candleCount++
    }
}

function drawCake()
{
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
}

function addText(text)
{
    //**********birthday congradulations*************
    var happy_bday = new Text(text, "23pt Arial");
    happy_bday.setPosition(getWidth()/8 + 10, getHeight()/2 + 15);
    happy_bday.setColor(Color.red);
    add(happy_bday);
}

//**************************MAIN**********************************
function start()
{
    //ask their age
    var candleNum = readLine("How old are you?");
    
    drawPlate();
    addCandles(candleNum);
    drawCake();
    addText("HAPPY BIRTHDAY!");
    
}
