/**
 * version 1.0
 */

var paper=Raphael("container",2000,2000);
var scale=15;
var points= new Map();
var makePattern=function(withPoints){
	paper.clear();
    points= new Map();

	//var scale=document.getElementById('scaleSlider').value;
	var bust=document.getElementById('bustSlider').value*scale;
	var hipDepth=document.getElementById('hipDepthSlider').value*scale;
	var hips=document.getElementById('hipSlider').value*scale;


	var reduction=3.0*scale;
	var sideHeight=document.getElementById('sideHeightSlider').value*scale;
	var waist=document.getElementById('waistSlider').value*scale;
    setDocumentScale(scale);
	addPoint("G",100,100)
    rightPoint("H","G",bust-reduction);
    downPoint("C","G",sideHeight);
    angleAngleIntersectionPoint("D","C",0.0,"H",-90.0)
    downPoint("E","C",hipDepth);
    angleAngleIntersectionPoint("F","E",0.0,"H",-90.0)
    leftPoint("p1","D",7.0 *scale);
    leftPoint("p3","H",9.0 *scale);
    leftPoint("p2","p1",1.5 *scale);
    leftPoint("p4","p2",((waist-reduction)/2.0-distance("p1","D"))/2.0);
    leftPoint("p5","p4",((bust-waist)/2.0-1.5 *scale)/3.0);
    leftPoint("p6","p5",((waist-reduction)/2.0-distance("p1","D"))/2.0);
    leftPoint("p7","p6",distance("p5","p4")*2.0);
    rightPoint("p8","C",3.0 *scale);
    rightPoint("p9","p8",(distance("C","p7")-(waist-reduction)/2.0)/3.0);
    rightPoint("p10","p9",2.5 *scale);
    rightPoint("p11","p10",distance("p8","p9"));
    rightPoint("p12","p11",2.5 *scale);
    rightPoint("p13","p12",distance("p8","p9"));
    displacementPoint("p14","G",5.0 *scale,3.0 *scale);
    rightPoint("p15","E",4.0 *scale);
    leftPoint("p16","p15",distance("p8","p9")/4.0);
    rightPoint("p17","p15",distance("p8","p9")/4.0);
    perpendicularBisectorPoint("p18","p6","p7",sideHeight);
    perpendicularBisectorPoint("p19","p6","p7",-hipDepth);
    perpendicularBisectorPoint("p20","p4","p5",-hipDepth);
    perpendicularBisectorPoint("p21","p1","p2",-hipDepth);
    perpendicularBisectorPoint("p22","p13","p12",-hipDepth);
    teeIntersectionPoint("p23","p5",90.0,"G","H")
    rightPoint("p24","p14",distance("p8","p9")+2.5 *scale);
    rightPoint("p25","p24",distance("p8","p9")+2.5 *scale);
    rightPoint("p26","p15",distance("p8","p9")+2.5 *scale);
    leftPoint("p27","p26",distance("p10","p11")/4.0);
    rightPoint("p28","p26",distance("p10","p11")/4.0);
    leftPoint("p29","p21",0.5 *scale);
    rightPoint("p30","p21",0.5 *scale);
    leftPoint("p31","p19",(hips-(bust-distance("p10","p11"))-1.0 *scale)/3.0);
    rightPoint("p32","p19",(hips-(bust-distance("p10","p11"))-1.0 *scale)/3.0);
    leftPoint("p33","p20",(hips-(bust-distance("p10","p11"))-1.0 *scale)/6.0);
    rightPoint("p34","p20",(hips-(bust-distance("p10","p11"))-1.0 *scale)/6.0);
    upPoint("p35","G",1.0 *scale);
    upPoint("p36","p14",4.0 *scale);
    angleAngleIntersectionPoint("p37","G",0.0,"p24",90.0)
    downPoint("p38","p18",4.0 *scale);
    downPoint("p39","p23",3.0 *scale);
    downPoint("p40","p3",1.5 *scale);
    leftPoint("p41","H",3.0 *scale);
    downPoint("p42","G",6.0 *scale);
    downPoint("p43","p14",4.0 *scale);
    downPoint("p44","p24",5.5 *scale);
    downPoint("p45","p25",6.5 *scale);
    downPoint("p46","p18",10.0 *scale);
    downPoint("p47","p23",8.0 *scale);
    downPoint("p48","p3",6.0 *scale);
    downPoint("p49","H",5.0 *scale);
    leftPoint("p50","p49",3.0 *scale);
    upPoint("p51","p26",2.0 *scale);
    upPoint("p52","p22",4.0 *scale);
    upPoint("p53","p19",6.0 *scale);
    upPoint("p54","p20",4.0 *scale);
    upPoint("p55","p21",1.5 *scale);
    leftPoint("p56","F",5.0 *scale);
    upPoint("p57","E",1.0 *scale);
    upPoint("p58","p15",3.5 *scale);
    upPoint("p59","p26",6.0 *scale);
    upPoint("p60","p22",8.0 *scale);
    upPoint("p61","p19",10.0 *scale);
    upPoint("p62","p20",8.0 *scale);
    upPoint("p63","p21",5.0 *scale);
    upPoint("p64","F",3.0 *scale);
    leftPoint("p65","p64",5.0 *scale);
    leftPoint("p66","p36",1.0 *scale);
    rightPoint("p67","p36",1.0 *scale);
    leftPoint("p68","p37",1.0 *scale);
    rightPoint("p69","p37",1.0 *scale);
    downPoint("p70","p36",9.0 *scale);
    downPoint("p71","p37",8.0 *scale);
    if(withPoints)
    {
        printPoints();
    }
    line("G","E");
    line("E","F");
    line("G","H");
    line("p14","p8");
    line("p14","p9");
    line("p16","p8");
    line("p9","p17");
    line("p24","p10");
    line("p24","p11");
    line("p10","p27");
    line("p11","p28");
    line("p25","p12");
    line("p25","p13");
    line("p12","p22");
    line("p13","p22");
    line("p18","p7");
    line("p18","p6");
    line("p6","p31");
    line("p7","p32");
    line("p23","p5");
    line("p5","p34");
    line("p4","p33");
    line("p23","p4");
    line("p3","p2");
    line("p2","p30");
    line("p1","p29");
    displacedQuad("p3","p1",distance("p3","p1")/2.0,-0.6 *scale);
    line("H","F");
    line("p35","p36");
    line("p36","p37");
    line("p37","p25");
    line("p25","p38");
    line("p38","p39");
    line("p39","p40");
    line("p40","p41");
    line("p41","H");
    line("p42","p43");
    line("p43","p44");
    line("p44","p45");
    line("p45","p46");
    line("p46","p47");
    line("p47","p48");
    line("p48","p50");
    line("p50","p50");
    line("p50","p49");
    line("p15","p51");
    line("p51","p52");
    line("p52","p53");
    line("p53","p54");
    line("p54","p55");
    line("p55","p56");
    line("p64","p65");
    line("p65","p63");
    line("p63","p62");
    line("p62","p61");
    line("p61","p60");
    line("p63","p63");
    line("p60","p59");
    line("p59","p58");
    line("p58","p57");
    line("p14","p36");
    line("p24","p37");
    line("p8","p70");
    line("p70","p67");
    line("p66","p70");
    line("p70","p9");
    line("p68","p44");
    line("p71","p69");
    line("p71","p10");
    line("p71","p11");
    line("p35","p57");
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
