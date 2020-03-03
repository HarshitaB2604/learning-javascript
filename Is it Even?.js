var SENTINEL = 0;

// Prints whether the entered number is even or odd
function start()
{
	var x = 1;
	while( x != SENTINEL)
	{
	    x = readInt("Enter a number: ");
	    var isEvenNumber = isEven(x);
	    if(isEvenNumber == true)
	    {
	        println("Even");
	    }
	    else
	    {
	        println("Odd");
	    }
	}
	
	
}

function isEven(num)
{
    if(num % 2 == 1)
    {
        return true;
    }
    
    return false;
}
