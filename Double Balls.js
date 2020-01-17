
function start()
{
    window.ballCount = 0;
    window.doubleBall = 0;
    move();
    countBalls();
    doubleBalls();
    reset();
}

//count the balls at the spot
function countBalls()
{
    while(ballsPresent())
    {
        takeBall();
        ballCount++;
    }
    //calculates the double number of balls
    doubleBall = ballCount*2;
}

//places double the balls than originally present
function doubleBalls()
{
    var ballNum = ballCount
    for(var i = 0; i<doubleBall; i++)
    {
        putBall();
    }
}

//places Karel back at (0,0) facing east
function reset()
{
    turnAround();
    move();
    turnAround();
}
