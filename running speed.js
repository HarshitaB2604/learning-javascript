/* Write a program that asks the user how far they ran (in miles)
 * and then how long it took them (in minutes), and print out
 * their speed in miles per hour. */
function start()
{
    var dist = readInt("How far did you run?");
    
    //asks user for the how long they took in minutes and converts it to hr
    var time = readInt("How many minutes did it take you")/60;
    
    println("Speed in mph: " + dist/time);
}
