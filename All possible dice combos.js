var SIDES_ON_DICE = 6;

function start() 
{
	for(var i = 1; i < SIDES_ON_DICE + 1; i++)
	{
	    for(var x = 1; x < SIDES_ON_DICE + 1; x++)
	    {
	        println(i + ", " + x);
	    }
	}
}
