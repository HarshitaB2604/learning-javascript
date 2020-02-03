function start()
{
	var feet = readInt("Enter the number of feet: ");
	var inches = readInt("Enter the number of inches: ");
	
	convertHeightToMeters(feet, inches);
}

function convertHeightToMeters(feet, inches)
{
    //first convert the inches to feet
    var inchesToFeet = inches/12;
    
    //now find the total feet
    var totalFeet = feet + inchesToFeet;
    
    //convert the feet to meters
    var feetToMeters = Math.round(totalFeet/3.2808 * 10000)/10000;
    
    
    println(feet + " feet, " + inches + " inches = " + feetToMeters + " meters");
}
