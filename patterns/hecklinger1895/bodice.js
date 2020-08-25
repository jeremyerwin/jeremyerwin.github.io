pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var blade=document.getElementById('bladeSlider').value*scale;
var breast=document.getElementById('breastSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var underarmHeight=document.getElementById('underarmHeightSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
pat.addPoint("O",33.41 *scale,9.0 *scale)
pat.downPoint("p1","O",0.75 *scale);
pat.downPoint("B","p1",15.0 *scale);
pat.alongPoint("A","B","p1",underarmHeight);
pat.leftPoint("C","B",breast/24.0);
pat.teeIntersectionPoint("A1","A",-180.0,"p1","C")
pat.leftPoint("G","A1",breast/2.0);
pat.leftPoint("K","A1",blade);
pat.rightPoint("L","K",blade*3.0/8.0);
pat.angleAngleIntersectionPoint("I","K",90.0,"O",-180.0)
pat.angleAngleIntersectionPoint("J","B",-180.0,"K",-90.0)
pat.leftPoint("p2","O",blade/16.0*3.0);
pat.teeIntersectionPoint("V","L",90.0,"O","p2")
pat.midPoint("Z","V","L")
pat.midPoint("T","V","Z")
pat.midPoint("p3","T","Z")
pat.leftPoint("p9","O",breast/6.0);
pat.teeIntersectionPoint("X","p9",-90.0,"p2","p3")
pat.angleAngleIntersectionPoint("p8","p9",-90.0,"Z",0.0)
pat.intersectionPoint("p11","X","C","A","G")
pat.leftPoint("D","C",1.5 *scale);
pat.midPoint("P","G","K")
pat.leftPoint("J1","J",1.0 *scale);
pat.circleLineIntersectionPoint("E","J1","P",frontLength-pat.distance("p2","p1"),-90.0);
pat.leftPoint("F","E",breast/12.0);
pat.alongPoint("N","F","G",breast/12.0);
pat.intersectionPoint("H","B","J","F","G")
pat.alongPoint("p13","E","T",pat.distance("p2","X"));
pat.leftPoint("K1","K",pat.distance("V","p9"));
pat.leftPoint("Z2","p8",0.25 *scale);
pat.upPoint("W","L",1.5 *scale);
pat.upPoint("OO","K1",2.0 *scale);
pat.leftPoint("p16","D",1.0 *scale);
pat.leftPoint("G2","G",0.5 *scale);
pat.alongPoint("S","G","K",pat.distance("G","K")/3.0);
pat.alongPoint("T","G","K",2.0*pat.distance("G","K")/3.0);
pat.rightPoint("U","S",0.5 *scale);
pat.alongPoint("Q","H","J",pat.distance("H","J")/3.0);
pat.alongPoint("R","H","J",2.0*pat.distance("H","J")/3.0);
pat.alongPoint("V1","U","Q",pat.distance("U","Q")/3.0);
pat.alongPoint("W1","T","R",pat.distance("T","R")/3.0-0.5 *scale);
pat.leftPoint("p4","Q",(pat.distance("C","D")+pat.distance("p16","H")-waist/2.0-0.5 *scale)/4.0);
pat.rightPoint("p5","Q",(pat.distance("C","D")+pat.distance("p16","H")-waist/2.0-0.5 *scale)/4.0);
pat.leftPoint("p6","R",(pat.distance("C","D")+pat.distance("p16","H")-waist/2.0-0.5 *scale)/4.0);
pat.rightPoint("p7","R",(pat.distance("C","D")+pat.distance("p16","H")-waist/2.0-0.5 *scale)/4.0);
pat.alongPoint("p15","p7","p16",pat.distance("p7","p16")/3.0);
pat.leftPoint("p15a","p15",0.25 *scale);
pat.rightPoint("p15b","p15",0.25 *scale);
pat.teeIntersectionPoint("p14","p15",90.0,"G","A")
pat.alongPoint("p17","p7","p16",2.0*pat.distance("p7","p16")/3.0);
pat.extendPoint("p10","N","H",1.0 *scale);
pat.downPoint("p16a","p16",0.5 *scale);
pat.intersectionPoint("p4a","V1","p4","p10","p15a")
pat.downPoint("p5a","p5",pat.distance("p4","p4a"));
pat.teeIntersectionPoint("p6a","p6",-90.0,"p10","p15a")
pat.downPoint("p7a","p7",pat.distance("p6","p6a"));
pat.printPoints();
//shapes.ImageShapenot supported at this point
pat.displacedQuad("p2","p1",pat.distance("p2","p1")/2.0,-(0.25 *scale));
pat.line("p2","X");
pat.line("p1","C");
pat.line("C","D");
pat.displacedQuad("p11","D",pat.distance("p11","D")/2.0,-(-0.63 *scale));
pat.displacedQuad("p8","p11",pat.distance("p8","p11")/2.0,-(-0.34 *scale));
pat.line("E","p13");
pat.displacedQuad("E","N",pat.distance("E","N")/2.0,-(-1.25 *scale));
pat.displacedQuad("X","p8",pat.distance("X","p8")/2.0,-(-0.13 *scale));
pat.displacedQuad("Z2","p11",pat.distance("Z2","p11")/2.0,-(-0.22 *scale));
pat.displacedQuad("Z2","W",pat.distance("Z2","W")/2.0,-(-0.25 *scale));
pat.displacedQuad("W","K",pat.distance("W","K")/2.0,-(-0.59 *scale));
pat.displacedQuad("OO","K",pat.distance("OO","K")/2.0,-(0.22 *scale));
pat.displacedQuad("OO","p13",pat.distance("OO","p13")/2.0,-(-0.25 *scale));
pat.displacedQuad("p11","p16",pat.distance("p11","p16")/2.0,-(-0.34 *scale));
pat.displacedQuad("N","G2",pat.distance("N","G2")/2.0,-(0.25 *scale));
pat.displacedQuad("G2","H",pat.distance("G2","H")/2.0,-(-0.28 *scale));
pat.displacedQuad("p4","V1",pat.distance("p4","V1")/2.0,-(0.13 *scale));
pat.displacedQuad("V1","p5",pat.distance("V1","p5")/2.0,-(-0.06 *scale));
pat.displacedQuad("p6","W1",pat.distance("p6","W1")/2.0,-(0.13 *scale));
pat.displacedQuad("W1","p7",pat.distance("W1","p7")/2.0,-(-0.03 *scale));
pat.displacedQuad("p14","p15a",pat.distance("p14","p15a")/2.0,-(0.19 *scale));
pat.displacedQuad("p14","p15b",pat.distance("p14","p15b")/2.0,-(-0.16 *scale));
pat.displacedQuad("L","p17",pat.distance("L","p17")/2.0,-(0.25 *scale));
pat.displacedQuad("L","p17",pat.distance("L","p17")/2.0,-(-0.25 *scale));
pat.line("p16","p16a");
pat.displacedQuad("p16a","p17",pat.distance("p16a","p17")/2.0,-(0.13 *scale));
pat.line("p16","p16a");
pat.line("p17","p15b");
pat.line("p10","p4a");
pat.line("p4a","p4");
pat.line("H","p10");
pat.line("p5a","p6a");
pat.line("p5","p5a");
pat.line("p6","p6a");
pat.line("p7","p7a");
pat.displacedQuad("p7a","p15a",pat.distance("p7a","p15a")/2.0,-(-0.13 *scale));
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'blade');
wireUpControl(document,'breast');
wireUpControl(document,'frontLength');
wireUpControl(document,'underarmHeight');
wireUpControl(document,'waist');
wireUpDistance(document);
