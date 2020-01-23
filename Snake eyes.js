function start()
{
    var die1 = 0;
    var die2 = 0;
    var rollNum = 0;
    
    while(true)
    {
        die1 = Randomizer.nextInt(1,6);
        die2 = Randomizer.nextInt(1,6);
        
        println("Rolled: " + die1 + " " + die2);
        rollNum++;
        if(die1 == 1 && die2 == 1)
        {
            println("It took you " + rollNum + " rolls to get snake eyes");
            break;
        }
    }
	
}
