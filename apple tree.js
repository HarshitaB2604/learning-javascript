//the program draws a apple tree

//apple constant
var apple_radius = 15;
var apple_color = Color.red;
var stick_color = "#bd7228";//stick is a brown line
var apple_st_weight = 3;


var tree_radius = getWidth()/7;
var tree_color = "#298021";
var trunkWidth = 60;
var trunkYPosition = getHeight()/2;
var trunkColor = "#8f4700";

function start()
{
    var trunk = new Rectangle(trunkWidth, 200);
    trunk.setPosition(getWidth()/2 - trunkWidth/2 , trunkYPosition);
    trunk.setColor(trunkColor);
    add(trunk);
    
    //top part of tree(leaves)
    var treeC1 = new Circle(tree_radius);//rightmost
    treeC1.setPosition(getWidth()/2 - (trunkWidth + 30), 
    trunkYPosition - tree_radius/2);
    treeC1.setColor(tree_color);
    add(treeC1);
    
    var treeC2 = new Circle(tree_radius);//leftmost
    treeC2.setPosition(getWidth()/2 + (trunkWidth + 30), 
    trunkYPosition - tree_radius/2 - 10);
    treeC2.setColor(tree_color);
    add(treeC2);
    
    var treeC3 = new Circle(tree_radius);//top
    treeC3.setPosition(getWidth()/2, 
    trunkYPosition - tree_radius*2);
    treeC3.setColor(tree_color);
    add(treeC3);
    
    var treeC4 = new Circle(tree_radius);//bottom c
    treeC4.setPosition(getWidth()/2, 
    trunkYPosition - 20);
    treeC4.setColor(tree_color);
    add(treeC4);
    
    var treeC5 = new Circle(tree_radius);
    treeC5.setPosition(getWidth()/2 - trunkWidth, 
    trunkYPosition - tree_radius*3/2);
    treeC5.setColor(tree_color);
    add(treeC5);
    
    var treeC6 = new Circle(tree_radius);
    treeC6.setPosition(getWidth()/2 + trunkWidth, 
    trunkYPosition - tree_radius*3/2);
    treeC6.setColor(tree_color);
    add(treeC6);
    
    
    //apples
    var apple1 = new Circle(apple_radius);
    apple1.setPosition(getWidth()/2 - (trunkWidth + 30), 
    trunkYPosition - tree_radius/2);
    apple1.setColor(apple_color);
    add(apple1);
    var apple1Stick = new Line(getWidth()/2 - (trunkWidth + 30),
    trunkYPosition - (tree_radius/2 + apple_radius),
    getWidth()/2 - (trunkWidth + 30) ,
    (trunkYPosition - (tree_radius/2 + apple_radius*2)) + 10);
    apple1Stick.setColor(stick_color);
    apple1Stick.setLineWidth(apple_st_weight);
    add(apple1Stick);
    /*
    var apple2 = new Circle(apple_radius);
    apple2.setPosition(,);
    apple2.setColor(apple_color);
    add(apple2);
    var apple2Stick = new Line( , , , );
    apple2Stick.setColor(stick_color);
    apple2Stick.setLineWidth(apple_st_weight);
    add(apple2Stick);
    
    var apple3 = new Circle(apple_radius);
    apple3.setPosition(,);
    apple3.setColor(apple_color);
    add(apple3);
    var apple3Stick = new Line( , , , );
    apple3Stick.setColor(stick_color);
    apple3Stick.setLineWidth(apple_st_weight);
    add(apple3Stick);
    
    var apple4 = new Circle(apple_radius);
    apple4.setPosition(,);
    apple4.setColor(apple_color);
    add(apple4);
    var apple4Stick = new Line( , , , );
    apple4Stick.setColor(stick_color);
    apple4Stick.setLineWidth(apple_st_weight);
    add(apple4Stick);
    
    var apple5 = new Circle(apple_radius);
    apple5.setPosition(,);
    apple5.setColor(apple_color);
    add(apple5);
    var apple5Stick = new Line( , , , );
    apple5Stick.setColor(stick_color);
    apple5Stick.setLineWidth(apple_st_weight);
    add(apple5Stick);*/
    
}
