//the program draws a  apple tree

//apple constant
var apple_radius = 20;
var apple_color = Color.red;

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
    var treeC1 = new Circle(tree_radius);
    treeC1.setPosition(getWidth()/2 - (trunkWidth + 30), 
    trunkYPosition - tree_radius/2);
    treeC1.setColor(tree_color);
    add(treeC1);
    
    var treeC2 = new Circle(tree_radius);
    treeC2.setPosition(getWidth()/2 + (trunkWidth + 30), 
    trunkYPosition - tree_radius/2 - 10);
    treeC2.setColor(tree_color);
    add(treeC2);
    
    var treeC3 = new Circle(tree_radius);
    treeC3.setPosition(getWidth()/2, 
    trunkYPosition - tree_radius*2);
    treeC3.setColor(tree_color);
    add(treeC3);
    
    var treeC4 = new Circle(tree_radius);
    treeC4.setPosition(getWidth()/2, 
    trunkYPosition - 20);
    treeC4.setColor(tree_color);
    add(treeC4);
    
    var treeC5 = new Circle(tree_radius);
    treeC5.setPosition(getWidth()/2 - trunkWidth, 
    trunkYPosition - tree_radius);
    treeC5.setColor(tree_color);
    add(treeC5);
    
    var treeC6 = new Circle(tree_radius);
    treeC6.setPosition(getWidth()/2 + trunkWidth, 
    trunkYPosition - tree_radius);
    treeC6.setColor(tree_color);
    add(treeC6);
    
    //apples
    var apple1 = new Circle(apple_radius);
    add(apple1);
    var apple1Stick = new Line();
    add(apple1Stick);
    
}
