pat=new Pattern();
pat.document=document;
var makePattern = function() {
    paper.clear()
    myMeasurements={}
    var backLength=document.getElementById('backLengthSlider').value*scale;

    var sideHeight=document.getElementById('sideHeightSlider').value*scale;
    var sleeveLength=document.getElementById('sleeveLengthSlider').value*scale;
    var sleeveWidth=document.getElementById('sleeveWidthSlider').value*scale;
    addPoint("J",75,75)
    rightPoint("K","J",sleeveWidth);
    downPoint("G","J",(backLength-sideHeight)*2.0/3.0);
    angleAngleIntersectionPoint("H","G",0.0,"K",-90.0)
    downPoint("C","G",sleeveLength/2.0-2.0 *scale);
    angleAngleIntersectionPoint("D","C",0.0,"H",-90.0)
    downPoint("E","C",sleeveLength/2.0+3.0 *scale);
    angleAngleIntersectionPoint("F","H",-90.0,"E",0.0)
    midPoint("L","J","K")
    rightPoint("M","J",sleeveWidth/8.0);
    angleAngleIntersectionPoint("N","C",0.0,"M",-90.0)
    angleAngleIntersectionPoint("P","E",0.0,"M",-90.0)
    midPoint("R","E","F")
    downPoint("p1","M",2.0 *scale);
    rightPoint("p2","p1",3.0 *scale);
    midPoint("p3","C","D")
    upPoint("p4","p3",sleeveLength/2.0);
    leftPoint("p5","K",sleeveWidth/4.0);
    leftPoint("p6","p5",sleeveWidth/8.0);
    upPoint("p7","p5",2.0 *scale);
    upPoint("p8","R",3.0 *scale);
    leftPoint("p9","p3",3.0 *scale);
    rightPoint("p10","p3",3.0 *scale);
    rightPoint("p11","p8",1.0 *scale);
    leftPoint("p12","p8",2.0 *scale);
    circleLineIntersectionPoint("p13","p11","E",9.0 *scale,0);
    circleLSIntersectionPoint("p14","p12","F","E",11.0 *scale);
    rightPoint("p15","G",3.0*sleeveWidth/8.0);
    downPoint("p16","K",2.0 *scale);
    rightPoint("p17","p16",3.0 *scale);
    midPoint("p18","p6","p4")
    if(withPoints)
    {
        printPoints();
    }
    displacedQuad("p2","N",distance("p2","N")/2.0,-1.0 *scale);
    displacedQuad("N","p13",distance("N","p13")/2.0,-0.4 *scale);
    fittedQuad("p2","p15","p4");
    line("p17","D");
    displacedQuad("D","p14",distance("D","p14")/2.0,0.7 *scale);
    line("p14","p12");
    displacedQuad("p4","p10",distance("p4","p10")/2.0,0.7 *scale);
    displacedQuad("p18","p4",distance("p18","p4")/2.0,0.4 *scale);
    displacedQuad("p18","p6",distance("p18","p6")/2.0,0.3 *scale);
    fittedQuad("p6","p7","p17");
    displacedQuad("p10","p12",distance("p10","p12")/2.0,1.0 *scale);
    displacedQuad("p9","p11",distance("p9","p11")/2.0,-0.6 *scale);
    displacedQuad("p9","p4",distance("p9","p4")/2.0,0.4 *scale);
    line("p11","p13");
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
