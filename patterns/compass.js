pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
pat.addPoint("origin",53.3 *scale,20.4 *scale)
pat.downPoint("south","origin",20.0 *scale);
pat.upPoint("north","origin",20.0 *scale);
pat.leftPoint("west","origin",20.0 *scale);
pat.rightPoint("east","origin",20.0 *scale);
pat.directionPoint("northwest","origin",135.0,20.0 *scale);
pat.directionPoint("northeast","origin",45.0,20.0 *scale);
pat.directionPoint("southeast","origin",-45.0,20.0 *scale);
pat.directionPoint("southwest","origin",-135.0,20.0 *scale);
pat.printPoints();
pat.line("origin","east");
pat.line("origin","southeast");
pat.line("origin","south");
pat.line("origin","northeast");
pat.line("origin","north");
pat.line("origin","northwest");
pat.line("origin","west");
pat.line("origin","southwest");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpDistance(document);
