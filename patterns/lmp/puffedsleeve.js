var paper=Raphael("container",5000,5000);
var scale=15;
var points= new Map();
var makePattern=function(){
paper.clear()
    myMeasurements={}
var armholeLength=document.getElementById('armholeLengthSlider').value*scale;
var elbowLength=document.getElementById('elbowLengthSlider').value*scale;
var forearmLength=document.getElementById('forearmLengthSlider').value*scale;
var sleeveLength=document.getElementById('sleeveLengthSlider').value*scale;
addPoint("A",10.0 *scale,10.0 *scale)
rightPoint("B","A",armholeLength/2.0);
downPoint("C","A",armholeLength/12.0+elbowLength);
angleAngleIntersectionPoint("D","C",0.0,"B",-90.0)
extendPoint("L","A","C",forearmLength);
angleAngleIntersectionPoint("M","L",0.0,"B",-90.0)
midPoint("E","A","B")
midPoint("F","C","D")
alongPoint("G","A","C",distance("A","E"));
displacementPoint("H","B",1.0 *scale,armholeLength/12.0);
circleLineIntersectionPoint("S","D","F",forearmLength,90.0);
perpendicularPoint("Sa","D","S",-(-33.4 *scale));
intersectionPoint("Sb","C","L","S","Sa")
extendPoint("I","S","Sb",1.0 *scale);
alongPoint("Cprime","G","Sb",distance("I","G")/2.0);
rightPoint("K","Cprime",armholeLength/12.0);
teeIntersectionPoint("U","H",-180.0,"A","G")
teeIntersectionPoint("O","G",0.0,"H","D")
extendPoint("P","F","E",6.0 *scale);
circleCircleIntersectionPoint("Q","G",3.0 *scale,"K",distance("K","G"),false);
circleCircleIntersectionPoint("R","H",4.0 *scale,"D",distance("D","H"),true);
printPoints();
line("A","L");
line("B","M");
line("L","M");
line("A","B");
line("C","D");
line("P","F");
displacedQuad("D","S",distance("D","S")/2.0,-(-1.0 *scale));
displacedQuad("K","I",distance("K","I")/2.0,-(-1.0 *scale));
line("I","S");
displacedQuad("Q","P",distance("Q","P")/2.0,-(-3.0 *scale));
displacedQuad("P","R",distance("P","R")/2.0,-(-3.5 *scale));
line("D","R");
displacedQuad("Q","K",distance("Q","K")/2.0,-(-1.0 *scale));
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'armholeLength');
wireUpControl(document,'elbowLength');
wireUpControl(document,'forearmLength');
wireUpControl(document,'sleeveLength');
wireUpDistance(document);
