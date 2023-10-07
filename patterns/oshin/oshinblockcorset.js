/**
 * version 1.0
 */

var paper=Raphael("container",2000,2000);
var scale=15;
var points= new Map();
var makePattern=function(){
	pat.paper.clear();
    scale=pat.scale;

	//var scale=document.getElementById('scaleSlider').value;
	var bust=document.getElementById('bustSlider').value*scale;
	var hipDepth=document.getElementById('hipDepthSlider').value*scale;
	var hips=document.getElementById('hipSlider').value*scale;


	var reduction=3.0*scale;
	var sideHeight=document.getElementById('sideHeightSlider').value*scale;
	var waist=document.getElementById('waistSlider').value*scale;
    setDocumentScale(scale);
	pat.addPoint("G",100,100)
    pat.rightPoint("H","G",bust-reduction);
    pat.downPoint("C","G",sideHeight);
    pat.angleAngleIntersectionPoint("D","C",0.0,"H",-90.0)
    pat.downPoint("E","C",hipDepth);
    pat.angleAngleIntersectionPoint("F","E",0.0,"H",-90.0)
    pat.leftPoint("p1","D",7.0 *scale);
    pat.leftPoint("p3","H",9.0 *scale);
    pat.leftPoint("p2","p1",1.5 *scale);
    pat.leftPoint("p4","p2",((waist-reduction)/2.0-pat.distance("p1","D"))/2.0);
    pat.leftPoint("p5","p4",((bust-waist)/2.0-1.5 *scale)/3.0);
    pat.leftPoint("p6","p5",((waist-reduction)/2.0-pat.distance("p1","D"))/2.0);
    pat.leftPoint("p7","p6",pat.distance("p5","p4")*2.0);
    pat.rightPoint("p8","C",3.0 *scale);
    pat.rightPoint("p9","p8",(pat.distance("C","p7")-(waist-reduction)/2.0)/3.0);
    pat.rightPoint("p10","p9",2.5 *scale);
    pat.rightPoint("p11","p10",pat.distance("p8","p9"));
    pat.rightPoint("p12","p11",2.5 *scale);
    pat.rightPoint("p13","p12",pat.distance("p8","p9"));
    pat.displacementPoint("p14","G",5.0 *scale,3.0 *scale);
    pat.rightPoint("p15","E",4.0 *scale);
    pat.leftPoint("p16","p15",pat.distance("p8","p9")/4.0);
    pat.rightPoint("p17","p15",pat.distance("p8","p9")/4.0);
    pat.perpendicularBisectorPoint("p18","p6","p7",sideHeight);
    pat.perpendicularBisectorPoint("p19","p6","p7",-hipDepth);
    pat.perpendicularBisectorPoint("p20","p4","p5",-hipDepth);
    pat.perpendicularBisectorPoint("p21","p1","p2",-hipDepth);
    pat.perpendicularBisectorPoint("p22","p13","p12",-hipDepth);
    pat.teeIntersectionPoint("p23","p5",90.0,"G","H")
    pat.rightPoint("p24","p14",pat.distance("p8","p9")+2.5 *scale);
    pat.rightPoint("p25","p24",pat.distance("p8","p9")+2.5 *scale);
    pat.rightPoint("p26","p15",pat.distance("p8","p9")+2.5 *scale);
    pat.leftPoint("p27","p26",pat.distance("p10","p11")/4.0);
    pat.rightPoint("p28","p26",pat.distance("p10","p11")/4.0);
    pat.leftPoint("p29","p21",0.5 *scale);
    pat.rightPoint("p30","p21",0.5 *scale);
    pat.leftPoint("p31","p19",(hips-(bust-pat.distance("p10","p11"))-1.0 *scale)/3.0);
    pat.rightPoint("p32","p19",(hips-(bust-pat.distance("p10","p11"))-1.0 *scale)/3.0);
    pat.leftPoint("p33","p20",(hips-(bust-pat.distance("p10","p11"))-1.0 *scale)/6.0);
    pat.rightPoint("p34","p20",(hips-(bust-pat.distance("p10","p11"))-1.0 *scale)/6.0);
    pat.upPoint("p35","G",1.0 *scale);
    pat.upPoint("p36","p14",4.0 *scale);
    pat.angleAngleIntersectionPoint("p37","G",0.0,"p24",90.0)
    pat.downPoint("p38","p18",4.0 *scale);
    pat.downPoint("p39","p23",3.0 *scale);
    pat.downPoint("p40","p3",1.5 *scale);
    pat.leftPoint("p41","H",3.0 *scale);
    pat.downPoint("p42","G",6.0 *scale);
    pat.downPoint("p43","p14",4.0 *scale);
    pat.downPoint("p44","p24",5.5 *scale);
    pat.downPoint("p45","p25",6.5 *scale);
    pat.downPoint("p46","p18",10.0 *scale);
    pat.downPoint("p47","p23",8.0 *scale);
    pat.downPoint("p48","p3",6.0 *scale);
    pat.downPoint("p49","H",5.0 *scale);
    pat.leftPoint("p50","p49",3.0 *scale);
    pat.upPoint("p51","p26",2.0 *scale);
    pat.upPoint("p52","p22",4.0 *scale);
    pat.upPoint("p53","p19",6.0 *scale);
    pat.upPoint("p54","p20",4.0 *scale);
    pat.upPoint("p55","p21",1.5 *scale);
    pat.leftPoint("p56","F",5.0 *scale);
    pat.upPoint("p57","E",1.0 *scale);
    pat.upPoint("p58","p15",3.5 *scale);
    pat.upPoint("p59","p26",6.0 *scale);
    pat.upPoint("p60","p22",8.0 *scale);
    pat.upPoint("p61","p19",10.0 *scale);
    pat.upPoint("p62","p20",8.0 *scale);
    pat.upPoint("p63","p21",5.0 *scale);
    pat.upPoint("p64","F",3.0 *scale);
    pat.leftPoint("p65","p64",5.0 *scale);
    pat.leftPoint("p66","p36",1.0 *scale);
    pat.rightPoint("p67","p36",1.0 *scale);
    pat.leftPoint("p68","p37",1.0 *scale);
    pat.rightPoint("p69","p37",1.0 *scale);
    pat.downPoint("p70","p36",9.0 *scale);
    pat.downPoint("p71","p37",8.0 *scale);
    pat.printPoints();
    pat.line("G","E");
    pat.line("E","F");
    pat.line("G","H");
    pat.line("p14","p8");
    pat.line("p14","p9");
    pat.line("p16","p8");
    pat.line("p9","p17");
    pat.line("p24","p10");
    pat.line("p24","p11");
    pat.line("p10","p27");
    pat.line("p11","p28");
    pat.line("p25","p12");
    pat.line("p25","p13");
    pat.line("p12","p22");
    pat.line("p13","p22");
    pat.line("p18","p7");
    pat.line("p18","p6");
    pat.line("p6","p31");
    pat.line("p7","p32");
    pat.line("p23","p5");
    pat.line("p5","p34");
    pat.line("p4","p33");
    pat.line("p23","p4");
    pat.line("p3","p2");
    pat.line("p2","p30");
    pat.line("p1","p29");
    pat.displacedQuad("p3","p1",pat.distance("p3","p1")/2.0,-0.6 *scale);
    pat.line("H","F");
    pat.line("p35","p36");
    pat.line("p36","p37");
    pat.line("p37","p25");
    pat.line("p25","p38");
    pat.line("p38","p39");
    pat.line("p39","p40");
    pat.line("p40","p41");
    pat.line("p41","H");
    pat.line("p42","p43");
    pat.line("p43","p44");
    pat.line("p44","p45");
    pat.line("p45","p46");
    pat.line("p46","p47");
    pat.line("p47","p48");
    pat.line("p48","p50");
    pat.line("p50","p50");
    pat.line("p50","p49");
    pat.line("p15","p51");
    pat.line("p51","p52");
    pat.line("p52","p53");
    pat.line("p53","p54");
    pat.line("p54","p55");
    pat.line("p55","p56");
    pat.line("p64","p65");
    pat.line("p65","p63");
    pat.line("p63","p62");
    pat.line("p62","p61");
    pat.line("p61","p60");
    pat.line("p63","p63");
    pat.line("p60","p59");
    pat.line("p59","p58");
    pat.line("p58","p57");
    pat.line("p14","p36");
    pat.line("p24","p37");
    pat.line("p8","p70");
    pat.line("p70","p67");
    pat.line("p66","p70");
    pat.line("p70","p9");
    pat.line("p68","p44");
    pat.line("p71","p69");
    pat.line("p71","p10");
    pat.line("p71","p11");
    pat.line("p35","p57");
    displaydistance(document);

}

wireUpScale(document);

wireUpControl(document,'waist');
wireUpControl(document,'hip');
wireUpControl(document,'sideHeight');
wireUpControl(document,'hipDepth');

wireUpControl(document,'bust');

wireUpDistance(document);
makePattern(true);
