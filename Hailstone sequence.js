function start()
{
	var count = 0;
	//take in a number from a user and print it out
	var enter = readInt("Enter number: ");
	println(enter);
	
	while(enter > 1)
	{
	    //run until the number is 1
	    enter = hailstone(enter);
	    println(enter);
	    count++;
	    
	}
	//print the number of times it ran
	println("It took " + count + " steps to complete");
}

function hailstone(num)
{
    //run the hailstone sequence
    if(num % 2 == 0)
    {
        num = num/2;
    }
    else
    {
        num = num*3 + 1;
    }
    return num;
}
