pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var armHoleDiam=document.getElementById('armHoleDiamSlider').value*scale;
var hemWidth=document.getElementById('hemWidthSlider').value*scale;
var sleeveHeadLength=document.getElementById('sleeveHeadLengthSlider').value*scale;
var sleeveLength=document.getElementById('sleeveLengthSlider').value*scale;
var sleeveWidth=document.getElementById('sleeveWidthSlider').value*scale;
pat.addPoint("p0",25.0 *scale,4.0 *scale)
pat.downPoint("p1","p0",sleeveLength);
pat.alongPoint("p3","p0","p1",sleeveHeadLength);
pat.alongPoint("p4","p3","p1",pat.distance("p3","p1")/2.0-2.0 *scale);
pat.rightPoint("p5","p0",sleeveWidth);
pat.alongPoint("p6","p0","p5",pat.distance("p0","p5")/2.0+1.0 *scale);
pat.alongPoint("p7","p3","p0",armHoleDiam/4.0);
pat.downPoint("p8","p5",armHoleDiam/4.0+0.5 *scale);
pat.leftPoint("p9","p3",armHoleDiam/3.0);
pat.alongPoint("p10","p9","p3",sleeveWidth*2.0);
pat.perpendicularBisectorPoint("p11","p8","p6",1.0 *scale);
pat.midPoint("p12","p0","p6")
pat.midPoint("p13","p12","p7")
pat.perpendicularBisectorPoint("p14","p6","p13",1.0 *scale);
pat.alongPoint("p15","p8","p10",pat.distance("p8","p10")/3.0);
pat.alongPoint("p16","p8","p10",pat.distance("p8","p10")/3.0*2.0);
pat.perpendicularPoint("p17","p11","p15",-(-1.0 *scale));
pat.perpendicularPoint("p18","p11","p16",-(-1.5 *scale));
pat.angleAngleIntersectionPoint("p19","p4",0.0,"p5",-90.0)
pat.angleAngleIntersectionPoint("p20","p1",0.0,"p5",-90.0)
pat.teeIntersectionPoint("p21","p9",-90.0,"p19","p4")
pat.intersectionPoint("p22","p9","p21","p1","p20")
pat.teeIntersectionPoint("p23","p10",-90.0,"p4","p19")
pat.intersectionPoint("p24","p10","p23","p22","p20")
pat.alongPoint("p25","p21","p4",1.5 *scale);
pat.alongPoint("p26","p22","p1",2.0 *scale);
pat.alongPoint("p27","p23","p19",1.5 *scale);
pat.alongPoint("p28","p24","p20",2.0 *scale);
pat.leftPoint("p28","p20",(pat.distance("p25","p27")-hemWidth)/2.0);
pat.rightPoint("p30","p20",(pat.distance("p25","p27")-hemWidth)/2.0);
pat.perpendicularPoint("p31","p28","p19",-(-pat.distance("p19","p27")));
pat.perpendicularPoint("p32","p19","p31",-(-pat.distance("p19","p29")));
pat.printPoints();
//shapes.ImageShapenot supported at this point
pat.fittedQuad("p6","p14","p13");
pat.displacedQuad("p7","p9",pat.distance("p7","p9")/2.0,-(-0.6 *scale));
pat.displacedQuad("p13","p7",pat.distance("p13","p7")/2.0,-(-0.3 *scale));
pat.fittedQuad("p6","p11","p8");
pat.line("p9","p25");
pat.line("p25","p26");
pat.line("p27","p10");
pat.line("p31","p19");
pat.line("p19","p27");
pat.line("p31","p31");
pat.line("p31","p32");
pat.line("p32","p28");
pat.line("p28","p26");
pat.displacedQuad("p8","p17",pat.distance("p8","p17")/2.0,-(-0.2 *scale));
pat.fittedQuad("p17","p18","p10");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'armHoleDiam');
wireUpControl(document,'hemWidth');
wireUpControl(document,'sleeveHeadLength');
wireUpControl(document,'sleeveLength');
wireUpControl(document,'sleeveWidth');
wireUpDistance(document);
