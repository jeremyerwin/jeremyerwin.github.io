var paper=Raphael("container",5000,5000);
var scale=15;
var points= new Map();
var makePattern=function(){
paper.clear()
    myMeasurements={}
var armLength1=document.getElementById('armLength1Slider').value*scale;
var armLength2=document.getElementById('armLength2Slider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
addPoint("A",34.61 *scale,7.06 *scale)
rightPoint("B","A",bust/5.0+3.0 *scale);
downPoint("C","B",armLength2+3.0 *scale);
angleAngleIntersectionPoint("D","A",-90.0,"C",-180.0)
alongPoint("L","A","D",3.0 *scale);
teeIntersectionPoint("M","L",0.0,"B","C")
alongPoint("X","A","D",bust/8.0);
teeIntersectionPoint("Y","X",0.0,"B","C")
alongPoint("E","L","D",armLength1);
teeIntersectionPoint("R","E",0.0,"B","C")
alongPoint("O","A","B",distance("A","B")/3.0);
alongPoint("Z","Y","X",3.0 *scale);
alongPoint("P","E","R",bust/6.0);
alongPoint("V","C","B",5.0 *scale);
alongPoint("H","D","C",distance("D","C")/2.0+1.5 *scale);
printPoints();
//shapes.ImageShapenot supported at this point
displacedQuad("L","O",distance("L","O")/2.0,-(-1.0 *scale));
displacedQuad("O","Z",distance("O","Z")/2.0,-(-2.0 *scale));
displacedQuad("L","Z",distance("L","Z")/2.0,-(2.0 *scale));
displacedQuad("Z","P",distance("Z","P")/2.0,-(0.8 *scale));
displacedQuad("P","V",distance("P","V")/2.0,-(0.8 *scale));
line("H","V");
displacedQuad("E","H",distance("E","H")/2.0,-(1.0 *scale));
line("L","E");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'armLength1');
wireUpControl(document,'armLength2');
wireUpControl(document,'bust');
wireUpDistance(document);
