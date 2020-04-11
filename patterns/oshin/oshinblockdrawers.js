/**
 *
 */
pat=new Pattern();
pat.document=document;
var makePattern = function() {

     pat.paper.clear();
     scale=pat.scale;

	var scale=document.getElementById('scaleSlider').value;
	var garmentLength=document.getElementById('drawersLengthSlider').value*scale;
	var hips=document.getElementById('hipSlider').value*scale;
	pat.addPoint("C",100,400)
	pat.rightPoint("D","C",hips/2.0+5.0 *scale);
	pat.downPoint("R","C",garmentLength);
	pat.angleAngleIntersectionPoint("S","R",0.0,"D",-90.0)
	pat.downPoint("T","D",hips/2.0+hips/8.0);
	pat.rightPoint("p1","T",hips/8.0);
	pat.leftPoint("p2","D",hips/16.0);
	pat.leftPoint("p3","S",hips/8.0);
	pat.upPoint("p4","C",hips/16.0);
	pat.rightPoint("p5","p1",hips/8.0);
	pat.extendPoint("p6","p5","D",hips/8.0*1.5);
	pat.alongPoint("p7","p2","S",hips/8.0*3.0);
	pat.alongPoint("p8","D","p5",hips/8.0*1.5);
        printPoints();
	pat.line("p4","R");
	pat.line("R","p3");
	pat.displacedQuad("p1","p3",distance("p1","p3")/2.0,-3.5 *scale);
	pat.line("C","p2");
	pat.line("p4","p6");
	pat.displacedQuad("p7","p1",distance("p7","p1")/2.0,-2.5 *scale);
	pat.line("p6","p8");
	pat.displacedQuad("p8","p1",distance("p8","p1")/2.0,2.0 *scale);
	pat.line("p2","p7");
    displaydistance(document);
}
wireUpScale(document);
wireUpControl(document,'hip');
wireUpControl(document,'drawersLength');
wireUpDistance(document);

makePattern(true);
