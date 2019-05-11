pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var backLength=document.getElementById('backLengthSlider').value*scale;
var backWidth=document.getElementById('backWidthSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var frontWidth=document.getElementById('frontWidthSlider').value*scale;
var shoulderLength=document.getElementById('shoulderLengthSlider').value*scale;
pat.addPoint("A",83.0 *scale,12.5 *scale)
pat.rightPoint("B","A",bust/4.0+2.5 *scale);
pat.downPoint("C","A",frontLength);
pat.angleAngleIntersectionPoint("D","B",-90.0,"C",0.0)
pat.downPoint("L","C",3.0 *scale);
pat.downPoint("M","D",3.0 *scale);
pat.alongPoint("E","B","D",backWidth/3.0+1.0 *scale);
pat.alongPoint("F","B","A",pat.distance("B","E"));
pat.alongPoint("G","F","A",shoulderLength-0.3 *scale);
pat.downPoint("H","G",pat.distance("F","B")/2.0);
pat.downPoint("I","B",backWidth*4.0/5.0);
pat.angleAngleIntersectionPoint("J","A",-90.0,"I",-180.0)
pat.leftPoint("K","I",frontWidth);
pat.alongPoint("N","A","C",bust/4.0+2.5 *scale);
pat.rightPoint("La","L",0.5 *scale);
pat.displacementPoint("rA","A",-22.7 *scale,0.2 *scale);
pat.rightPoint("rB","rA",15.8 *scale);
pat.downPoint("rC","rA",backLength);
pat.angleAngleIntersectionPoint("rD","rB",-90.0,"rC",0.0)
pat.extendPoint("rL","rA","rC",3.0 *scale);
pat.extendPoint("rM","rB","rD",3.0 *scale);
pat.alongPoint("rX","rA","rB",backWidth);
pat.downPoint("rE","rA",0.5 *scale);
pat.rightPoint("rF","rA",backWidth/3.0);
pat.teeIntersectionPoint("rY","rX",-90.0,"rL","rM")
pat.alongPoint("rI","rB","rM",backWidth*4.0/5.0);
pat.alongPoint("rJ","rA","rL",backWidth*4.0/5.0);
pat.displacementPoint("rG","rX",0.0 *scale,pat.distance("rA","rF")+1.0 *scale);
pat.alongPoint("rK","rJ","rI",frontWidth-0.5 *scale);
pat.alongPoint("rN","rB","rM",bust/4.0+2.5 *scale);
pat.leftPoint("rMa","rM",0.5 *scale);
pat.printPoints();
//shapes.ImageShapenot supported at this point
pat.displacedQuad("F","E",pat.distance("F","E")/2.0,-(1.5 *scale));
pat.displacedQuad("H","K",pat.distance("H","K")/2.0,-(-0.4 *scale));
pat.displacedQuad("K","N",pat.distance("K","N")/2.0,-(-1.7 *scale));
pat.line("La","N");
pat.line("La","M");
pat.line("E","M");
pat.line("rF","rG");
pat.displacedQuad("rF","rE",pat.distance("rF","rE")/2.0,-(-0.3 *scale));
pat.displacedQuad("rG","rK",pat.distance("rG","rK")/2.0,-(0.2 *scale));
pat.displacedQuad("rK","rN",pat.distance("rK","rN")/2.0,-(1.2 *scale));
pat.line("rE","rL");
pat.line("rL","rMa");
pat.line("rN","rMa");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'backLength');
wireUpControl(document,'backWidth');
wireUpControl(document,'bust');
wireUpControl(document,'frontLength');
wireUpControl(document,'frontWidth');
wireUpControl(document,'shoulderLength');
wireUpDistance(document);
