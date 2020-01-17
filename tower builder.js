function start() 
{
    
    while(frontIsClear())
    {
        buildTower();
        down();
        if(frontIsClear())
        {
            move();
        }
    }
    turnAround();
    if(frontIsClear())
    {
        move();
    }
    if(ballsPresent())
    {
        turnAround();
        move();
    }
    else
    {
        turnAround();
        if(frontIsClear())
        {
            move();
        }
        buildTower();
        
        //moves karel back down
        turnAround();
        for(var i = 0; i < 3; i++)
        {
            move();
        }
        turnLeft();
    }
}

//makes a tower with a stack of 3 balls
function buildTower()
{
    turnLeft();
    for(var i = 0; i < 3; i++)
    {
        putBall();
        move();
    }
}

//returns Karel to the first row
function down()
{
    turnRight();
    move();
    turnRight();
    for(var i = 0; i < 3; i++)
    {
        move();
    }
    turnLeft();
}
