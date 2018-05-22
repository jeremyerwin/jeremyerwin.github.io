var paper=Raphael("container",5000,5000);
var scale=15;
var points= new Map();
var makePattern=function(){
paper.clear()
    myMeasurements={}
var backLength=document.getElementById('backLengthSlider').value*scale;
var backWidth=document.getElementById('backWidthSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var hipDepth=document.getElementById('hipDepthSlider').value*scale;
var hips=document.getElementById('hipsSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
addPoint("A",18.59 *scale,12.98 *scale)
rightPoint("B","A",backWidth/2.0+bust/16.0);
downPoint("C","B",backLength);
angleAngleIntersectionPoint("D","A",-90.0,"C",-180.0)
midPoint("E","A","D")
midPoint("R","B","C")
alongPoint("L","A","D",bust/16.0+2.0 *scale);
teeIntersectionPoint("M","L",0.0,"B","C")
alongPoint("X","L","E",5.0 *scale);
teeIntersectionPoint("Y","X",0.0,"B","C")
if(bust< 80 * scale){
displacementPoint("S","D",1.5 *scale,-0.5 *scale);
}else{
displacementPoint("S","D",2.0 *scale,-1.0 *scale);
}
displacementPoint("P","A",bust/16.0,-1.0 *scale);
rightPoint("U","L",backWidth/2.0);
displacementPoint("N","U",-1.0 *scale,distance("L","X"));
rightPoint("O","S",3.0 *scale);
displacementPoint("H","C",-2.0 *scale,-1.0 *scale);
circleLSIntersectionPoint("Oa","H","C","D",waist/5.0-1.0 *scale);
displacementPoint("fA","A",distance("A","B")+3.0 *scale,-2.0 *scale);
rightPoint("fB","fA",(bust/2.0+4.0 *scale)-(backWidth/2.0+bust/16.0));
downPoint("fC","fB",frontLength);
angleAngleIntersectionPoint("fD","fA",-90.0,"fC",-180.0)
midPoint("fE","fB","fC")
midPoint("fR","fA","fD")
alongPoint("fL","fA","fR",bust/16.0-2.0 *scale);
teeIntersectionPoint("fM","fL",0.0,"fB","fC")
alongPoint("fX","fR","fA",bust/16.0);
teeIntersectionPoint("fY","fX",0.0,"fB","fC")
alongPoint("fP","fB","fA",bust/16.0+1.0 *scale);
alongPoint("fZ","fB","fC",bust/16.0+2.0 *scale);
circleLineIntersectionPoint("fU","fP","fL",distance("P","U")-0.5 *scale,0.0);
alongPoint("fYa","fX","fY",bust/10.0);
alongPoint("fJ","fR","fD",bust/16.0);
teeIntersectionPoint("fS","fJ",0.0,"fE","fC")
alongPoint("d1","fS","fJ",bust/16.0);
alongPoint("fDa","fD","fC",1.0 *scale);
alongPoint("fH","fR","fDa",distance("R","H"));
alongPoint("d2","d1","fJ",(distance("S","O")+distance("Oa","H")+distance("fH","fC")-waist/2.0)/2.0+2.0 *scale);
teeIntersectionPoint("d3","d1",-90.0,"fC","fH")
teeIntersectionPoint("d4","d2",-90.0,"fC","fH")
alongPoint("d5","d3","fC",((distance("S","O")+distance("Oa","H")+distance("fH","fC"))-waist/2.0-2.0 *scale)/4.0);
alongPoint("d6","d3","fH",((distance("S","O")+distance("Oa","H")+distance("fH","fC"))-waist/2.0-2.0 *scale)/4.0);
alongPoint("d7","d4","fC",((distance("S","O")+distance("Oa","H")+distance("fH","fC"))-waist/2.0-2.0 *scale)/4.0);
alongPoint("d8","d4","fH",((distance("S","O")+distance("Oa","H")+distance("fH","fC"))-waist/2.0-2.0 *scale)/4.0);
printPoints();
//shapes.ImageShapenot supported at this point
line("A","S");
displacedQuad("A","P",distance("A","P")/2.0,-(0.5 *scale));
displacedQuad("N","O",distance("N","O")/2.0,-(1.5 *scale));
displacedQuad("N","R",distance("N","R")/2.0,-(1.0 *scale));
line("R","H");
displacedQuad("N","Oa",distance("N","Oa")/2.0,-(2.0 *scale));
line("S","O");
line("Oa","H");
displacedQuad("U","N",distance("U","N")/2.0,-(0.5 *scale));
line("P","U");
displacedQuad("fP","fZ",distance("fP","fZ")/2.0,-(2.0 *scale));
line("fP","fU");
displacedQuad("fU","fYa",distance("fU","fYa")/2.0,-(-0.7 *scale));
displacedQuad("fYa","fR",distance("fYa","fR")/2.0,-(-3.0 *scale));
line("fR","fH");
line("fZ","fC");
line("fH","d8");
line("d8","d2");
line("d2","d7");
line("d7","d6");
line("d6","d1");
line("d5","d1");
line("d5","fC");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'backLength');
wireUpControl(document,'backWidth');
wireUpControl(document,'bust');
wireUpControl(document,'frontLength');
wireUpControl(document,'hipDepth');
wireUpControl(document,'hips');
wireUpControl(document,'waist');
wireUpDistance(document);
