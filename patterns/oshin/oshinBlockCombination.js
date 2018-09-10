var paper=Raphael("container",5000,5000);
var scale=15;
var points= new Map();
var makePattern=function(){
paper.clear()
    myMeasurements={}
var backLength=document.getElementById('backLengthSlider').value*scale;
var backWidth=document.getElementById('backWidthSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var chestWidth=document.getElementById('chestWidthSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var hipDepth=document.getElementById('hipDepthSlider').value*scale;
var hips=document.getElementById('hipsSlider').value*scale;
var offset=document.getElementById('offsetSlider').value*scale;
var pantaloonLength=document.getElementById('pantaloonLengthSlider').value*scale;
var sideHeight=document.getElementById('sideHeightSlider').value*scale;
var sleeveLength=document.getElementById('sleeveLengthSlider').value*scale;
var sleeveWidth=document.getElementById('sleeveWidthSlider').value*scale;
var thighs=document.getElementById('thighsSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
addPoint("A",16.2 *scale,9.6 *scale)
rightPoint("B","A",bust);
downPoint("C","A",backLength);
angleAngleIntersectionPoint("D","B",-90.0,"C",0.0)
downPoint("E","C",hipDepth);
angleAngleIntersectionPoint("F","D",-90.0,"E",0.0)
midPoint("G","A","C")
angleAngleIntersectionPoint("H","B",-90.0,"G",0.0)
alongPoint("J","A","G",distance("A","G")/3.0);
angleAngleIntersectionPoint("K","B",-90.0,"J",0.0)
leftPoint("L","H",backWidth);
angleAngleIntersectionPoint("M","L",-90.0,"B",-180.0)
rightPoint("N","G",chestWidth);
angleAngleIntersectionPoint("P","A",0.0,"N",90.0)
downPoint("Q","C",thighs/2.0+hips/8.0);
rightPoint("R","Q",hips);
downPoint("S","C",pantaloonLength);
angleAngleIntersectionPoint("T","S",0.0,"R",-90.0)
leftPoint("p1","D",1.0 *scale);
leftPoint("p2","B",bust/8.0);
upPoint("p3","p2",1.0 *scale);
downPoint("p4","M",3.0 *scale);
leftPoint("p5","p1",7.0 *scale);
leftPoint("p6","p5",2.0 *scale);
downPoint("p7","p4",6.0 *scale);
arcCenterPoint("p8","p5","p7",2.5 *scale);
circleLSIntersectionPoint("p9","p8","G","H",distance("p8","p5"));
rightPoint("p10","J",bust/4.0);
upPoint("p11","p10",bust/4.0);
midPoint("p12","p11","p10")
circleLineIntersectionPoint("p13","p11","p12",distance("p3","p4"),0.0);
upPoint("p14","C",frontLength);
leftPoint("p15","E",bust/16.0);
intersectionPoint("p16","p15","G","C","D")
teeIntersectionPoint("p17","p14",0.0,"p15","G")
rightPoint("p18","G",11.0 *scale);
rightPoint("p19","p16",9.0 *scale);
perpendicularBisectorPoint("p20","p6","p5",hipDepth);
midPoint("p21","G","H")
teeIntersectionPoint("p22","p21",-90.0,"C","D")
teeIntersectionPoint("p23","p21",-90.0,"E","F")
leftPoint("p24","p23",(hips-distance("p15","F"))/2.0);
rightPoint("p25","p23",(hips-distance("p15","F"))/2.0);
leftPoint("p26","p22",(distance("p16","p6")-(waist-distance("p1","p5")))/4.0);
rightPoint("p27","p22",(distance("p16","p6")-(waist-distance("p1","p5")))/4.0);
rightPoint("p28","p19",(distance("p16","p6")-(waist-distance("p1","p5")))/2.0);
midPoint("p29","p19","p28")
intersectionPoint("p30","p18","p29","p15","F")
alongPoint("p31","p18","p30",5.5 *scale);
leftPoint("p32","S",hips/16.0);
leftPoint("p33","Q",1.5*hips/8.0);
rightPoint("p34","R",hips/8.0*1.5);
rightPoint("p35","T",hips/16.0);
intersectionPoint("p36","p26","p25","p27","p24")
midPoint("p37","P","N")
rightPoint("p38","E",hips);
teeIntersectionPoint("p39","p38",90.0,"p36","p5")
printPoints();
//shapes.ImageShapenot supported at this point
line("A","B");
line("J","K");
line("G","A");
line("C","D");
line("E","F");
line("A","E");
line("B","F");
line("P","N");
line("p32","p35");
displacedQuad("p33","p32",distance("p33","p32")/2.0,-(-1.0 *scale));
displacedQuad("p34","p35",distance("p34","p35")/2.0,-(1.0 *scale));
displacedQuad("p11","p17",6.0 *scale,-(-1.4 *scale));
line("p11","p13");
fittedQuad("p13","p37","p21");
displacedQuad("p7","p21",5.6 *scale,-(-2.6 *scale));
line("p7","M");
line("p4","p3");
displacedQuad("p3","B",3.2 *scale,-(0.5 *scale));
line("B","p1");
fittedQuad("p7","p9","p5");
line("p5","p20");
line("p6","p20");
line("p1","F");
fittedQuad("p7","p9","p6");
line("p21","p27");
line("p27","p24");
line("p26","p25");
line("p26","p21");
line("p31","p28");
line("p31","p19");
line("p19","p30");
line("p30","p28");
line("p17","p15");
displacedQuad("p39","p36",21.9 *scale,-(0.9 *scale));
displacedQuad("p39","p34",24.3 *scale,-(-2.0 *scale));
displacedQuad("p15","p33",distance("p15","p33")/2.0,-(-1.5 *scale));
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'backLength');
wireUpControl(document,'backWidth');
wireUpControl(document,'bust');
wireUpControl(document,'chestWidth');
wireUpControl(document,'frontLength');
wireUpControl(document,'hipDepth');
wireUpControl(document,'hips');
wireUpControl(document,'offset');
wireUpControl(document,'pantaloonLength');
wireUpControl(document,'sideHeight');
wireUpControl(document,'sleeveLength');
wireUpControl(document,'sleeveWidth');
wireUpControl(document,'thighs');
wireUpControl(document,'waist');
wireUpDistance(document);
