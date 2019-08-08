pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var armholeLength=document.getElementById('armholeLengthSlider').value*scale;
var elbowLength=document.getElementById('elbowLengthSlider').value*scale;
var forearmLength=document.getElementById('forearmLengthSlider').value*scale;
pat.addPoint("A",10.0 *scale,10.0 *scale)
pat.rightPoint("B","A",armholeLength/2.0);
pat.downPoint("C","A",armholeLength/12.0+elbowLength);
pat.angleAngleIntersectionPoint("D","C",0.0,"B",-90.0)
pat.extendPoint("L","A","C",forearmLength);
pat.angleAngleIntersectionPoint("M","L",0.0,"B",-90.0)
pat.midPoint("E","A","B")
pat.midPoint("F","C","D")
pat.midPoint("F2","L","M")
pat.alongPoint("G","A","C",pat.distance("A","E"));
pat.displacementPoint("H","B",1.0 *scale,armholeLength/12.0);
//Pattern.prototype.circleLineIntersectionPoint = function(name, aName, bName, radiusA, degreesB)
//"Mark the point of intersection of a line extended from " + bName + " at an angle of " + degreesB + " with  a circle of radius " + radiusA / this.scale + " centered at point " + aName


//pat.circleLineIntersectionPoint("S","D","E",forearmLength,90);
pat.circleLSIntersectionPoint("S","D","F","F2", forearmLength);
pat.perpendicularPoint("Sa","D","S",-(-33.4 *scale));
pat.intersectionPoint("Sb","C","L","S","Sa")
pat.extendPoint("I","S","Sb",1.0 *scale);
pat.alongPoint("Cprime","G","Sb",pat.distance("I","G")/2.0);
pat.rightPoint("K","Cprime",armholeLength/12.0);
pat.teeIntersectionPoint("U","H",-180.0,"A","G")
pat.teeIntersectionPoint("O","G",0.0,"H","D")
pat.extendPoint("P","F","E",6.0 *scale);
pat.circleCircleIntersectionPoint("Q","G",3.0 *scale,"K",pat.distance("K","G"),false);
pat.circleCircleIntersectionPoint("R","H",4.0 *scale,"D",pat.distance("D","H"),true);
pat.printPoints();
pat.line("A","L");
pat.line("B","M");
pat.line("L","M");
pat.line("A","B");
pat.line("C","D");
pat.line("P","F");
pat.displacedQuad("D","S",pat.distance("D","S")/2.0,-(-1.0 *scale));
pat.displacedQuad("K","I",pat.distance("K","I")/2.0,-(-1.0 *scale));
pat.line("I","S");
pat.displacedQuad("Q","P",pat.distance("Q","P")/2.0,-(-3.0 *scale));
pat.displacedQuad("P","R",pat.distance("P","R")/2.0,-(-3.5 *scale));
pat.line("D","R");
pat.displacedQuad("Q","K",pat.distance("Q","K")/2.0,-(-1.0 *scale));
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'armholeLength');
wireUpControl(document,'elbowLength');
wireUpControl(document,'forearmLength');
wireUpDistance(document);
