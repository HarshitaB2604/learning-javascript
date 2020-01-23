function start()
{
    var radius = 200;
    var color = true;
    
    while(radius > 0)
    {
        var circle = new Circle(radius);
        //places the circle in the middle of the canvas
        circle.setPosition(getWidth()/2, getHeight()/2);
    
        //changes the color between black and red
        if(color)
        {
            circle.setColor(Color.red);
            color = !color;
        }
        else
        {
            circle.setColor(Color.black);
            color = !color;
        }
        
        add(circle);
        //changes the radius for the next circle
        radius = radius - 20;
    }
    
    
}
