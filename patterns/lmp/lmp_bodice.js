pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var armholeHeight=document.getElementById('armholeHeightSlider').value*scale;
var backLength=document.getElementById('backLengthSlider').value*scale;
var backWidth=document.getElementById('backWidthSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var frontWidth=document.getElementById('frontWidthSlider').value*scale;
var hipDepth=document.getElementById('hipDepthSlider').value*scale;
var shoulderLength=document.getElementById('shoulderLengthSlider').value*scale;
var sideLength=document.getElementById('sideLengthSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;


pat.addPoint("A1",10*scale,14.5 *scale);
pat.rightPoint("B1","A1",backWidth+0.5 *scale);
pat.downPoint("C1","A1",backLength+1.0 *scale);
pat.angleAngleIntersectionPoint("D1","C1",0.0,"B1",-90.0)
pat.downPoint("E1","A1",1.0 *scale);
pat.rightPoint("F1","A1",bust/6.0-1.0 *scale);
pat.rightPoint("G1","C1",2.0 *scale);
pat.rightPoint("H1","G1",4.0 *scale);
pat.downPoint("I1","B1",bust/6.0-0.5 *scale);
pat.displacementPoint("K1","I1",0.5 *scale,5.0 *scale);
pat.alongPoint("K1a","I1","K1",5.0 *scale);
pat.downPoint("L","C1",hipDepth);
pat.angleAngleIntersectionPoint("M","B1",-90.0,"L",0.0)
pat.alongPoint("N","L","M",bust/6.0+1.0 *scale);
pat.displacementPoint("A2","B1",85.0 *scale,0.0 *scale);
pat.rightPoint("B2","A2",bust/2.0+2.0 *scale);
pat.downPoint("C2","A2",frontLength);
pat.angleAngleIntersectionPoint("D2","B2",-90.0,"C2",0.0)
pat.leftPoint("E2","B2",bust/6.0);
pat.downPoint("F2","B2",pat.distance("B2","E2"));
pat.alongPoint("G2","F2","D2",2.0*pat.distance("F2","D2")/3.0);
pat.leftPoint("H2","D2",1.0 *scale);
pat.alongPoint("I2","E2","A2",shoulderLength);
pat.downPoint("K2","I2",pat.distance("B1","I1")/2.0);
pat.downPoint("L2","C2",hipDepth);
pat.angleAngleIntersectionPoint("M2","D2",-90.0,"L2",0.0)
pat.rightPoint("M2a","M2",1.5 *scale);
pat.alongPoint("O2","B2","G2",bust/3.0);
pat.leftPoint("P2","O2",frontWidth);
pat.downPoint("Q2","A2",bust/2.0-2.5 *scale);
pat.teeIntersectionPoint("Q2a","Q2",0.0,"F2","G2")
pat.downPoint("R2","Q2",armholeHeight);
pat.downPoint("S2","Q2",5.0 *scale);
pat.teeIntersectionPoint("T2","S2",0.0,"F2","D2")
pat.downPoint("V2","S2",0.5 *scale);
pat.extendPoint("X2","F2","R2",hipDepth);
pat.teeIntersectionPoint("Z2","V2",0.0,"B2","D2")
pat.leftPoint("a2","Z2",bust/6.0+1.0 *scale);
pat.displacementPoint("b2","a2",-6.0 *scale,-pat.distance("T2","Z2"));
pat.displacementPoint("A3","A1",26.0 *scale,12.0 *scale);
pat.rightPoint("B3","A3",bust-(pat.distance("K1c","K1e")+pat.distance("Q2","Q2a"))+10.0 *scale);
pat.downPoint("C3","A3",pat.distance("K1","H1"));
pat.angleAngleIntersectionPoint("D3","C3",0.0,"B3",-90.0)
pat.rightPoint("E3","A3",10.0 *scale);
pat.alongPoint("a2a","M2a","X2",bust/6.0+2.0 *scale);
pat.alongPoint("b2a","a2a","X2",pat.distance("M2a","a2a"));
pat.alongPoint("d2a","a2a","X2",(frontWidth/3.0-1.0 *scale)/2.0);
pat.alongPoint("c2a","a2a","M2a",(frontWidth/3.0-1.0 *scale)/2.0);
pat.alongPoint("e2a","b2a","M2a",(frontWidth/3.0-1.0 *scale)/2.0);
pat.alongPoint("f2a","b2a","X2",(frontWidth/3.0-1.0 *scale)/2.0);
pat.intersectionPoint("a2b","a2","a2a","R2","H2")
pat.alongPoint("c2","a2b","D2",(frontWidth/6.0));
pat.alongPoint("d2","a2b","R2",(frontWidth/6.0));
pat.intersectionPoint("b2b","b2","b2a","H2","R2")
pat.alongPoint("e2","b2b","H2",(frontWidth/6.0));
pat.alongPoint("f2","b2b","R2",(frontWidth/6.0));
pat.extendPoint("L3","A3","C3",hipDepth);
pat.angleAngleIntersectionPoint("M3","L3",0.0,"D3",-90.0)
pat.alongPoint("O3","B3","D3",6.0 *scale);
pat.downPoint("P3","O3",armholeHeight+4.0 *scale);
pat.alongPoint("G3","C3","P3",(waist-3.0 *scale)/4.0);
pat.alongPoint("I3","B3","D3",4.2 *scale);
pat.teeIntersectionPoint("H3","I3",-180.0,"A3","C3")
pat.intersectionPoint("J3","E3","C3","H3","I3")
pat.alongPoint("K3","J3","I3",pat.distance("G3","C3")-2.0 *scale);
pat.leftPoint("L3a","L3",1.0 *scale);
pat.parallelPoint("N3","C3","G3","L3a",pat.distance("L","N")+1.0 *scale);
pat.displacementPoint("A4","B3",14.0 *scale,-1.6 *scale);
pat.rightPoint("B4","A4",pat.distance("C3","G3"));
pat.downPoint("C4","A4",pat.distance("B3","D3")-4.0 *scale);
pat.angleAngleIntersectionPoint("D4","B4",-90.0,"C4",0.0)
pat.alongPoint("E4","B4","D4",2.0 *scale);
pat.alongPoint("O4","E4","D4",armholeHeight+4.0 *scale);
pat.alongPoint("H4","A4","B4",1.5 *scale);
pat.leftPoint("I4","E4",0.5 *scale);
pat.alongPoint("H4a","A4","C4",pat.distance("A4","C4")/3.0);
pat.downPoint("L4","C4",hipDepth);
pat.angleAngleIntersectionPoint("M4","D4",-90.0,"L4",0.0)
pat.alongPoint("P4","C4","L4",pat.distance("G3","N3"));
pat.leftPoint("Q4","P4",2.0 *scale);
pat.extendPoint("X4","H4","O4",hipDepth);
pat.downPoint("K1b","K1a",6.0 *scale);
pat.teeIntersectionPoint("K1c","K1b",-180.0,"E1","G1")
pat.arcCenterPoint("K1d","K1a","H1",-2.5 *scale);
pat.circleLineIntersectionPoint("K1e","K1d","K1c",pat.distance("K1a","K1d"),0.0);
pat.printPoints();

pat.displacedQuad("E1","F1",pat.distance("E1","F1")/2.0,-(0.2 *scale));
pat.line("E1","G1");
pat.line("F1","I1");
pat.displacedQuad("K1a","H1",pat.distance("K1a","H1")/2.0,-(2.5 *scale));
pat.line("G1","L");
pat.line("L","N");
pat.line("H1","N");
pat.displacedQuad("I1","K1a",pat.distance("I1","K1a")/2.0,-(0.5 *scale));
pat.displacedQuad("E2","F2",pat.distance("E2","F2")/2.0,-(2.5 *scale));
pat.line("H2","G2");
pat.displacedQuad("K2","E2",pat.distance("K2","E2")/2.0,-(-0.3 *scale));
pat.line("M2a","H2");
pat.displacedQuad("E3","C3",pat.distance("E3","C3")/2.0,-(2.0 *scale));
pat.displacedQuad("b2","f2",pat.distance("b2","f2")/2.0,-(0.5 *scale));
pat.displacedQuad("b2","e2",pat.distance("b2","e2")/2.0,-(-0.5 *scale));
pat.displacedQuad("a2","d2",pat.distance("a2","d2")/2.0,-(0.5 *scale));
pat.displacedQuad("e2","e2a",pat.distance("e2","b2a")/2.0,-(-0.5 *scale));
pat.displacedQuad("f2","f2a",pat.distance("f2","f2a")/2.0,-(0.5 *scale));
pat.displacedQuad("d2","d2a",pat.distance("d2","d2a")/2.0,-(0.5 *scale));
pat.displacedQuad("c2","c2a",pat.distance("c2","c2a")/2.0,-(-0.5 *scale));
pat.displacedQuad("a2","c2",pat.distance("a2","c2")/2.0,-(-0.5 *scale));
pat.line("X2","f2a");
pat.line("e2a","d2a");
pat.line("F2","G2");
pat.displacedQuad("Q2","R2",pat.distance("Q2","R2")/2.0,-(-0.8 *scale));
pat.displacedQuad("Q2","P2",pat.distance("Q2","P2")/2.0,-(3.0 *scale));
pat.displacedQuad("K2","P2",pat.distance("K2","P2")/2.0,-(-1.0 *scale));
pat.displacedQuad("R2","X2",pat.distance("R2","X2")/2.0,-(0.5 *scale));
pat.line("c2a","M2a");
pat.displacedQuad("E3","K3",pat.distance("E3","K3")/2.0,-(0.4 *scale));
pat.displacedQuad("K3","G3",pat.distance("K3","G3")/2.0,-(0.9 *scale));
pat.line("C3","L3a");
pat.line("G3","N3");
pat.line("L3a","N3");
pat.displacedQuad("H4","I4",pat.distance("H4","I4")/2.0,-(0.4 *scale));
pat.displacedQuad("I4","O4",pat.distance("I4","O4")/2.0,-(0.5 *scale));
pat.displacedQuad("H4","H4a",pat.distance("H4","H4a")/2.0,-(0.5 *scale));
pat.line("H4a","C4");
pat.line("Q4","C4");
pat.line("Q4","X4");
pat.line("O4","X4");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'armholeHeight');
wireUpControl(document,'backLength');
wireUpControl(document,'backWidth');
wireUpControl(document,'bust');
wireUpControl(document,'frontLength');
wireUpControl(document,'frontWidth');
wireUpControl(document,'hipDepth');
wireUpControl(document,'shoulderLength');
wireUpControl(document,'sideLength');
wireUpControl(document,'waist');
wireUpDistance(document);
