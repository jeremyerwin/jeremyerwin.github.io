pat=new Pattern();

pat.document=document;
var makePattern = function() {

    pat.paper.clear();
    scale=pat.scale;

	pat.addPoint("Ю. Э. Ошин", 16.2 * scale, 9.6 * scale)
	pat.printPoints();
	displaydistance(document);
}
makePattern(true);

wireUpScale(document);
wireUpDistance(document);
