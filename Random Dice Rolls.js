function start()
{
	for(var x = 0; x < 100; x++)
	{
	    var diceRoll = Randomizer.nextInt(1,6);
	    println("You rolled a : " + diceRoll);
	}
}
