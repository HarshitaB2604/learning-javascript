function start() 
{
    //ask for the dimensions of each mat
    var matWidth = readInt("What is the width of the mat (in feet)? ");
    var matLength = readInt("What is the length of the mat (in feet)? ");
    var matArea = calculateArea(matWidth, matLength);
    
    println("The area of each mat is " + matArea + " square feet. \n");
    
    //ask for the dimensions of the room
    var roomWidth = readInt("What is the width of the room (in feet)? ");
    var roomLength = readInt("What is the length of the room (in feet)? ");
    var roomArea = calculateArea(roomWidth, roomLength);
    
    println("The area of the room is " + roomArea + " square feet. \n");
    
    //print how many mats
    var matNum = howManyMats(matArea, roomArea);
    println("You'll need " + matNum + " mats to cover the floor.");
}


// This function should calculate the area of a rectangle using
// the parameters of width and length.
function calculateArea(width, length)
{
    var area = width*length;
    
    return area;
}

function howManyMats(matArea, roomArea)
{
    var matNum = roomArea/matArea;
    
    return matNum;
}
