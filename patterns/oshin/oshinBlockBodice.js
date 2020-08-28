pat=new Pattern();

pat.document=document;
var makePattern = function() {

    pat.paper.clear();
    scale=pat.scale;


	var backLength = document.getElementById('backLengthSlider').value * scale;
	var backWidth = document.getElementById('backWidthSlider').value * scale;
	var bust = document.getElementById('bustSlider').value * scale;
	var chestWidth = document.getElementById('chestWidthSlider').value * scale;
	var frontLength = document.getElementById('frontLengthSlider').value * scale;
	var hipDepth = document.getElementById('hipDepthSlider').value * scale;
	var hips = document.getElementById('hipsSlider').value * scale;
    var sideHeight=document.getElementById('sideHeightSlider').value*scale;
    var neck=document.getElementById('neckSlider').value*scale;
	
	var waist = document.getElementById('waistSlider').value * scale;
	pat.addPoint("A",100,135)
	pat.rightPoint("B","A",bust);
	pat.downPoint("C","A",backLength);
	pat.angleAngleIntersectionPoint("D","B",-90.0,"C",0.0)
	pat.downPoint("E","C",hipDepth);
	pat.angleAngleIntersectionPoint("F","D",-90.0,"E",0.0)
	pat.upPoint("G","C",sideHeight);
	pat.angleAngleIntersectionPoint("H","G",0.0,"B",-90.0)
	pat.alongPoint("J","A","G",pat.distance("A","G")/3.0);
	pat.angleAngleIntersectionPoint("K","B",-90.0,"J",0.0)
	pat.alongPoint("L","H","G",backWidth);
	pat.angleAngleIntersectionPoint("M","L",90.0,"B",-180.0)
	pat.rightPoint("N","G",chestWidth+3.0 *scale);
	pat.angleAngleIntersectionPoint("P","A",0.0,"N",90.0)
	pat.leftPoint("p1","D",2.0 *scale);
	pat.intersectionPoint("p2","A","B","p1","H")
	pat.intersectionPoint("p3","p1","p2","J","K")
	pat.perpendicularPoint("p4","p1","p3",-backWidth);
	pat.perpendicularPoint("p5","p1","p2",-bust/8.0);
	pat.perpendicularPoint("p6","p2","p5",1.0 *scale);
	pat.alongPoint("p7","p4","L",4.0 *scale);
	pat.leftPoint("p8","p1",3.0 *scale);
	pat.arcCenterPoint("p8a","p8","p7",2.5 *scale);
	pat.circleLSIntersectionPoint("p9","p8a","H","G",pat.distance("p8a","p7"));
	pat.leftPoint("p10","p8",1.5 *scale);
	pat.perpendicularBisectorPoint("p11","p8","p10",-hipDepth);
	pat.leftPoint("p12","p11",1.0 *scale);
	pat.rightPoint("p13","p11",0.9 *scale);
	pat.leftPoint("p14","F",0.5 *scale);
	pat.extendPoint("p15","p4","p7",1.5 *scale);
	pat.leftPoint("p15a","M",1.1 *scale);
	pat.teeIntersectionPoint("p16","p15a",-90.0,"p9","p15")
	pat.leftPoint("p17","N",bust/8.0*1.5);
	pat.teeIntersectionPoint("p18","p17",90.0,"A","p2")
	pat.intersectionPoint("p19","J","K","p17","p18")
	pat.upPoint("p20","p19",2.0*bust/8.0);
	pat.midPoint("p21","p20","p19")
	pat.circleLineIntersectionPoint("p22","p20","p21",pat.distance("p6","p4")-0.5 *scale,180.0);
	pat.midPoint("p23","A","G")
	pat.rightPoint("p24","p23",chestWidth);
	pat.upPoint("p25","N",1.5 *scale);
	pat.intersectionPoint("p26","C","D","P","N")
	pat.midPoint("p27","N","p9")
	pat.rightPoint("p28","p26",(pat.distance("p26","p1")-pat.distance("p10","p8")-waist/2.0)/3.0*2.0);
	pat.midPoint("p29","p26","p28")
	pat.teeIntersectionPoint("p30","p29",-90.0,"E","F")
	pat.teeIntersectionPoint("p31","p29",90.0,"G","H")
	pat.leftPoint("p32","p30",bust/24.0);
	pat.rightPoint("p33","p30",bust/24.0);
	pat.midPoint("p34","p28","p10")
	pat.leftPoint("p35","p34",(pat.distance("p26","p1")-pat.distance("p10","p8")-waist/2.0)/6.0);
	pat.rightPoint("p36","p34",(pat.distance("p26","p1")-pat.distance("p10","p8")-waist/2.0)/6.0);
	pat.teeIntersectionPoint("p37","p34",-90.0,"E","F")
	pat.leftPoint("p38","p37",1.0 *scale);
	pat.rightPoint("p39","p37",1.0 *scale);
	pat.leftPoint("p40","G",2.0 *scale);
	pat.leftPoint("p41","E",bust/16.0);
	pat.intersectionPoint("p42","p40","p41","D","C")
	pat.rightPoint("p43","p42",1.0 *scale);
	pat.rightPoint("p44","p40",9.0 *scale);
	pat.rightPoint("p45","p43",5.0 *scale);
	pat.rightPoint("p46","p45",(pat.distance("p43","p26")-waist/2.0)/2.0);
	pat.rightPoint("p47","p46",2.5 *scale);
	pat.rightPoint("p48","p47",(pat.distance("p43","p26")-waist/2.0)/2.0);
	pat.midPoint("p49","p45","p46")
	pat.midPoint("p50","p47","p48")
	pat.midPoint("p51","p44","N")
	pat.alongPoint("p52","p44","p49",4.0 *scale);
	pat.alongPoint("p53","p51","p50",3.0 *scale);
	pat.intersectionPoint("p54","p44","p49","E","F")
	pat.intersectionPoint("p55","p51","p50","E","F")
	pat.leftPoint("p56","p54",(pat.distance("p41","p33")+pat.distance("p32","p39")+pat.distance("p38","p13")+pat.distance("p12","p14")-hips)/4.0);
	pat.rightPoint("p57","p54",(pat.distance("p41","p33")+pat.distance("p32","p39")+pat.distance("p38","p13")+pat.distance("p12","p14")-hips)/4.0);
	pat.leftPoint("p58","p55",(pat.distance("p41","p33")+pat.distance("p32","p39")+pat.distance("p38","p13")+pat.distance("p12","p14")-hips)/4.0);
	pat.rightPoint("p59","p55",(pat.distance("p41","p33")+pat.distance("p32","p39")+pat.distance("p38","p13")+pat.distance("p12","p14")-hips)/4.0);

	pat.upPoint("p60","C",frontLength);
	pat.circleLineIntersectionPoint("p61","p20","p60",neck,0);
	pat.alongPoint("p62","p43","p41",10.0 *scale);
	pat.alongPoint("p63","p45","p56",8.0 *scale);
	pat.alongPoint("p64","p46","p57",8.0 *scale);
	pat.alongPoint("p65","p47","p58",6.5 *scale);
	pat.alongPoint("p66","p48","p59",6.5 *scale);
	pat.alongPoint("p67","p26","p33",4.0 *scale);
	pat.alongPoint("p68","p28","p32",4.0 *scale);
	pat.alongPoint("p69","p35","p39",5.0 *scale);
	pat.alongPoint("p70","p36","p38",5.0 *scale);
	pat.alongPoint("p71","p10","p13",7.0 *scale);
	pat.alongPoint("p72","p8","p71",7.0 *scale);
	pat.alongPoint("p73","p1","p14",8.0 *scale);
	pat.extendPoint("p74","p35","p27",3.0 *scale);
	pat.printPoints();
	pat.line("A","B");
	pat.line("J","K");
	pat.line("G","H");
	pat.line("C","D");
	pat.line("E","F");
	pat.line("A","E");
	pat.line("B","F");
	pat.line("P","N");
	pat.line("M","L");
	pat.line("p2","p1");
	pat.displacedQuad("p2","p6",pat.distance("p2","p6")/2.0,0.4 *scale);
	pat.line("p6","p4");
	pat.line("p4","p7");
	pat.fittedQuad("p7","p9","p8");
	pat.line("p18","p17");
	pat.line("p26","p8");
	pat.line("p43","p26");
	pat.line("p45","p52");
	pat.line("p46","p52");
	pat.line("p53","p47");
	pat.line("p53","p48");
	pat.fittedQuad("p61","p23","p40");
	pat.line("p31","p26");
	pat.line("p31","p28");
	pat.line("p35","p74");
	pat.line("p10","p9");
	pat.displacedQuad("p74","p36",12.3 *scale,0.8 *scale);
	pat.line("p22","p20");
	pat.fittedQuad("p22","p24","p31");
	pat.displacedQuad("p40","p43",pat.distance("p40","p43")/2.0,-0.6 *scale);
	pat.displacedQuad("p16","p9",pat.distance("p16","p9")/2.0,0.4 *scale);
	pat.displacedQuad("p16","p74",pat.distance("p16","p74")/2.0,0.6 *scale);
	pat.line("p73","p72");
	pat.line("p72","p70");
	pat.line("p69","p68");
	pat.line("p67","p66");
	pat.line("p65","p64");
	pat.line("p63","p62");
	pat.displacedQuad("p74","p31",pat.distance("p74","p31")/2.0,0.9 *scale);
	pat.displacedQuad("p20","p61",6.0 *scale,2.6 *scale);
	pat.line("p10","p71");
	pat.line("p8","p71");
	pat.line("p1","p73");
	pat.line("p71","p71");
	pat.line("p36","p69");
	pat.line("p35","p70");
	pat.line("p28","p68");
	pat.line("p26","p67");
	pat.line("p48","p66");
	pat.line("p47","p65");
	pat.line("p46","p64");
	pat.line("p45","p63");
	pat.line("p43","p62");
	displaydistance(document);
}
makePattern(true);

wireUpScale(document);
wireUpControl(document, 'backLength');
wireUpControl(document, 'backWidth');
wireUpControl(document, 'bust');
wireUpControl(document, 'chestWidth');
wireUpControl(document, 'frontLength');
wireUpControl(document, 'hipDepth');
wireUpControl(document, 'hips');

wireUpControl(document, 'sideHeight');
wireUpControl(document, 'waist');
wireUpControl(document, 'neck');
wireUpControl(document, 'waist');
wireUpDistance(document);
