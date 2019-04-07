pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var backLength=document.getElementById('backLengthSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var halfBackWidth=document.getElementById('halfBackWidthSlider').value*scale;
var halfBust=document.getElementById('halfBustSlider').value*scale;
var halfFrontWidth=document.getElementById('halfFrontWidthSlider').value*scale;
var halfwaist=document.getElementById('halfwaistSlider').value*scale;
var shoulderLength=document.getElementById('shoulderLengthSlider').value*scale;
var underarmLength=document.getElementById('underarmLengthSlider').value*scale;
pat.addPoint("A1",30.6 *scale,17.8 *scale)
pat.rightPoint("B1","A1",halfBackWidth+0.25 *scale);
pat.downPoint("C1","A1",backLength+1.0 *scale);
pat.angleAngleIntersectionPoint("D1","C1",0.0,"B1",-90.0)
pat.alongPoint("E1","A1","B1",halfBackWidth/3.0);
pat.downPoint("F1","A1",1.0 *scale);
pat.alongPoint("G1","B1","D1",pat.distance("A1","E1")+1.0 *scale);
pat.alongPoint("G1a","E1","G1",shoulderLength+1.0 *scale);
pat.downPoint("X1","G1",halfBackWidth/3.0+2.0 *scale);
pat.alongPoint("I1","C1","D1",1.0 *scale);
pat.teeIntersectionPoint("Y1","X1",-180.0,"F1","I1")
pat.alongPoint("J1","I1","D1",halfBackWidth/3.0+1.0 *scale);
pat.displacementPoint("A2","B1",16.6 *scale,-1.0 *scale);
pat.rightPoint("B2","A2",halfBust/2.0+1.0 *scale);
pat.downPoint("C2","A2",frontLength);
pat.angleAngleIntersectionPoint("D2","B2",-90.0,"C2",0.0)
pat.alongPoint("E2","B2","D2",halfBackWidth/3.0+1.0 *scale);
pat.alongPoint("F2","B2","A2",halfBackWidth/3.0+1.0 *scale);
pat.rightPoint("D2a","D2",1.0 *scale);
pat.alongPoint("G2","F2","A2",shoulderLength-0.5 *scale);
pat.downPoint("H2","G2",pat.distance("B1","G1")/2.0);
pat.alongPoint("I2","B2","D2a",halfBackWidth/5.0*4.0);
pat.teeIntersectionPoint("J2","I2",-180.0,"A2","C2")
pat.leftPoint("K2","I2",halfFrontWidth);
pat.alongPoint("N2","A2","J2",halfBust/2.0-2.0 *scale);
pat.alongPoint("O2","N2","C2",underarmLength);
pat.extendPoint("P2","D2a","O2",1.0 *scale);
pat.displacementPoint("A3","B2",8.5 *scale,9.8 *scale);
pat.rightPoint("B3","A3",halfBust-(pat.distance("N2","X2")+pat.distance("V2","Z2"))+(pat.distance("A1","B1")-pat.distance("I1","J1")));
pat.downPoint("C3","A3",pat.distance("X1","D1"));
pat.angleAngleIntersectionPoint("D3","B3",-90.0,"C3",0.0)
pat.teeIntersectionPoint("X2","N2",0.0,"E2","D2a")
pat.alongPoint("Z2","X1","D1",pat.distance("A2","N2")-pat.distance("B1","X1"));
pat.teeIntersectionPoint("V2","Z2",-180.0,"A1","I1")
pat.alongPoint("E3","A3","B3",(pat.distance("A1","B1")-pat.distance("I1","J1")));
pat.alongPoint("F3","B3","D3",pat.distance("A2","N2")-pat.distance("B1","X1"));
pat.teeIntersectionPoint("H3","F3",-180.0,"A3","C3")
pat.alongPoint("G3","F3","D3",underarmLength);
pat.alongPoint("N3","C3","G3",halfwaist-(pat.distance("I1","J1")+pat.distance("P2","D2a")));
pat.arcCenterPoint("E3a","E3","C3",1.0 *scale);
pat.circleLSIntersectionPoint("I3","E3a","H3","F3",pat.distance("E3a","E3"));
pat.alongPoint("J3","I3","F3",pat.distance("C3","N3")-2.0 *scale);
pat.printPoints();
//shapes.ImageShapenot supported at this point
//pat.displacedQuad("F1","E1",pat.distance("F1","E1")/2.0,-(0.1 *scale));
//pat.displacedQuad("X1","J1",pat.distance("X1","J1")/2.0,-(1.5 *scale));
pat.line("F1","I1");
pat.line("I1","J1");
pat.line("E1","G1a");
pat.line("G1a","X1");
//pat.displacedQuad("H2","K2",pat.distance("H2","K2")/2.0,-(-0.4 *scale));
pat.line("H2","F2");
//pat.displacedQuad("F2","E2",pat.distance("F2","E2")/2.0,-(1.0 *scale));
//pat.displacedQuad("N2","K2",pat.distance("N2","K2")/2.0,-(1.8 *scale));
//pat.displacedQuad("N2","P2",pat.distance("N2","P2")/2.0,-(-0.4 *scale));
pat.line("P2","D2a");
//pat.fittedQuad("E2","I2","D2a");
//pat.displacedQuad("E3","C3",pat.distance("E3","C3")/2.0,-(1.0 *scale));
//pat.displacedQuad("E3","J3",pat.distance("E3","J3")/2.0,-(0.5 *scale));
//pat.displacedQuad("J3","N3",6.8 *scale,-(0.5 *scale));
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'backLength');
wireUpControl(document,'frontLength');
wireUpControl(document,'halfBackWidth');
wireUpControl(document,'halfBust');
wireUpControl(document,'halfFrontWidth');
wireUpControl(document,'halfwaist');
wireUpControl(document,'shoulderLength');
wireUpControl(document,'underarmLength');
wireUpDistance(document);
