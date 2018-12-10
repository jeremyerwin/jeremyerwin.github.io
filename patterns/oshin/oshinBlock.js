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
	var waist = document.getElementById('waistSlider').value * scale;
	var sideHeight= document.getElementById('sideHeightSlider').value * scale;
	pat.addPoint("А", 16.2 * scale, 9.6 * scale); //A
	pat.rightPoint("Б", "А", bust); //B
	pat.downPoint("И", "Б", backLength); //C
	pat.angleAngleIntersectionPoint("З", "А", -90.0, "И", 0.0); //D
	
	pat.downPoint("Л", "И", hipDepth); //E
	pat.angleAngleIntersectionPoint("Ю", "А", -90.0, "Л", 0.0); //F
	pat.upPoint("Ж", "И", sideHeight) //G
	pat.angleAngleIntersectionPoint("Д", "А", -90.0, "Ж", 0.0); //H

	pat.alongPoint("Г", "Б", "Ж", pat.distance("Б", "Ж") / 3.0); //J
	
	pat.angleAngleIntersectionPoint("В", "А", -90.0, "Г", 0.0); //K
	pat.leftPoint("н", "Ж", backWidth); //L
	pat.angleAngleIntersectionPoint("о", "н", -90.0, "Б", -180.0); //M
	pat.rightPoint("т", "Д", chestWidth); //N
	pat.angleAngleIntersectionPoint("М", "А", 0.0, "т", 90.0); 
	pat.angleAngleIntersectionPoint("Н", "Ю", 0.0, "т", 270.0);
	pat.leftPoint("с", "т", bust/8 * 1.5);
	pat.angleAngleIntersectionPoint("р", "А", 0.0, "с", 90.0); //P


	
	pat.printPoints();
	
	pat.line("А", "Б");
	pat.line("Г", "В");
	pat.line("Ж", "Д");
	pat.line("И", "З");
	pat.line("З", "И");
	pat.line("А", "Ю");
	pat.line("Б", "Л");
	pat.line("н", "о");
	pat.line("с", "р");
	pat.line("Ю", "Л");
	pat.line("М", "Н");
	
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
wireUpDistance(document);
