var paper=Raphael("container",5000,5000);
var scale=15;
var points= new Map();
var makePattern=function(){
paper.clear()
    myMeasurements={}
var armholeHeight=document.getElementById('armholeHeightSlider').value*scale;
var backLength=document.getElementById('backLengthSlider').value*scale;
var backWidth=document.getElementById('backWidthSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var frontWidth=document.getElementById('frontWidthSlider').value*scale;
var hipDepth=document.getElementById('hipDepthSlider').value*scale;
var hips=document.getElementById('hipsSlider').value*scale;
var shoulderLength=document.getElementById('shoulderLengthSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
var yoffset=document.getElementById('yoffsetSlider').value*scale;
addPoint("A1",7.9 *scale,14.5 *scale)
rightPoint("B1","A1",backWidth+0.5 *scale);
downPoint("C1","A1",backLength+1.0 *scale);
angleAngleIntersectionPoint("D1","C1",0.0,"B1",-90.0)
downPoint("E1","A1",1.0 *scale);
rightPoint("F1","A1",bust/6.0-1.0 *scale);
rightPoint("G1","C1",2.0 *scale);
rightPoint("H1","G1",4.0 *scale);
downPoint("I1","B1",bust/6.0-0.5 *scale);
displacementPoint("K1","I1",0.5 *scale,5.0 *scale);
alongPoint("K1a","I1","K1",5.0 *scale);
downPoint("L","C1",hipDepth);
angleAngleIntersectionPoint("M","B1",-90.0,"L",0.0)
alongPoint("N","L","M",bust/6.0+1.0 *scale);
displacementPoint("A2","B1",85.0 *scale,0.0 *scale);
rightPoint("B2","A2",bust/2.0+2.0 *scale);
downPoint("C2","A2",frontLength);
angleAngleIntersectionPoint("D2","B2",-90.0,"C2",0.0)
leftPoint("E2","B2",bust/6.0);
downPoint("F2","B2",distance("B2","E2"));
alongPoint("G2","F2","D2",2.0*distance("F2","D2")/3.0);
leftPoint("H2","D2",1.0 *scale);
alongPoint("I2","E2","A2",shoulderLength);
downPoint("K2","I2",distance("B1","I1")/2.0);
downPoint("L2","C2",hipDepth);
angleAngleIntersectionPoint("M2","D2",-90.0,"L2",0.0)
rightPoint("M2a","M2",1.5 *scale);
alongPoint("O2","B2","G2",bust/3.0);
leftPoint("P2","O2",frontWidth);
downPoint("Q2","A2",bust/2.0-2.5 *scale);
teeIntersectionPoint("Q2a","Q2",0.0,"F2","G2")
downPoint("R2","Q2",armholeHeight);
downPoint("S2","Q2",5.0 *scale);
teeIntersectionPoint("T2","S2",0.0,"F2","D2")
downPoint("V2","S2",0.5 *scale);
extendPoint("X2","F2","R2",hipDepth);
teeIntersectionPoint("Z2","V2",0.0,"B2","D2")
leftPoint("a2","Z2",bust/6.0+1.0 *scale);
displacementPoint("b2","a2",-6.0 *scale,-distance("T2","Z2"));
displacementPoint("A3","A1",26.0 *scale,12.0 *scale);
rightPoint("B3","A3",bust-(distance("K1c","K1e")+distance("Q2","Q2a"))+10.0 *scale);
downPoint("C3","A3",distance("K1","H1"));
angleAngleIntersectionPoint("D3","C3",0.0,"B3",-90.0)
rightPoint("E3","A3",10.0 *scale);
alongPoint("a2a","M2a","X2",bust/6.0+2.0 *scale);
alongPoint("b2a","a2a","X2",distance("M2a","a2a"));
alongPoint("d2a","a2a","X2",(frontWidth/3.0-1.0 *scale)/2.0);
alongPoint("c2a","a2a","M2a",(frontWidth/3.0-1.0 *scale)/2.0);
alongPoint("e2a","b2a","M2a",(frontWidth/3.0-1.0 *scale)/2.0);
alongPoint("f2a","b2a","X2",(frontWidth/3.0-1.0 *scale)/2.0);
intersectionPoint("a2b","a2","a2a","R2","H2")
alongPoint("c2","a2b","D2",(frontWidth/6.0));
alongPoint("d2","a2b","R2",(frontWidth/6.0));
intersectionPoint("b2b","b2","b2a","H2","R2")
alongPoint("e2","b2b","H2",(frontWidth/6.0));
alongPoint("f2","b2b","R2",(frontWidth/6.0));
extendPoint("L3","A3","C3",hipDepth);
angleAngleIntersectionPoint("M3","L3",0.0,"D3",-90.0)
alongPoint("O3","B3","D3",6.0 *scale);
downPoint("P3","O3",armholeHeight+4.0 *scale);
alongPoint("G3","C3","P3",(waist-3.0 *scale)/4.0);
alongPoint("I3","B3","D3",4.2 *scale);
teeIntersectionPoint("H3","I3",-180.0,"A3","C3")
intersectionPoint("J3","E3","C3","H3","I3")
alongPoint("K3","J3","I3",distance("G3","C3")-2.0 *scale);
leftPoint("L3a","L3",1.0 *scale);
parallelPoint("N3","C3","G3","L3a",distance("L","N")+1.0 *scale);
displacementPoint("A4","B3",14.0 *scale,-1.6 *scale);
rightPoint("B4","A4",distance("C3","G3"));
downPoint("C4","A4",distance("B3","D3")-4.0 *scale);
angleAngleIntersectionPoint("D4","B4",-90.0,"C4",0.0)
alongPoint("E4","B4","D4",2.0 *scale);
alongPoint("O4","E4","D4",armholeHeight+4.0 *scale);
alongPoint("H4","A4","B4",1.5 *scale);
leftPoint("I4","E4",0.5 *scale);
alongPoint("H4a","A4","C4",distance("A4","C4")/3.0);
downPoint("L4","C4",hipDepth);
angleAngleIntersectionPoint("M4","D4",-90.0,"L4",0.0)
alongPoint("P4","C4","L4",distance("G3","N3"));
leftPoint("Q4","P4",2.0 *scale);
extendPoint("X4","H4","O4",hipDepth);
downPoint("K1b","K1a",6.0 *scale);
teeIntersectionPoint("K1c","K1b",-180.0,"E1","G1")
arcCenterPoint("K1d","K1a","H1",-2.5 *scale);
circleLineIntersectionPoint("K1e","K1d","K1c",distance("K1a","K1d"),0.0);
printPoints();
//shapes.ImageShapenot supported at this point
//shapes.ImageShapenot supported at this point
//shapes.ImageShapenot supported at this point
//shapes.ImageShapenot supported at this point
displacedQuad("E1","F1",distance("E1","F1")/2.0,-(0.2 *scale));
line("E1","G1");
line("F1","I1");
displacedQuad("K1a","H1",distance("K1a","H1")/2.0,-(2.5 *scale));
line("G1","L");
line("L","N");
line("H1","N");
displacedQuad("I1","K1a",distance("I1","K1a")/2.0,-(0.5 *scale));
displacedQuad("E2","F2",distance("E2","F2")/2.0,-(2.5 *scale));
line("H2","G2");
displacedQuad("K2","E2",distance("K2","E2")/2.0,-(-0.3 *scale));
line("M2a","H2");
displacedQuad("E3","C3",distance("E3","C3")/2.0,-(2.0 *scale));
displacedQuad("b2","f2",distance("b2","f2")/2.0,-(0.5 *scale));
displacedQuad("b2","e2",distance("b2","e2")/2.0,-(-0.5 *scale));
displacedQuad("a2","d2",distance("a2","d2")/2.0,-(0.5 *scale));
displacedQuad("e2","e2a",distance("e2","b2a")/2.0,-(-0.5 *scale));
displacedQuad("f2","f2a",distance("f2","f2a")/2.0,-(0.5 *scale));
displacedQuad("d2","d2a",distance("d2","d2a")/2.0,-(0.5 *scale));
displacedQuad("c2","c2a",distance("c2","c2a")/2.0,-(-0.5 *scale));
displacedQuad("a2","c2",distance("a2","c2")/2.0,-(-0.5 *scale));
line("X2","f2a");
line("e2a","d2a");
line("F2","G2");
displacedQuad("Q2","R2",distance("Q2","R2")/2.0,-(-0.8 *scale));
displacedQuad("Q2","P2",distance("Q2","P2")/2.0,-(3.0 *scale));
displacedQuad("K2","P2",distance("K2","P2")/2.0,-(-1.0 *scale));
displacedQuad("R2","X2",distance("R2","X2")/2.0,-(0.5 *scale));
line("c2a","M2a");
displacedQuad("E3","K3",distance("E3","K3")/2.0,-(0.4 *scale));
displacedQuad("K3","G3",distance("K3","G3")/2.0,-(0.9 *scale));
line("C3","L3a");
line("G3","N3");
line("L3a","N3");
displacedQuad("H4","I4",distance("H4","I4")/2.0,-(0.4 *scale));
displacedQuad("I4","O4",distance("I4","O4")/2.0,-(0.5 *scale));
displacedQuad("H4","H4a",distance("H4","H4a")/2.0,-(0.5 *scale));
line("H4a","C4");
line("Q4","C4");
line("Q4","X4");
line("O4","X4");
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
wireUpControl(document,'hips');
wireUpControl(document,'shoulderLength');
wireUpControl(document,'waist');
wireUpControl(document,'yoffset');
wireUpDistance(document);
