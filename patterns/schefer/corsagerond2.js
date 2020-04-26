pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat
paper.clear()
    myMeasurements={}
    pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var backLength=document.getElementById('backLengthSlider').value*scale;
var backWidth=document.getElementById('backWidthSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
pat.addPoint("A",18.59 *scale,12.98 *scale)
pat.rightPoint("B","A",backWidth/2.0+bust/16.0);
pat.downPoint("C","B",backLength);
pat.angleAngleIntersectionPoint("D","A",-90.0,"C",-180.0)
pat.midPoint("E","A","D")
pat.midPoint("R","B","C")
pat.alongPoint("L","A","D",bust/16.0+2.0 *scale);
pat.teeIntersectionPoint("M","L",0.0,"B","C")
pat.alongPoint("X","L","E",5.0 *scale);
pat.teeIntersectionPoint("Y","X",0.0,"B","C")
if(bust< 80 * scale){
    pat.displacementPoint("S","D",1.5 *scale,-0.5 *scale);
}else{
    pat.displacementPoint("S","D",2.0 *scale,-1.0 *scale);
}
pat.displacementPoint("P","A",bust/16.0,-1.0 *scale);
pat.rightPoint("U","L",backWidth/2.0);
pat.displacementPoint("N","U",-1.0 *scale,distance("L","X"));
pat.rightPoint("O","S",3.0 *scale);
pat.displacementPoint("H","C",-2.0 *scale,-1.0 *scale);
pat.circleLineIntersectionPoint("Oa","H","D",waist/5.0-1.0 *scale,180);
pat.displacementPoint("fA","A",distance("A","B")+3.0 *scale,-2.0 *scale);
pat.rightPoint("fB","fA",(bust/2.0+4.0 *scale)-(backWidth/2.0+bust/16.0));
pat.downPoint("fC","fB",frontLength);
pat.angleAngleIntersectionPoint("fD","fA",-90.0,"fC",-180.0)
pat.midPoint("fE","fB","fC")
pat.midPoint("fR","fA","fD")
pat.alongPoint("fL","fA","fR",bust/16.0-2.0 *scale);
pat.teeIntersectionPoint("fM","fL",0.0,"fB","fC")
pat.alongPoint("fX","fR","fA",bust/16.0);
pat.teeIntersectionPoint("fY","fX",0.0,"fB","fC")
pat.alongPoint("fP","fB","fA",bust/16.0+1.0 *scale);
pat.alongPoint("fZ","fB","fC",bust/16.0+2.0 *scale);
pat.circleLineIntersectionPoint("fU","fP","fL",distance("P","U")-0.5 *scale,0.0);
pat.alongPoint("fYa","fX","fY",bust/10.0);
pat.alongPoint("fJ","fR","fD",bust/16.0);
pat.teeIntersectionPoint("fS","fJ",0.0,"fE","fC")
pat.alongPoint("d1","fS","fJ",bust/16.0);
pat.alongPoint("fDa","fD","fC",1.0 *scale);
pat.alongPoint("fH","fR","fDa",distance("R","H"));
pat.alongPoint("d2","d1","fJ",(distance("S","O")+distance("Oa","H")+distance("fH","fC")-waist/2.0)/2.0+2.0 *scale);
pat.teeIntersectionPoint("d3","d1",-90.0,"fC","fH")
pat.teeIntersectionPoint("d4","d2",-90.0,"fC","fH")
pat.alongPoint("d5","d3","fC",((distance("S","O")+distance("Oa","H")+distance("fH","fC"))-waist/2.0-2.0 *scale)/4.0);
pat.alongPoint("d6","d3","fH",((distance("S","O")+distance("Oa","H")+distance("fH","fC"))-waist/2.0-2.0 *scale)/4.0);
pat.alongPoint("d7","d4","fC",((distance("S","O")+distance("Oa","H")+distance("fH","fC"))-waist/2.0-2.0 *scale)/4.0);
pat.alongPoint("d8","d4","fH",((distance("S","O")+distance("Oa","H")+distance("fH","fC"))-waist/2.0-2.0 *scale)/4.0);
pat.printPoints();

pat.line("A","S");
pat.displacedQuad("A","P",distance("A","P")/2.0,-(0.5 *scale));
pat.displacedQuad("N","O",distance("N","O")/2.0,-(1.5 *scale));
pat.displacedQuad("N","R",distance("N","R")/2.0,-(1.0 *scale));
pat.line("R","H");
pat.displacedQuad("N","Oa",distance("N","Oa")/2.0,-(2.0 *scale));
pat.line("S","O");
pat.line("Oa","H");
pat.displacedQuad("U","N",distance("U","N")/2.0,-(0.5 *scale));
line("P","U");
pat.displacedQuad("fP","fZ",distance("fP","fZ")/2.0,-(2.0 *scale));
pat.line("fP","fU");
pat.displacedQuad("fU","fYa",distance("fU","fYa")/2.0,-(-0.7 *scale));
pat.displacedQuad("fYa","fR",distance("fYa","fR")/2.0,-(-3.0 *scale));
pat.line("fR","fH");
pat.line("fZ","fC");
pat.line("fH","d8");
pat.line("d8","d2");
pat.line("d2","d7");
pat.line("d7","d6");
pat.line("d6","d1");
pat.line("d5","d1");
pat.line("d5","fC");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'backLength');
wireUpControl(document,'backWidth');
wireUpControl(document,'bust');
wireUpControl(document,'frontLength');
wireUpControl(document,'waist');
wireUpDistance(document);
 