/* This program will play a simple guessing game.
 * The user will guess, and the computer should print if
 * the guess was too high, too low, or correct.
 * If the user enters '-1', the game should exit.
 */
var MAX = 100;
var MIN = 0;
var SENTINEL = -1;

function start() 
{
    //gives the user instructions
    println("This program lays a guessing game.");
    println("The computer is thinking of a value between " + 
    MIN + "and 100.");
    println("Type '-1' to exist the program");
    
    //the game code
    var num = Randomizer.nextInt(MIN, MAX);
    while(true)
    {
        var guess = readLine("What is your guess? ");
        
        //checks if user wants to end the game
        if(guess == num || guess == -1)
        {
            //only if guess is correct then print correct
            if(guess == num)
            {
                println("Correct!");
            }
            break;
            
        }
        //is the guess too low?
        else if(guess < num)
        {
            println("You guess was too low.");
        }
        //if the guess to high?
        else
        {
            println("You guess was too high.");
        }
    }
    println("Game has concluded.");
}
