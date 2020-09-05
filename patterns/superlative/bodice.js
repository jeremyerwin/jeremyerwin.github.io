pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var blade=document.getElementById('bladeSlider').value*scale;
var breast=document.getElementById('breastSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var scyeDepth=document.getElementById('scyeDepthSlider').value*scale;
var sideLength=document.getElementById('sideLengthSlider').value*scale;
var strap=document.getElementById('strapSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
var waistLength=document.getElementById('waistLengthSlider').value*scale;
pat.addPoint("A",33.66 *scale,15.88 *scale)
pat.downPoint("B","A",strap-breast/16.0);
pat.upPoint("Q","B",scyeDepth);
pat.downPoint("C","Q",pat.distance("Q","B")/3.0);
pat.downPoint("D","Q",waistLength);
pat.leftPoint("N","A",breast/16.0);
pat.leftPoint("E","B",breast/2.0);
pat.leftPoint("F","B",bust/2.0);
pat.rightPoint("K","F",bust/12.0);
pat.angleAngleIntersectionPoint("R","F",-90.0,"D",-180.0)
pat.leftPoint("S","R",1.0 *scale);
pat.leftPoint("J","B",blade);
pat.rightPoint("H","J",breast/6.0);
pat.midPoint("G","E","B")
pat.downPoint("U","G",sideLength);
pat.angleAngleIntersectionPoint("L","A",-180.0,"K",90.0)
pat.alongPoint("M","L","C",breast/16.0);
pat.circleLSIntersectionPoint("T","M","L","F",5.38 *scale);
pat.angleAngleIntersectionPoint("O","H",90.0,"C",-180.0)
pat.alongPoint("P","M","C",pat.distance("N","O"));
pat.downPoint("X","J",1.25 *scale);
pat.midPoint("W","S","U")
pat.leftPoint("p1","D",0.25 *scale);
pat.leftPoint("p2","D",1.5 *scale);
pat.leftPoint("p3","p2",0.5 *scale);
pat.leftPoint("p4","p3",2.25 *scale);
pat.leftPoint("p5","p4",1.0 *scale);
pat.leftPoint("p6","p5",2.25 *scale);
pat.leftPoint("p7","p6",1.0 *scale);
pat.leftPoint("p8","U",1.0 *scale);
pat.rightPoint("V","S",2.5 *scale);
pat.leftPoint("p31","p8",((pat.distance("S","p8")+pat.distance("p1","p2")+pat.distance("p3","p4")+pat.distance("p5","p6")+pat.distance("p7","p8")-waist/2.0)-(bust-breast)/2.0)/3.0);
pat.rightPoint("p10","W",((pat.distance("S","p8")+pat.distance("p1","p2")+pat.distance("p3","p4")+pat.distance("p5","p6")+pat.distance("p7","p8")-waist/2.0)-(bust-breast)/2.0)/6.0);
pat.leftPoint("p11","W",((pat.distance("S","p8")+pat.distance("p1","p2")+pat.distance("p3","p4")+pat.distance("p5","p6")+pat.distance("p7","p8")-waist/2.0)-(bust-breast)/2.0)/6.0);
pat.rightPoint("p12","V",((pat.distance("S","p8")+pat.distance("p1","p2")+pat.distance("p3","p4")+pat.distance("p5","p6")+pat.distance("p7","p8")-waist/2.0)-(bust-breast)/2.0)/6.0);
pat.leftPoint("p13","V",((pat.distance("S","p8")+pat.distance("p1","p2")+pat.distance("p3","p4")+pat.distance("p5","p6")+pat.distance("p7","p8")-waist/2.0)-(bust-breast)/2.0)/6.0);
pat.extendPoint("Z","H","X",5.5 *scale);
pat.alongPoint("Y","X","Z",2.0 *scale);
pat.upPoint("J2","J",3.0 *scale);
pat.alongPoint("p18","H","Z",4.5 *scale);
pat.printPoints();
//shapes.ImageShapenot supported at this point
pat.line("Q","p1");
pat.displacedQuad("Q","N",pat.distance("Q","N")/2.0,-(-0.13 *scale));
pat.line("N","O");
pat.line("M","P");
pat.displacedQuad("M","T",pat.distance("M","T")/2.0,-(-0.75 *scale));
pat.line("T","F");
pat.line("F","S");
pat.line("p13","Z");
pat.line("Z","p12");
pat.line("p11","Y");
pat.line("Y","p10");
pat.displacedQuad("P","J2",pat.distance("P","J2")/2.0,-(0.5 *scale));
pat.displacedQuad("J2","G",pat.distance("J2","G")/2.0,-(1.28 *scale));
pat.displacedQuad("O","G",pat.distance("O","G")/2.0,-(-1.5 *scale));
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'blade');
wireUpControl(document,'breast');
wireUpControl(document,'bust');
wireUpControl(document,'scyeDepth');
wireUpControl(document,'sideLength');
wireUpControl(document,'strap');
wireUpControl(document,'waist');
wireUpControl(document,'waistLength');
wireUpDistance(document);
