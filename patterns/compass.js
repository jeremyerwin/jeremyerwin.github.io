pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var unit=document.getElementById('unitSlider').value*scale;
pat.addPoint("A",14.02 *scale,10.47 *scale);


// pat.directionPoint("NORTH","A",90.0,unit);
// pat.directionPoint("EAST","A",0.0,unit);
// pat.directionPoint("SOUTH","A",-90.0,unit);
// pat.directionPoint("WEST","A",-180.0,unit);
// pat.directionPoint("SE","A",-45.0,unit);
// pat.directionPoint("SW","A",-135.0,unit);
// pat.directionPoint("NW","A",135.0,unit);
// pat.directionPoint("NE","A",45.0,unit);
// 

pat.directionPoint("NORTH","A",90.0,unit);
pat.directionPoint("EAST","A",0.0,unit);
pat.directionPoint("SOUTH","A",-90.0,unit);
pat.directionPoint("WEST","A",-180.0,unit);
pat.directionPoint("SE","A",-45.0,unit);
pat.directionPoint("SW","A",-135.0,unit);
pat.directionPoint("NW","A",135.0,unit);
pat.directionPoint("NE","A",45.0,unit);

pat.printPoints();
pat.line("A","NORTH");
pat.line("A","NE");
pat.line("A","EAST");
pat.line("A","SE");
pat.line("A","SOUTH");
pat.line("A","SW");
pat.line("A","WEST");
pat.line("A","NW");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'unit');
wireUpDistance(document);
