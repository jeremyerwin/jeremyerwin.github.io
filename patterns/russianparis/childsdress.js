pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var backLength=document.getElementById('backLengthSlider').value*scale;
var backWidth=document.getElementById('backWidthSlider').value*scale;
var chestWidth=document.getElementById('chestWidthSlider').value*scale;
var dressLength=document.getElementById('dressLengthSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var mainMeasure=document.getElementById('mainMeasureSlider').value*scale;
var sideHeight=document.getElementById('sideHeightSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
pat.addPoint("А",46.1 *scale,11.7 *scale)
pat.displacementPoint("К","А",1.0 *scale,backLength);
pat.downPoint("Б","А",backLength+10.0 *scale);
pat.displacementPoint("Д","К",-1.0 *scale,-sideHeight-mainMeasure/8.0);
pat.rightPoint("Е","Д",backWidth);
pat.rightPoint("Ж","А",mainMeasure/8.0);
pat.upPoint("З","Е",mainMeasure/8.0);
pat.downPoint("N","Е",mainMeasure/16.0);
pat.displacementPoint("М","N",mainMeasure/16.0,0.0 *scale);
pat.rightPoint("И","К",8.0 *scale);
pat.displacementPoint("Л","И",2.0 *scale,10.0 *scale);
pat.alongPoint("p11","К","Б",dressLength-backLength);
pat.alongPoint("p12","И","Л",dressLength-backLength);
pat.addPoint("А2",96.0 *scale,16.5 *scale)
pat.downPoint("Б2","А2",frontLength);
pat.downPoint("В2","А2",mainMeasure/8.0);
pat.downPoint("Г2","В2",mainMeasure/8.0);
pat.leftPoint("О2","Г2",mainMeasure/4.0);
pat.rightPoint("С2","Г2",mainMeasure/4.0);
pat.alongPoint("Н2","О2","В2",1.0 *scale);
pat.alongPoint("Р","Н2","В2",pat.distance("Ж","З"));
pat.upPoint("Д2","Б2",sideHeight+mainMeasure/8.0);
pat.angleAngleIntersectionPoint("К2","О2",-90.0,"Д2",-180.0)
pat.downPoint("Т2","К2",mainMeasure/8.0);
pat.angleAngleIntersectionPoint("Ц2","Т2",-90.0,"Б2",-180.0)
pat.leftPoint("Л2","К2",mainMeasure/8.0);
pat.angleAngleIntersectionPoint("Ч2","Л2",-90.0,"Ц2",-180.0)
pat.rightPoint("И2","К2",mainMeasure/8.0);
pat.alongPoint("p28","И2","Д2",4.0 *scale);
pat.rightPoint("Й2","И2",14.0 *scale);
pat.intersectionPoint("Х2","Ч2","Б2","С2","Й2")
pat.midPoint("Щ2","Ц2","Б2")
pat.leftPoint("а2","Щ2",2.6 *scale);
pat.rightPoint("б2","Щ2",(pat.distance("Ч2","Х2")+pat.distance("К","И")-waist-3.0 *scale)/2.0);
pat.rightPoint("Ш2","Т2",mainMeasure/16.0);
pat.extendPoint("д2","Ш2","Щ2",25.0 *scale);
pat.downPoint("У2","Л2",mainMeasure/16.0);
pat.alongPoint("М2","У2","Ч2",pat.distance("М","И"));
pat.displacementPoint("Э2","М2",-3.0 *scale,10.0 *scale);
pat.alongPoint("p39","Й2","Х2",39.1 *scale);
pat.displacementPoint("p40","Э2",-1.0 *scale,12.0 *scale);
pat.printPoints();
//shapes.ImageShapenot supported at this point
//shapes.ImageShapenot supported at this point
pat.line("А","Д");
pat.line("А","Ж");
pat.line("Ж","З");
pat.fittedQuad("З","Е","М");
pat.displacedQuad("М","И",pat.distance("М","И")/2.0,-(0.9 *scale));
pat.line("Д","К");
pat.line("К","Б");
pat.line("И","Л");
pat.fittedQuad("М2","Э2","p40");
pat.fittedQuad("p40","д2","p39");
pat.line("p39","С2");
pat.displacedQuad("С2","Р",pat.distance("С2","Р")/2.0,-(-1.1 *scale));
pat.line("Р","Н2");
pat.displacedQuad("Н2","И2",pat.distance("Н2","И2")/2.0,-(-0.1 *scale));
pat.displacedQuad("И2","Т2",pat.distance("И2","Т2")/2.0,-(-1.1 *scale));
pat.displacedQuad("Т2","У2",pat.distance("Т2","У2")/2.0,-(-0.5 *scale));
pat.line("У2","М2");
pat.displacedQuad("p11","p12",pat.distance("p11","p12")/2.0,-(0.3 *scale));
pat.line("Ш2","а2");
pat.line("Ш2","б2");
pat.line("б2","д2");
pat.line("а2","д2");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'backLength');
wireUpControl(document,'backWidth');
wireUpControl(document,'chestWidth');
wireUpControl(document,'dressLength');
wireUpControl(document,'frontLength');
wireUpControl(document,'mainMeasure');
wireUpControl(document,'sideHeight');
wireUpControl(document,'waist');
wireUpDistance(document);
