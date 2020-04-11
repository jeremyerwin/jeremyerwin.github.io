pat=new Pattern();

pat.document=document;
var makePattern = function() {

    pat.paper.clear();
    scale=pat.scale;


    var waist=document.getElementById('waistSlider').value*scale;
    pat.addPoint("A",100,200)
    pat.downPoint("B","A",18.0 *scale);
    pat.rightPoint("C","A",waist/2.0+2.0 *scale);
    pat.angleAngleIntersectionPoint("D","B",0.0,"C",-90.0)
    pat.midPoint("E","A","B")
    pat.midPoint("F","C","D")
    pat.leftPoint("p1","C",3.0 *scale);
    pat.circleLSIntersectionPoint("p2","p1","C","D",4.0 *scale);
    pat.downPoint("p3","B",pat.distance("p1","C"));
    pat.extendPoint("p5","p3","p1",waist/2.0);
    pat.perpendicularPoint("p6","p1","p5",4.0 *scale);

    pat.printPoints();


    pat.displacedQuad("p2","B",pat.distance("p2","B")/2.0,2.0 *scale);
    pat.line("p5","p6");
    pat.line("p5","p1");
    pat.line("p2","p6");
    pat.displacedQuad("p1","E",pat.distance("p1","E")/2.0,2.0 *scale);
    displaydistance(document);
}
makePattern(true);

wireUpScale(document);
wireUpControl(document,'waist');
wireUpDistance(document);
