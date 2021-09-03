pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var hanches=document.getElementById('hanchesSlider').value*scale;
var hauteurBras=document.getElementById('hauteurBrasSlider').value*scale;
var hauteurPinces=document.getElementById('hauteurPincesSlider').value*scale;
var longueurDevant=document.getElementById('longueurDevantSlider').value*scale;
var longueurDos=document.getElementById('longueurDosSlider').value*scale;
var poitrine=document.getElementById('poitrineSlider').value*scale;
var taille=document.getElementById('tailleSlider').value*scale;
pat.addPoint("p1",21.5 *scale,14.1 *scale)
pat.rightPoint("p2","p1",poitrine/2.0-4.0 *scale);
pat.downPoint("p3","p1",longueurDos/2.0);
pat.rightPoint("p4","p3",taille/2.0-2.0 *scale);
pat.alongPoint("p5","p3","p4",3.0 *scale);
pat.teeIntersectionPoint("p6","p5",90.0,"p1","p2")
pat.upPoint("p7","p6",4.0 *scale);
pat.downPoint("p8","p3",15.0 *scale);
pat.angleAngleIntersectionPoint("p9","p8",0.0,"p4",-90.0)
pat.rightPoint("p10","p2",6.0 *scale);
pat.rightPoint("p11","p10",poitrine/10.0);
pat.midPoint("p15","p10","p11")
pat.displacementPoint("p12","p15",-taille/20.0,pat.distance("p1","p3"));
pat.displacementPoint("p15a","p15",taille/20.0,pat.distance("p1","p3"));
pat.downPoint("p14","p15a",1.0 *scale);
pat.displacementPoint("p16","p15",pat.distance("p11","p15"),pat.distance("p1","p8"));
pat.angleAngleIntersectionPoint("p17","p9",0.0,"p15",-90.0)
pat.leftPoint("p18","p16",hanches/6.0);
pat.rightPoint("p19","p15a",5.5 *scale);
pat.rightPoint("p20","p19",3.0 *scale);
pat.midPoint("p20a","p19","p20")
pat.displacementPoint("p21","p20a",-hanches/20.0,pat.distance("p3","p8"));
pat.displacementPoint("p23","p20a",hanches/20.0,pat.distance("p3","p8"));
pat.addPoint("f1",93.3 *scale,14.0 *scale)
pat.leftPoint("f2","f1",poitrine-pat.distance("p1","p2")-pat.distance("p10","p11"));
pat.downPoint("f3","f2",pat.distance("p11","p14"));
pat.alongPoint("f4","f3","f2",pat.distance("f1","f2")/10.0);
pat.upPoint("f5","f2",pat.distance("f4","f3"));
pat.displacementPoint("f6","f5",poitrine/10.0,-1.0 *scale);
pat.displacementPoint("f7","f1",-poitrine/10.0,-3.0 *scale);
pat.downPoint("f8","f1",pat.distance("f2","f3")+pat.distance("p3","p8"));
pat.leftPoint("f9","f8",hanches/10.0);
pat.teeIntersectionPoint("f3a","f3",0.0,"f1","f8")
pat.intersectionPoint("f10","f4","f3a","f6","f9")
pat.leftPoint("f9a","f9",0.5 *scale);

pat.teeIntersectionPoint("f3a","f3",0.0,"f1","f8")

pat.rightPoint("f10a","f10",1.0 *scale);
var waistremainder=taille-(pat.distance("p3","p4")+pat.distance("p12","p14")+pat.distance("f3a","f10a"));

pat.circleLineIntersectionPoint("f11","f10","f4",waistremainder,180.0);


pat.parallelPoint("f13","f3a","f4","f9a",hanches-pat.distance("p8","p9")-pat.distance("p18","p16")-pat.distance("p21","p23"));
pat.teeIntersectionPoint("f14","f7",-90.0,"f3a","f4")
pat.rightPoint("f15","f1",6.0 *scale);
pat.downPoint("f16","f15",pat.distance("f7","f14"));
pat.rightPoint("f17","f15",poitrine/20.0);
pat.leftPoint("f18","f15",1.7 *scale);
pat.upPoint("p22","f1",1.5 *scale);
pat.rightPoint("p23a","f6",1.0 *scale);
pat.extendPoint("p24","p19","p21",3.0 *scale);
pat.extendPoint("p25","p20","p23",3.0 *scale);
pat.extendPoint("p26","p14","p16",3.0 *scale);
pat.downPoint("p27","p18",3.0 *scale);
pat.extendPoint("p28","p4","p9",3.0 *scale);
pat.midPoint("p29","p5","p4")
pat.leftPoint("p30","p29",1.5 *scale);
pat.rightPoint("p31","p29",1.5 *scale);
pat.downPoint("p32","p30",pat.distance("p3","p8")+1.0 *scale);
pat.downPoint("p33","p31",pat.distance("p3","p8")+1.0 *scale);
pat.teeIntersectionPoint("p34","p5",-90.0,"p8","p9")
pat.rightPoint("p35","p7",pat.distance("p6","p2")*2.0/3.0);
pat.printPoints();
//shapes.ImageShapenot supported at this point
//shapes.ImageShapenot supported at this point
pat.line("f18","f17");
pat.line("f18","f16");
pat.line("f17","f16");
pat.line("f7","f14");
pat.line("p22","f8");
pat.line("f8","f9");
pat.line("f9a","f10");

pat.line("f6","f10");
pat.line("f9a","f13");
pat.displacedQuad("f11","f13",pat.distance("f11","f13")/2.0,-(0.9 *scale));
pat.line("f5","f11");
pat.line("f5","f6");
pat.displacedQuad("p23a","f7",pat.distance("p23a","f7")/2.0,-(-1.0 *scale));
pat.line("f7","p22");
pat.line("p24","p25");
pat.displacedQuad("p20","p25",pat.distance("p20","p25")/2.0,-(-0.3 *scale));
pat.displacedQuad("p19","p24",pat.distance("p19","p24")/2.0,-(0.5 *scale));
pat.line("p19","p20");
pat.fittedQuad("p12","p18","p27");
pat.line("p15a","p26");
pat.line("p27","p26");
pat.line("p15a","p11");
pat.line("p12","p10");
pat.line("p2","p4");
pat.line("p4","p28");
pat.line("p28","p33");
pat.line("p33","p31");
pat.line("p31","p30");
pat.line("p30","p32");
pat.line("p23a", "f10a");
pat.line("f10a", "f9");
pat.line("p32","p34");
pat.line("p7","p34");
pat.line("p7","p35");
pat.line("p35","p2");
pat.line("p10","p11");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'hanches');
wireUpControl(document,'hauteurBras');
wireUpControl(document,'hauteurPinces');
wireUpControl(document,'longueurDevant');
wireUpControl(document,'longueurDos');
wireUpControl(document,'poitrine');
wireUpControl(document,'taille');
wireUpDistance(document);
