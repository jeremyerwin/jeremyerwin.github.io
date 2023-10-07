pat=new Pattern();
pat.document=document;
var makePattern = function() {
    pat.paper.clear();
     scale=pat.scale;
    myMeasurements={}
    var backLength=document.getElementById('backLengthSlider').value*scale;

    var sideHeight=document.getElementById('sideHeightSlider').value*scale;
    var sleeveLength=document.getElementById('sleeveLengthSlider').value*scale;
    var sleeveWidth=document.getElementById('sleeveWidthSlider').value*scale;
    pat.addPoint("J",75,75)
    pat.rightPoint("K","J",sleeveWidth);
    pat.downPoint("G","J",(backLength-sideHeight)*2.0/3.0);
    pat.angleAngleIntersectionPoint("H","G",0.0,"K",-90.0)
    pat.downPoint("C","G",sleeveLength/2.0-2.0 *scale);
    pat.angleAngleIntersectionPoint("D","C",0.0,"H",-90.0)
    pat.downPoint("E","C",sleeveLength/2.0+3.0 *scale);
    pat.angleAngleIntersectionPoint("F","H",-90.0,"E",0.0)
    pat.midPoint("L","J","K")
    pat.rightPoint("M","J",sleeveWidth/8.0);
    pat.angleAngleIntersectionPoint("N","C",0.0,"M",-90.0)
    pat.angleAngleIntersectionPoint("P","E",0.0,"M",-90.0)
    pat.midPoint("R","E","F")
    pat.downPoint("p1","M",2.0 *scale);
    pat.rightPoint("p2","p1",3.0 *scale);
    pat.midPoint("p3","C","D")
    pat.upPoint("p4","p3",sleeveLength/2.0);
    pat.leftPoint("p5","K",sleeveWidth/4.0);
    pat.leftPoint("p6","p5",sleeveWidth/8.0);
    pat.upPoint("p7","p5",2.0 *scale);
    pat.upPoint("p8","R",3.0 *scale);
    pat.leftPoint("p9","p3",3.0 *scale);
    pat.rightPoint("p10","p3",3.0 *scale);
    pat.rightPoint("p11","p8",1.0 *scale);
    pat.leftPoint("p12","p8",2.0 *scale);
    pat.circleLineIntersectionPoint("p13","p11","E",9.0 *scale,0);
    pat.circleLSIntersectionPoint("p14","p12","F","E",11.0 *scale);
    pat.rightPoint("p15","G",3.0*sleeveWidth/8.0);
    pat.downPoint("p16","K",2.0 *scale);
    pat.rightPoint("p17","p16",3.0 *scale);
    pat.midPoint("p18","p6","p4");

    pat.printPoints();
   
    pat.displacedQuad("p2","N",pat.distance("p2","N")/2.0,-1.0 *scale);
    pat.displacedQuad("N","p13",pat.distance("N","p13")/2.0,-0.4 *scale);
    pat.fittedQuad("p2","p15","p4");
   
    pat.displacedQuad("D","p14",pat.distance("D","p14")/2.0,0.7 *scale);
    pat.line("p14","p12");
    pat.displacedQuad("p4","p10",pat.distance("p4","p10")/2.0,0.7 *scale);
    pat.displacedQuad("p18","p4",pat.distance("p18","p4")/2.0,0.4 *scale);
    pat.displacedQuad("p18","p6",pat.distance("p18","p6")/2.0,0.3 *scale);
    pat.fittedQuad("p6","p7","p17");
    pat.displacedQuad("p10","p12",pat.distance("p10","p12")/2.0,1.0 *scale);
    pat.displacedQuad("p9","p11",pat.distance("p9","p11")/2.0,-0.6 *scale);
    pat.displacedQuad("p9","p4",pat.distance("p9","p4")/2.0,0.4 *scale);
    pat.line("p11","p13");
    displaydistance(document);
}

wireUpScale(document);
wireUpControl(document,'backLength');
wireUpControl(document,'sideHeight');
wireUpControl(document,'backLength');
wireUpControl(document,'sleeveLength');
wireUpControl(document,'sleeveWidth');

wireUpDistance(document);


makePattern(true);
