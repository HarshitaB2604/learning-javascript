
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
        doubleBall = ballCount*2;
    }
}

//places double the balls than originally present
function doubleBalls()
{
    while(ballCount <= doubleBall)
    {
        putBall();
    }
}

//places Karel back at (0,0) facing east
function reset()
{
    turnLeft;
    move();
    turnLeft();
}
