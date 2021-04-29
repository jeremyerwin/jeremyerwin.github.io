pat=new Pattern();
pat.document=document;

var makePattern = function() {
    pat.paper.clear();
    scale=pat.scale;
    myMeasurements={}

    var armscyeDepth=document.getElementById('armscyeDepthSlider').value*scale;
    var back=document.getElementById('backSlider').value*scale;
    var bust=document.getElementById('bustSlider').value*scale;
    //var bustpoint=document.getElementById('bustpointSlider').value*scale;
    var chest=document.getElementById('chestSlider').value*scale;
    var dart=document.getElementById('dartSlider').value*scale;
    var napeToWaist=document.getElementById('napeToWaistSlider').value*scale;
    var neck=document.getElementById('neckSlider').value*scale;
    var shoulderLength=document.getElementById('shoulderLengthSlider').value*scale;
    var sizesAbove=document.getElementById('sizesSlider').value;
    var waistToHip=document.getElementById('waistToHipSlider').value*scale;
    pat.addPoint("p0",7.6 *scale,9.8 *scale)
    pat.downPoint("p1","p0",1.5 *scale);
    pat.downPoint("p2","p1",armscyeDepth+2.5 *scale);
    pat.rightPoint("p3","p2",bust/2.0+7.0 *scale);
    pat.upPoint("p4","p3",pat.distance("p0","p2")+sizesAbove*0.5 *scale);
    pat.downPoint("p5","p1",napeToWaist);
    pat.angleAngleIntersectionPoint("p6","p5",0.0,"p4",-90.0)
    pat.downPoint("p7","p5",waistToHip);
    pat.angleAngleIntersectionPoint("p8","p7",0.0,"p6",-90.0)
    pat.rightPoint("p9","p0",neck/5.0-0.2 *scale);
    pat.downPoint("p10","p0",armscyeDepth/5.0-1.0 *scale);
    pat.rightPoint("p10a","p10",25*scale);
    pat.circleLSIntersectionPoint("p11", "p9","p10a","p10", shoulderLength+1.0 *scale);
    //pat.circleLineIntersectionPoint("p11","p9","p10",shoulderLength+1.0 *scale,0.0);
pat.rightPoint("p12","p2",back/2.0+1.0 *scale);
pat.angleAngleIntersectionPoint("p13","p10",0.0,"p12",90.0)
pat.midPoint("p14","p13","p12")
pat.leftPoint("p15","p4",neck/5.0-0.7 *scale);
pat.downPoint("p16","p4",neck/5.0-0.2 *scale);
pat.leftPoint("p17","p15",dart/2.0);
pat.leftPoint("p18","p3",chest/2.0+1.0 *scale+pat.distance("p17","p15")/2.0);
pat.upPoint("p19","p18",pat.distance("p3","p16")/2.0-2.0 *scale);
pat.leftPoint("p20","p3",pat.distance("p3","p18")/2.0);
pat.downPoint("p21","p11",1.5 *scale);
pat.circleLineIntersectionPoint("p23","p17","p21",shoulderLength,0.0);
pat.midPoint("p24","p12","p18")
pat.teeIntersectionPoint("p25","p24",-90.0,"p6","p5")
pat.teeIntersectionPoint("p26","p24",-90.0,"p7","p8")
pat.directionPoint("p12a","p12",315.0,3.5 *scale);
pat.directionPoint("p18a","p18",225.0,3.5 *scale);
pat.printPoints();
pat.displacedQuad("p1","p9",pat.distance("p1","p9")/2.0,-(0.5 *scale));
pat.line("p9","p11");
pat.line("p17","p20");
pat.line("p15","p20");
pat.displacedQuad("p15","p16",pat.distance("p15","p16")/2.0,-(2.0 *scale));
pat.line("p16","p8");
pat.line("p23","p17");
pat.displacedQuad("p11","p14",pat.distance("p11","p14")/2.0,-(0.5 *scale));
pat.fittedQuad("p14","p12a","p24");
pat.fittedQuad("p24","p18a","p19");
pat.displacedQuad("p23","p19",pat.distance("p23","p19")/2.0,-(-0.5 *scale));
pat.line("p1","p7");
pat.line("p7","p8");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'armscyeDepth');
wireUpControl(document,'back');
wireUpControl(document,'bust');
//wireUpControl(document,'bustpoint');
wireUpControl(document,'chest');
wireUpControl(document,'dart');
wireUpControl(document,'napeToWaist');
wireUpControl(document,'neck');
wireUpControl(document,'shoulderLength');
wireUpControl(document,'sizes');
wireUpControl(document,'waistToHip');
wireUpDistance(document);
