pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var apexDepth=document.getElementById('apexDepthSlider').value*scale;
var armHeight=document.getElementById('armHeightSlider').value*scale;
var backLength=document.getElementById('backLengthSlider').value*scale;
var balancePoint=document.getElementById('balancePointSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var diagonalBack=document.getElementById('diagonalBackSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var hips=document.getElementById('hipsSlider').value*scale;
var totalBackLength=document.getElementById('totalBackLengthSlider').value*scale;
var totalFrontLength=document.getElementById('totalFrontLengthSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
pat.addPoint("A",19.8 *scale,13.1 *scale)
pat.downPoint("B","A",backLength);
pat.downPoint("C","B",14.3 *scale);
pat.midPoint("D","A","B")
pat.rightPoint("E","D",bust/2.0*0.8);
pat.rightPoint("F","B",balancePoint);
pat.rightPoint("G","C",17.0 *scale);
pat.alongPoint("H","F","E",armHeight-2.0 *scale);
pat.upPoint("I","D",5.0 *scale);
pat.rightPoint("J","I",3.0 *scale);
pat.angleAngleIntersectionPoint("K","B",0.0,"J",-90.0)
pat.angleAngleIntersectionPoint("L","J",-90.0,"C",0.0)
pat.midPoint("M","K","F")
pat.teeIntersectionPoint("N","M",-90.0,"L","G")
pat.rightPoint("R","E",11.7 *scale);
pat.angleAngleIntersectionPoint("S","C",0.0,"R",-90.0)
pat.leftPoint("T","R",bust/10.0);
pat.displacementPoint("U","R",bust/10.0,2.0 *scale);
pat.displacementPoint("V","R",-waist/10.0,pat.distance("D","B"));
pat.displacementPoint("X","R",waist/10.0,pat.distance("D","B"));
pat.rightPoint("Z","S",bust/10.0);
pat.leftPoint("Y","Z",hips/4.0);
pat.addPoint("A2",39.0 *scale,59.0 *scale)
pat.downPoint("C2","A2",frontLength);
pat.alongPoint("D2","A2","C2",apexDepth);
pat.downPoint("E2","C2",totalFrontLength-frontLength);
pat.leftPoint("F2","D2",bust/2.0*4.0/5.0);
pat.leftPoint("G2","C2",waist-pat.distance("B","F")-pat.distance("V","X")+1.0 *scale);
pat.upPoint("I2","G2",2.0 *scale);
pat.alongPoint("J2","D2","F2",bust/10.0);
pat.rightPoint("K2","F2",bust/10.0);
pat.leftPoint("L2","E2",2.0 *scale);
pat.directionPoint("M2","L2",-179.0,0.5 *scale);
pat.leftPoint("N2","C2",2.0 *scale);
pat.midPoint("LL","G2","C2")
pat.rightPoint("MM","LL",0.9 *scale);
pat.addPoint("Mc",49.5 *scale,110.5 *scale)
pat.downPoint("Nc","Mc",pat.distance("B","C"));
pat.leftPoint("Oc","Nc",hips/10.0);
pat.rightPoint("Pc","Nc",hips/10.0);
pat.leftPoint("Md","Mc",1.5 *scale);
pat.rightPoint("Me","Mc",1.5 *scale);
pat.rightPoint("T2","C2",10.4 *scale);
pat.upPoint("S2","T2",pat.distance("N2","J2"));
pat.leftPoint("P2","S2",bust/10.0);
pat.rightPoint("R2","S2",bust/10.0);
pat.upPoint("XX","C2",36.0 *scale);
pat.leftPoint("Ma","M",1.5 *scale);
pat.rightPoint("Mb","M",1.5 *scale);
pat.teeIntersectionPoint("Na","Ma",-90.0,"L","N")
pat.teeIntersectionPoint("Nb","Mb",-90.0,"N","G")
pat.directionPoint("Ja","J",1.0,6.0 *scale);
pat.midPoint("Jb","Ja","H")
pat.extendPoint("Za","X","Z",2.0 *scale);
pat.downPoint("Xa","X",2.0 *scale);
pat.downPoint("HHH","D2",2.0 *scale);
pat.alongPoint("F2a","I2","F2",pat.distance("X","U"));
pat.downPoint("L2a","E2",2.0 *scale);
pat.leftPoint("M2a","L2a",2.0 *scale);
pat.leftPoint("H2","E2",hips-pat.distance("L","Na")-pat.distance("Nb","G")-pat.distance("Y","Z")-pat.distance("Oc","Pc"));
pat.alongPoint("O2","I2","H2",pat.distance("X","Z"));
pat.upPoint("NNN","M2a",2.0 *scale);
pat.midPoint("OOO","L2a","M2a")
pat.printPoints();
//shapes.ImageShapenot supported at this point
pat.line("L","J");
pat.displacedQuad("J","Ja",pat.distance("J","Ja")/2.0,-(-0.4 *scale));
pat.displacedQuad("Ja","Jb",pat.distance("Ja","Jb")/2.0,-(-0.3 *scale));
pat.displacedQuad("Jb","H",pat.distance("Jb","H")/2.0,-(0.4 *scale));
pat.line("H","F");
pat.displacedQuad("F","G",pat.distance("F","G")/2.0,-(-0.7 *scale));
pat.line("G","Nb");
pat.line("Nb","Mb");
pat.line("Mb","Ma");
pat.line("Ma","Na");
pat.line("Na","L");
pat.line("T","V");
pat.displacedQuad("V","Y",pat.distance("V","Y")/2.0,-(0.3 *scale));
pat.line("Xa","Za");
pat.fittedQuad("Za","S","Y");
pat.displacedQuad("T","U",pat.distance("T","U")/2.0,-(0.5 *scale));
pat.line("U","Xa");
pat.line("Md","Me");
pat.line("Md","Oc");
pat.line("Me","Pc");
pat.line("Pc","Oc");
pat.line("Md","Me");
pat.line("P2","T2");
pat.line("T2","R2");
pat.line("R2","P2");
pat.displacedQuad("F2a","K2",pat.distance("F2a","K2")/2.0,-(-0.3 *scale));
pat.displacedQuad("K2","J2",pat.distance("K2","J2")/2.0,-(-0.5 *scale));
pat.displacedQuad("J2","HHH",pat.distance("J2","HHH")/2.0,-(-0.3 *scale));
pat.line("HHH","C2");
pat.line("J2","N2");
pat.line("F2a","I2");
pat.line("I2","G2");
pat.displacedQuad("G2","O2",pat.distance("I2","O2")/2.0,-(0.2 *scale));
pat.line("NNN","O2");
pat.line("LL","K2");
pat.line("K2","MM");
pat.line("LL","OOO");
pat.line("MM","OOO");
pat.line("NNN","M2a");
pat.line("M2a","L2a");
pat.line("C2","L2a");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'apexDepth');
wireUpControl(document,'armHeight');
wireUpControl(document,'backLength');
wireUpControl(document,'balancePoint');
wireUpControl(document,'bust');
wireUpControl(document,'diagonalBack');
wireUpControl(document,'frontLength');
wireUpControl(document,'hips');
wireUpControl(document,'totalBackLength');
wireUpControl(document,'totalFrontLength');
wireUpControl(document,'waist');
wireUpDistance(document);
