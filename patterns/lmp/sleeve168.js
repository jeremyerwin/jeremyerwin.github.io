var paper=Raphael("container",5000,5000);
var scale=15;
var points= new Map();
var makePattern=function(){
paper.clear()
    myMeasurements={}
var armholeLength=document.getElementById('armholeLengthSlider').value*scale;
var elbowLength=document.getElementById('elbowLengthSlider').value*scale;
var forearmLength=document.getElementById('forearmLengthSlider').value*scale;
addPoint("A",27.3 *scale,11.3 *scale)
rightPoint("B","A",armholeLength/2.0);
downPoint("C","A",armholeLength/12.0+elbowLength);
angleAngleIntersectionPoint("D","C",0.0,"B",-90.0)
extendPoint("L","A","C",forearmLength);
angleAngleIntersectionPoint("M","L",0.0,"B",-90.0)
midPoint("E","A","B")
midPoint("F","C","D")
alongPoint("G","A","C",distance("A","E"));
displacementPoint("H","B",1.0 *scale,armholeLength/12.0);
circleLineIntersectionPoint("S","D","F",forearmLength,270);
perpendicularPoint("Sa","D","S",(33.4 *scale));
intersectionPoint("Sb","C","L","S","Sa")
extendPoint("I","S","Sb",1.0 *scale);
alongPoint("Cprime","G","Sb",distance("I","G")/2.0);
rightPoint("K","Cprime",armholeLength/12.0);
teeIntersectionPoint("U","H",-180.0,"A","G")
teeIntersectionPoint("O","G",0.0,"H","D")
rightPoint("X","G",armholeLength-distance("G","E")-distance("E","H"));
alongPoint("d","D","C",distance("X","O"));
alongPoint("h","d","X",distance("H","D")-1.0 *scale);
alongPoint("y","S","I",distance("X","O"));
alongPoint("s","d","y",distance("D","S")-1.0 *scale);
alongPoint("z","h","G",distance("h","G")/2.0+1.0 *scale);
perpendicularPoint("r","h","z",-(2.5 *scale));
printPoints();
line("A","L");
line("B","M");
line("L","M");
line("A","B");
line("C","D");
line("E","F");
displacedQuad("G","E",distance("G","E")/2.0,-(-1.5 *scale));
displacedQuad("E","H",distance("E","H")/2.0,-(-1.0 *scale));
line("H","D");
displacedQuad("D","S",distance("D","S")/2.0,-(-1.0 *scale));
displacedQuad("G","K",distance("G","K")/2.0,-(-1.0 *scale));
displacedQuad("K","I",distance("K","I")/2.0,-(-1.0 *scale));
line("I","S");
displacedQuad("d","s",distance("d","s")/2.0,-(-1.8 *scale));
line("s","I");
line("h","d");
fittedQuad("h","r","G");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'armholeLength');
wireUpControl(document,'elbowLength');
wireUpControl(document,'forearmLength');

wireUpDistance(document);
