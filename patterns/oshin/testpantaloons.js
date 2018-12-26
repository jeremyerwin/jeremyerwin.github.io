pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var backLength=document.getElementById('backLengthSlider').value*scale;
var backWidth=document.getElementById('backWidthSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var chestWidth=document.getElementById('chestWidthSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var garmentLength=document.getElementById('garmentLengthSlider').value*scale;
var hipDepth=document.getElementById('hipDepthSlider').value*scale;
var hips=document.getElementById('hipsSlider').value*scale;
var pantaloonHips=document.getElementById('pantaloonHipsSlider').value*scale;
var pantaloonLength=document.getElementById('pantaloonLengthSlider').value*scale;
var thighs=document.getElementById('thighsSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
pat.addPoint("А",40.2 *scale,23.1 *scale)
pat.rightPoint("В","А",bust);
pat.downPoint("Б2","А",backLength+hipDepth);
pat.angleAngleIntersectionPoint("Г","Б2",0.0,"В",-90.0)
pat.downPoint("а","В",backLength);
pat.angleAngleIntersectionPoint("б","А",-90.0,"а",-180.0)
pat.midPoint("в","В","а")
pat.teeIntersectionPoint("г","в",-180.0,"А","б")
pat.alongPoint("е","А","г",pat.distance("А","г")/3.0);
pat.angleAngleIntersectionPoint("е2","е",0.0,"В",-90.0)
pat.leftPoint("а2","а",1.0 *scale);
pat.leftPoint("ж","В",bust/8.0);
pat.upPoint("ж2","ж",1.0 *scale);
pat.leftPoint("в3","В",backWidth);
pat.downPoint("к","в3",3.0 *scale);
pat.leftPoint("м","а2",7.0 *scale);
pat.leftPoint("м2","м",2.0 *scale);
pat.downPoint("л","к",6.0 *scale);
pat.arcCenterPoint("S","м","л",-2.5 *scale);
pat.circleLSIntersectionPoint("н","S","г","в",pat.distance("S","л"));
pat.rightPoint("о","е",bust/4.0);
pat.upPoint("і","о",bust/4.0);
pat.midPoint("о2","і","о")
pat.circleLineIntersectionPoint("п","і","о2",pat.distance("ж2","к"),0.0);
pat.upPoint("р","б",frontLength);
pat.leftPoint("Б","Б2",bust/16.0);
pat.intersectionPoint("р2","Б","г","р","В")
pat.intersectionPoint("с","а","б","р2","Б")
pat.rightPoint("г3","г",11.0 *scale);
pat.rightPoint("г2","г",18.0 *scale);
pat.rightPoint("с2","с",9.0 *scale);
pat.perpendicularBisectorPoint("у","м","м2",-hipDepth);
pat.midPoint("ц","г","в")
pat.teeIntersectionPoint("ц2","ц",-90.0,"а","м")
pat.teeIntersectionPoint("ф","ц2",-90.0,"Б2","Г")
pat.leftPoint("ч","ф",(hips-pat.distance("Б","Г"))/2.0);
pat.rightPoint("ч2","ф",(hips-pat.distance("Б","Г"))/2.0);
pat.leftPoint("х","ц2",(pat.distance("с","м2")-(waist-pat.distance("а2","м")))/4.0);
pat.rightPoint("х2","ц2",(pat.distance("с","м2")-(waist-pat.distance("а2","м")))/4.0);
pat.rightPoint("т2","с2",(pat.distance("с","м2")-(waist-pat.distance("а2","м")))/2.0);
pat.perpendicularBisectorPoint("т","т2","с2",-hipDepth);
pat.downPoint("Д","б",35.0 *scale);
pat.rightPoint("Е","Д",hips);
pat.downPoint("Ж2","б",60.0 *scale);
pat.leftPoint("Ж","Ж2",bust/16.0);
pat.leftPoint("д","Д",1.5*bust/8.0);
pat.rightPoint("е3","Е",1.5*bust/8.0);
pat.angleAngleIntersectionPoint("З","Е",-90.0,"Ж2",0.0)
pat.rightPoint("З2","З",bust/16.0);
pat.intersectionPoint("XX","х","ч2","х2","ч")
pat.upPoint("YY","г2",9.3 *scale);
pat.alongPoint("ZZ","XX","м2",35.4 *scale);
pat.printPoints();
pat.line("г3","с2");
pat.line("г3","т2");
pat.line("с2","т");
pat.line("т2","т");
pat.line("В","а2");
pat.line("а2","Г");
pat.line("у","м2");
pat.line("в3","л");
pat.line("в3","ж2");
pat.line("Ж","З2");
pat.line("Б","р2");
pat.displacedQuad("п","YY",pat.distance("п","YY")/2.0,-(0.3 *scale));
pat.line("х","ц");
pat.line("ц","х2");
pat.displacedQuad("л","ц",pat.distance("л","ц")/2.0,-(-2.4 *scale));
pat.displacedQuad("YY","ц",pat.distance("YY","ц")/2.0,-(1.8 *scale));
pat.fittedQuad("л","н","м");
pat.displacedQuad("н","м2",pat.distance("н","м2")/2.0,-(-0.5 *scale));
pat.line("х","ч2");
pat.line("х2","ч");
pat.displacedQuad("ZZ","е3",pat.distance("ZZ","е3")/2.0,-(-2.1 *scale));
pat.displacedQuad("е3","З2",pat.distance("е3","З2")/2.0,-(1.0 *scale));
pat.displacedQuad("д","Ж",pat.distance("д","Ж")/2.0,-(-1.7 *scale));
pat.displacedQuad("Б","д",pat.distance("Б","д")/2.0,-(-1.4 *scale));
pat.line("і","п");
pat.line("м","у");
pat.line("XX","ZZ");
pat.displacedQuad("р2","і",pat.distance("р2","і")/2.0,-(2.5 *scale));
pat.displacedQuad("ж2","В",pat.distance("ж2","В")/2.0,-(0.4 *scale));
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'backLength');
wireUpControl(document,'backWidth');
wireUpControl(document,'bust');
wireUpControl(document,'chestWidth');
wireUpControl(document,'frontLength');
wireUpControl(document,'garmentLength');
wireUpControl(document,'hipDepth');
wireUpControl(document,'hips');
wireUpControl(document,'pantaloonHips');
wireUpControl(document,'pantaloonLength');
wireUpControl(document,'thighs');
wireUpControl(document,'waist');
wireUpDistance(document);
