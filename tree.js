//the program draws a tree

// tree constants
var tree_radius = getWidth()/7;
var tree_color = "#298021";
var trunkWidth = 60;
var trunkYPosition = getHeight()/2;
var trunkColor = "#8f4700";

//ground
var groundEndC = "#348f1f";
var groundColor = "#4dd141";
var gend = getWidth();
var gHeight = getHeight() - getHeight()/8;

function start()
{
    //ground
    var ground = new Rectangle(gend, gHeight);
    ground.setPosition(0, gHeight);
    ground.setColor(groundColor);
    add(ground);
    
    var groundEnd = new Line(0,gHeight,getWidth(), gHeight);
    groundEnd.setColor(groundEndC);
    groundEnd.setLineWidth(5);
    add(groundEnd);
    
    //tree
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
    
}
