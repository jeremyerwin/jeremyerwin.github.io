pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var backLength=document.getElementById('backLengthSlider').value*scale;
var mainMeasure=document.getElementById('mainMeasureSlider').value*scale;
var sideHeight=document.getElementById('sideHeightSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
pat.addPoint("А",13.8 *scale,20.0 *scale)
pat.downPoint("p41","А",41.0 *scale);
pat.upPoint("p23","p41",23.0 *scale);
pat.upPoint("Б","p23",mainMeasure/8.0);
pat.rightPoint("В","А",mainMeasure/16.0);
pat.rightPoint("p16","Б",mainMeasure/3.0);
pat.leftPoint("Д","p16",mainMeasure/32.0);
pat.upPoint("Ж","Д",mainMeasure/8.0);
pat.rightPoint("Г","p41",2.0 *scale);
pat.rightPoint("И","Г",3.0 *scale);
pat.midPoint("О","Д","И")
pat.perpendicularBisectorPoint("p2","Д","И",2.0 *scale);
pat.displacementPoint("К","А",-1.0 *scale,1.0 *scale);
pat.rightPoint("М","И",mainMeasure/16.0);
pat.rightPoint("Л","М",mainMeasure/8.0);
pat.downPoint("З","Д",mainMeasure/8.0);
pat.rightPoint("Р","З",mainMeasure/16.0);
pat.downPoint("p10","p41",10.0 *scale);
pat.downPoint("Ф","И",10.0 *scale);
pat.downPoint("Х","М",10.0 *scale);
pat.downPoint("Ч","Л",10.0 *scale);
pat.rightPoint("p21","Ф",2.0 *scale);
pat.leftPoint("p22","Х",2.0 *scale);
pat.alongPoint("p23a","И","p21",5.3 *scale);
pat.alongPoint("p24","М","p22",5.1 *scale);
pat.rightPoint("p25","Ч",2.0 *scale);
pat.alongPoint("p26","Л","p25",4.4 *scale);
pat.alongPoint("p27","Г","p10",7.8 *scale);
pat.rightPoint("f43","Л",49.9 *scale);
pat.upPoint("В2","f43",43.0 *scale);
pat.downPoint("Г2","В2",mainMeasure/8.0);
pat.upPoint(" f23","f43",sideHeight);
pat.upPoint("Б2"," f23",mainMeasure/8.0);
pat.leftPoint("Д2","Г2",mainMeasure/4.0);
pat.extendPoint("Е2","Д2","В2",mainMeasure/32.0);
pat.alongPoint("Ж2","Е2","Д2",pat.distance("В","Ж"));
pat.rightPoint("И2","Г2",1.5*mainMeasure/8.0+1.0 *scale);
pat.leftPoint("б2","Б2",mainMeasure/8.0);
pat.leftPoint("а2","б2",mainMeasure/16.0);
pat.midPoint("в2","б2","а2")
pat.leftPoint("К2","а2",mainMeasure/8.0);
pat.downPoint("Ы2","К2",mainMeasure/16.0);
pat.leftPoint("Л2","К2",mainMeasure/8.0);
pat.angleAngleIntersectionPoint("М2","f43",-180.0,"К2",-90.0)
pat.leftPoint("П2","М2",7.0 *scale);
pat.rightPoint("f32"," f23",(mainMeasure-10.0 *scale)/3.0);
pat.leftPoint("Р2","f32",mainMeasure/3.0*2.0+0.5 *scale);
pat.intersectionPoint("у3","М2","f43","И2","f32")
pat.alongPoint("д3","у3","И2",1.0 *scale);
pat.leftPoint("f4","д3",4.0 *scale);
pat.leftPoint("е3","f4",5.0 *scale);
pat.midPoint("щ3","е3","f4")
pat.alongPoint("f16","щ3","В2",16.0 *scale);
pat.leftPoint("f2","е3",2.0 *scale);
pat.leftPoint("х3","f2",pat.distance("е3","f4")*1.5);
pat.midPoint("ш3","х3","f2")
pat.circleCircleIntersectionPoint("ф3","f16",6.5 *scale,"ш3",16.0 *scale,false);
pat.downPoint("к3","х3",1.5 *scale);
pat.downPoint("ц3","к3",2.0 *scale);
pat.upPoint("Ч3","М2",mainMeasure/16.0);
pat.alongPoint("f9","ц3","Ч3",9.0 *scale);
pat.angleAngleIntersectionPoint("н2","Р2",0.0,"М2",90.0)
pat.extendPoint("Ѳ3","f16","щ3",10.0 *scale);
pat.rightPoint("к3","Ѳ3",2.5 *scale);
pat.leftPoint("л3","Ѳ3",2.5 *scale);
pat.leftPoint("м3","л3",2.0 *scale);
pat.leftPoint("н3","м3",7.5 *scale);
pat.alongPoint("С2","Л2","н2",2.5 *scale);
pat.alongPoint("т3","Р2","С2",1.5 *scale);
pat.displacementPoint("о3","П2",-3.0 *scale,10.0 *scale);
pat.displacementPoint("р3","f9",-3.0 *scale,10.0 *scale);
pat.extendPoint("f72","f32","у3",11.0 *scale);
pat.alongPoint("f73","П2","о3",4.1 *scale);
pat.alongPoint("f75","f9","р3",3.5 *scale);
pat.leftPoint("О2","М2",1.0 *scale);
pat.displacementPoint("м3","О2",3.0 *scale,10.0 *scale);
pat.alongPoint("f76","О2","м3",3.0 *scale);
pat.midPoint("f77","ф3","х3")
pat.midPoint("f78","ф3","f2")
pat.midPoint("f79","f16","е3")
pat.midPoint("p80","f16","f4")
pat.printPoints();
//shapes.ImageShapenot supported at this point
//shapes.ImageShapenot supported at this point
pat.fittedQuad("Д","p2","И");
pat.displacedQuad("Ж","Д",pat.distance("Ж","Д")/2.0,-(0.4 *scale));
pat.line("В","Ж");
pat.displacedQuad("В","К",pat.distance("В","К")/2.0,-(-0.5 *scale));
pat.line("К","Г");
pat.displacedQuad("p24","p26",pat.distance("p24","p26")/2.0,-(-0.5 *scale));
pat.line("Л","p26");
pat.line("М","p24");
pat.line("И","p23a");
pat.displacedQuad("p27","p23a",pat.distance("p27","p23a")/2.0,-(-0.3 *scale));
pat.line("p27","Г");
pat.line("И2","у3");
pat.displacedQuad("Ы2","f9",pat.distance("Ы2","p9")/2.0,-(-0.9 *scale));
pat.displacedQuad("Ж2","в2",pat.distance("Ж2","в2")/2.0,-(-1.0 *scale));
pat.displacedQuad("в2","Ы2",pat.distance("в2","Ы2")/2.0,-(-2.0 *scale));
pat.line("Е2","Ж2");
pat.displacedQuad("Е2","И2",pat.distance("Е2","И2")/2.0,-(1.1 *scale));
pat.line("f4","к3");
pat.line("л3","е3");
pat.line("м3","f2");
pat.line("ц3","н3");
pat.line("х3","ц3");
pat.line("f72","у3");
pat.line("f72","к3");
pat.line("f75","н3");
pat.line("f9","f75");
pat.displacedQuad("f73","f76",pat.distance("f73","f76")/2.0,-(-0.1 *scale));
pat.line("f73","П2");
pat.displacedQuad("т3","П2",12.4 *scale,-(1.0 *scale));
pat.displacedQuad("н2","О2",pat.distance("н2","О2")/2.0,-(0.9 *scale));
pat.displacedQuad("т3","н2",pat.distance("т3","н2")/2.0,-(0.4 *scale));
pat.displacedQuad("p16","Р",3.4 *scale,-(0.6 *scale));
pat.displacedQuad("Р","Л",pat.distance("Р","Л")/2.0,-(0.8 *scale));
pat.displacedQuad("ф3","f77",pat.distance("ф3","f77")/2.0,-(-0.4 *scale));
pat.displacedQuad("f77","х3",pat.distance("f77","х3")/2.0,-(0.2 *scale));
pat.displacedQuad("ф3","f78",pat.distance("ф3","f78")/2.0,-(0.5 *scale));
pat.displacedQuad("f78","f2",pat.distance("f78","f2")/2.0,-(-0.4 *scale));
pat.displacedQuad("f79","е3",pat.distance("f79","е3")/2.0,-(0.5 *scale));
pat.displacedQuad("f16","f79",pat.distance("f16","f79")/2.0,-(-0.4 *scale));
pat.displacedQuad("f16","p80",pat.distance("f16","p80")/2.0,-(0.5 *scale));
pat.displacedQuad("p80","f4",pat.distance("p80","f4")/2.0,-(-0.5 *scale));
pat.fittedQuad("p16","О","М");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'backLength');
wireUpControl(document,'mainMeasure');
wireUpControl(document,'sideHeight');
wireUpControl(document,'waist');
wireUpDistance(document);
