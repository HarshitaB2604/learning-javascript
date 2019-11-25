function start() 
{
	
	verticalCheck();
	
	turnLeft();

	if(frontIsClear())
	{
    	norClean();
	}
	else
	{
	    turnRight();
	    cleanRow();
	    
	}
}

//cleans if here is more than one clolum and row
function norClean()
{
    turnRight();
    while(frontIsClear())
	{
    	cleanCloUp();
        cleanCloDown();    
	} 
    
}


function cleanRow()// cleans the row if there only one row
{
    while(frontIsClear())
    {
        if(ballsPresent())
        {
            takeBall();
        }
        move();
    }
    if(ballsPresent())
    {
        takeBall();
    }
}

function verticalCheck()
{
    if(frontIsBlocked())
	{
	    turnLeft();
        while(frontIsClear())
        {
            if(ballsPresent())
            {
                takeBall();
            }
            move();
        }
        if(ballsPresent())
        {
            takeBall();
        }
	}
}
//cleans colum and goes up
function cleanCloUp()
{
    turnLeft();
    while(frontIsClear())
    {
        if(ballsPresent())
        {
            takeBall();
        }
        move();
    }
    turnRight();
    if(ballsPresent())
    {
        takeBall();
    }
    if(frontIsClear())
    {
        move();
    }
}

//clean the colum and goes down
function cleanCloDown()
{
    turnRight();
    //makes karel move one space and check if there is a ball he takes it
    while(frontIsClear())
    {
        if(ballsPresent())
        {
            takeBall();
        }
        move();
    }
    turnLeft();
    if(ballsPresent())
    {
        takeBall();
    }
    //moves karel to next colllum and checks if there is a ball on that spot
    if(frontIsClear())
    {
        move();
    }
}
