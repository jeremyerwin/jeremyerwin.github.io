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
	var pantaloonLength = document.getElementById('pantaloonLengthSlider').value * scale;
	var sleeveLength = document.getElementById('sleeveLengthSlider').value * scale;
	var sleeveWidth = document.getElementById('sleeveWidthSlider').value * scale;
	var thighs = document.getElementById('thighsSlider').value * scale;
	var waist = document.getElementById('waistSlider').value * scale;
	pat.addPoint("A", 16.2 * scale, 9.6 * scale)
	pat.rightPoint("B", "A", bust);
	pat.downPoint("C", "A", backLength);
	pat.angleAngleIntersectionPoint("D", "B", -90.0, "C", 0.0);
	pat.downPoint("E", "C", hipDepth);
	pat.angleAngleIntersectionPoint("F", "D", -90.0, "E", 0.0);
	pat.midPoint("G", "A", "C")
	pat.angleAngleIntersectionPoint("H", "B", -90.0, "G", 0.0);
	pat.alongPoint("J", "A", "G", pat.distance("A", "G") / 3.0);
	pat.angleAngleIntersectionPoint("K", "B", -90.0, "J", 0.0);
	pat.leftPoint("L", "H", backWidth);
	pat.angleAngleIntersectionPoint("M", "L", -90.0, "B", -180.0);
	pat.rightPoint("N", "G", chestWidth);
	pat.angleAngleIntersectionPoint("P", "A", 0.0, "N", 90.0);
	pat.downPoint("Q", "C", thighs / 2.0 + hips / 8.0);
	pat.rightPoint("R", "Q", hips);
	pat.downPoint("S", "C", pantaloonLength);
	pat.angleAngleIntersectionPoint("T", "S", 0.0, "R", -90.0)
	pat.leftPoint("p1", "D", 1.0 * scale);
	pat.leftPoint("p2", "B", bust / 8.0);
	pat.upPoint("p3", "p2", 1.0 * scale);
	pat.downPoint("p4", "M", 3.0 * scale);
	pat.leftPoint("p5", "p1", 7.0 * scale);
	pat.leftPoint("p6", "p5", 2.0 * scale);
	pat.downPoint("p7", "p4", 6.0 * scale);
	pat.arcCenterPoint("p8", "p5", "p7", 2.5 * scale);
	pat.circleLSIntersectionPoint("p9", "p8", "G", "H", pat.distance("p8", "p5"));
	pat.rightPoint("p10", "J", bust / 4.0);
	pat.upPoint("p11", "p10", bust / 4.0);
	pat.midPoint("p12", "p11", "p10")
	pat.circleLineIntersectionPoint("p13", "p11", "p12", pat.distance("p3", "p4"), 0.0);
	pat.upPoint("p14", "C", frontLength);
	pat.leftPoint("p15", "E", bust / 16.0);
	pat.intersectionPoint("p16", "p15", "G", "C", "D")
	pat.teeIntersectionPoint("p17", "p14", 0.0, "p15", "G")
	pat.rightPoint("p18", "G", 11.0 * scale);
	pat.rightPoint("p19", "p16", 9.0 * scale);
	pat.perpendicularBisectorPoint("p20", "p6", "p5", hipDepth);
	pat.midPoint("p21", "G", "H")
	pat.teeIntersectionPoint("p22", "p21", -90.0, "C", "D")
	pat.teeIntersectionPoint("p23", "p21", -90.0, "E", "F")
	pat.leftPoint("p24", "p23", (hips - pat.distance("p15", "F")) / 2.0);
	pat.rightPoint("p25", "p23", (hips - pat.distance("p15", "F")) / 2.0);
	pat.leftPoint("p26", "p22", (pat.distance("p16", "p6") - (waist - pat.distance("p1", "p5"))) / 4.0);
	pat.rightPoint("p27", "p22", (pat.distance("p16", "p6") - (waist - pat.distance("p1", "p5"))) / 4.0);
	pat.rightPoint("p28", "p19", (pat.distance("p16", "p6") - (waist - pat.distance("p1", "p5"))) / 2.0);
	pat.midPoint("p29", "p19", "p28")
	pat.intersectionPoint("p30", "p18", "p29", "p15", "F")
	pat.alongPoint("p31", "p18", "p30", 5.5 * scale);
	pat.leftPoint("p32", "S", hips / 16.0);
	pat.leftPoint("p33", "Q", 1.5 * hips / 8.0);
	pat.rightPoint("p34", "R", hips / 8.0 * 1.5);
	pat.rightPoint("p35", "T", hips / 16.0);
	pat.intersectionPoint("p36", "p26", "p25", "p27", "p24")
	pat.midPoint("p37", "P", "N")
	pat.rightPoint("p38", "E", hips);
	pat.teeIntersectionPoint("p39", "p38", 90.0, "p36", "p5")
	pat.printPoints();
	//shapes.ImageShapenot supported at this point
	pat.line("A", "B");
	pat.line("J", "K");
	pat.line("G", "A");
	pat.line("C", "D");
	pat.line("E", "F");
	pat.line("A", "E");
	pat.line("B", "F");
	pat.line("P", "N");
	pat.line("p32", "p35");
	pat.displacedQuad("p33", "p32", pat.distance("p33", "p32") / 2.0, -(-1.0 * scale));
	pat.displacedQuad("p34", "p35", pat.distance("p34", "p35") / 2.0, -(1.0 * scale));
	pat.displacedQuad("p11", "p17", pat.distance("p11","p17")/2, -(-1.5 * scale));
	pat.line("p11", "p13");
	pat.fittedQuad("p13", "p37", "p21");
	pat.displacedQuad("p7", "p21", pat.distance("p7","p21")/2, -(-2.5 * scale));
	pat.line("p7", "M");
	pat.line("p4", "p3");
	pat.displacedQuad("p3", "B", pat.distance("p3","B")/2, -(0.5 * scale));
	pat.line("B", "p1");
	pat.fittedQuad("p7", "p9", "p5");
	pat.line("p5", "p20");
	pat.line("p6", "p20");
	pat.line("p1", "F");
	pat.fittedQuad("p7", "p9", "p6");
	pat.line("p21", "p27");
	pat.line("p27", "p24");
	pat.line("p26", "p25");
	pat.line("p26", "p21");
	pat.line("p31", "p28");
	pat.line("p31", "p19");
	pat.line("p19", "p30");
	pat.line("p30", "p28");
	pat.line("p17", "p15");
	pat.displacedQuad("p39", "p36", pat.distance("p39","p36")/2, -(1.0 * scale));
	pat.displacedQuad("p39", "p34", pat.distance("p39","p34")/2, -(-2.0 * scale));
	pat.displacedQuad("p15", "p33", pat.distance("p15", "p33") / 2.0, -(-1.5 * scale));
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
wireUpControl(document, 'pantaloonLength');
wireUpControl(document, 'sleeveLength');
wireUpControl(document, 'sleeveWidth');
wireUpControl(document, 'thighs');
wireUpControl(document, 'waist');
wireUpDistance(document);
