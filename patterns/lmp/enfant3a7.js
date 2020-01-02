pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var backLengh=document.getElementById('backLenghSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var frontWidth=document.getElementById('frontWidthSlider').value*scale;
var shoulderLength=document.getElementById('shoulderLengthSlider').value*scale;
var toElbow=document.getElementById('toElbowSlider').value*scale;
var toWrist=document.getElementById('toWristSlider').value*scale;
var underarmHeight=document.getElementById('underarmHeightSlider').value*scale;
pat.addPoint("A",75 *scale,75 *scale)
pat.rightPoint("B","A",bust/4.0+2.0 *scale);
pat.downPoint("C","A",backLengh+0.5 *scale);
pat.angleAngleIntersectionPoint("D","B",-90.0,"C",0.0)
pat.downPoint("E","A",0.5 *scale);
pat.rightPoint("F","A",frontWidth/3.0);
pat.rightPoint("X","A",frontWidth);
pat.teeIntersectionPoint("Y","X",-90.0,"C","D")
pat.downPoint("G","X",pat.distance("A","F")+1.0 *scale);
pat.alongPoint("G2","F","G",shoulderLength+1.5 *scale);
pat.downPoint("I","B",4.0/5.0*frontWidth);
pat.teeIntersectionPoint("J","I",-180.0,"A","C")
pat.rightPoint("K","J",frontWidth-0.5 *scale);
pat.downPoint("N","B",bust/4.0);
pat.downPoint("O","N",underarmHeight);
pat.rightPoint("fA","B",4.0 *scale);
pat.rightPoint("fB","fA",bust/4.0+2.0 *scale);
pat.downPoint("fC","fA",frontLength);
pat.angleAngleIntersectionPoint("fD","fB",-90.0,"fC",0.0)
pat.downPoint("fE","fB",frontWidth/3.0);
pat.leftPoint("fF","fB",frontWidth/3.0);
pat.leftPoint("fG","fF",pat.distance("F","G2"));
pat.downPoint("fH","fG",pat.distance("X","G")/2.0);
pat.downPoint("fI","fB",4.0/5.0*frontWidth);
pat.teeIntersectionPoint("fJ","fI",-180.0,"fA","fC")
pat.leftPoint("fK","fI",frontWidth);
pat.downPoint("fN","fA",bust/4.0);
pat.downPoint("fO","fN",pat.distance("N","O"));
pat.addPoint("mA",87.0 *scale,15 *scale)
pat.rightPoint("mB","mA",(pat.curvedist("G2","K",0.3 *scale)+pat.curvedist("K","N",1.25 *scale)+pat.curvedist("fN","fK",1.75)+pat.curvedist("fH","fK",0.4 *scale))/2.0);
pat.downPoint("mC","mA",toElbow+pat.distance("mA","mB")/6.0);
pat.angleAngleIntersectionPoint("mD","mB",-90.0,"mC",0.0)
pat.midPoint("mE","mA","mB")
pat.midPoint("mF","mC","mD")
pat.downPoint("mG","mA",pat.distance("mA","mE"));
pat.displacementPoint("mH","mB",1.0 *scale,pat.distance("mA","mB")/6.0);

//pat.circleLineIntersectionPoint("mS","mD","mF",(toWrist-toElbow+1.0 *scale),270.0);
pat.circleLSIntersectionPoint("mS","mD","mF","mE",14*scale);
console.log(pat.points["mS"]);
pat.perpendicularPoint("mSa","mD","mS",-(-25.3 *scale));
pat.intersectionPoint("mi","mA","mC","mS","mSa")
pat.extendPoint("mI","mS","mi",1.0 *scale);
pat.midPoint("mK","mG","mI")
pat.rightPoint("mKa","mK",pat.distance("mA","mB")/4.0);
pat.printPoints();
pat.displacedQuad("E","F",pat.distance("E","F")/2.0,-(0.2 *scale));
pat.line("E","C");
pat.line("C","O");
pat.line("O","N");
pat.displacedQuad("K","N",pat.distance("K","N")/2.0,-(1.25 *scale));
pat.displacedQuad("fH","fK",pat.distance("fH","fK")/2.0,-(-0.4 *scale));
pat.displacedQuad("fK","fN",pat.distance("fK","fN")/2.0,-(-1.75 *scale));
pat.displacedQuad("G2","K",pat.distance("G2","K")/2.0,-(0.3 *scale));
pat.line("fH","fF");
pat.displacedQuad("fF","fE",pat.distance("fF","fE")/2.0,-(1.5 *scale));
pat.line("fE","fD");
pat.line("fD","fO");
pat.line("fN","fO");
pat.line("F","G2");
pat.displacedQuad("mG","mE",pat.distance("mG","mE")/2.0,-(-1.5 *scale));
pat.displacedQuad("mE","mH",pat.distance("mE","mH")/2.0,-(-0.8 *scale));
pat.line("mH","mD");
pat.displacedQuad("mS","mD",pat.distance("mS","mD")/2.0,-(0.9 *scale));
pat.displacedQuad("mG","mKa",pat.distance("mG","mKa")/2.0,-(-0.5 *scale));
pat.displacedQuad("mKa","mI",pat.distance("mKa","mI")/2.0,-(-0.5 *scale));
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'age');
wireUpControl(document,'armhole');
wireUpControl(document,'backLengh');
wireUpControl(document,'bust');
wireUpControl(document,'frontLength');
wireUpControl(document,'frontWidth');
wireUpControl(document,'shoulderLength');
wireUpControl(document,'toElbow');
wireUpControl(document,'toWrist');
wireUpControl(document,'underarmHeight');
wireUpDistance(document);
