function start() 
{
    var start = readInt("Enter starting point: ");
    var lenght = readInt("Enter the lenght of the line: ");
    
    verticalLine(start, lenght);
}

function verticalLine(start, lenght)
{
    var line = new Line(start, 0, start, lenght);
    line.setColor(Color.black);
    add(line);
}
