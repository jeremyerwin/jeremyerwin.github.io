var paper=Raphael("container",5000,5000);
var scale=15;
var points= new Map();
var makePattern=function(){
paper.clear()
    myMeasurements={}
var armLength1=document.getElementById('armLength1Slider').value*scale;
var backLength=document.getElementById('backLengthSlider').value*scale;
var backWidth=document.getElementById('backWidthSlider').value*scale;
var bust=document.getElementById('bustSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var hips=document.getElementById('hipsSlider').value*scale;
var waist=document.getElementById('waistSlider').value*scale;
addPoint("A",5*scale, 2*scale);
rightPoint("B","A",backWidth/2.0+bust/12.0+11.0 *scale);
downPoint("C","B",backLength);
angleAngleIntersectionPoint("D","A",-90.0,"C",-180.0)
extendPoint("Ca","B","C",11.0 *scale);
teeIntersectionPoint("Da","Ca",-180.0,"A","D")
alongPoint("E","D","A",armLength1);
teeIntersectionPoint("R","E",0.0,"B","C")
alongPoint("L","A","D",bust/16.0+1.0 *scale);
teeIntersectionPoint("M","L",0.0,"B","C")
alongPoint("X","L","E",6.0 *scale);
teeIntersectionPoint("Y","X",0.0,"B","C")
alongPoint("Xa","X","E",distance("X","E")/2.0+0.5 *scale);
teeIntersectionPoint("Ya","Xa",0.0,"B","Ca")
displacementPoint("S","D",2.0 *scale,-1.0 *scale);
intersectionPoint("Aa","A","S","Xa","Ya")
displacementPoint("P","A",bust/16.0,-1.0 *scale);
alongPoint("U","L","M",backWidth/2.0+2.0 *scale);
alongPoint("Pa","U","P",3.0 *scale);
displacementPoint("N","U",-1.0 *scale,distance("L","X"));
    if(waist>75.0)    {
        rightPoint("O","S",4.0 *scale);
    }
    else if(waist>65.0){
        rightPoint("O","S",3.5 *scale);
    }else{
        
        rightPoint("O","S",3.0 *scale);
    }
leftPoint("Db","Da",1.0 *scale);
displacementPoint("T","Db",hips/12.0-1.0 *scale,-4.0 *scale);
leftPoint("I","Ya",bust/12.0-3.0 *scale);
leftPoint("H","C",1.0 *scale);
leftPoint("J","H",waist/10.0);
displacementPoint("preG","J",-hips/24.0+distance("J","H")/2.0-2.0 *scale,distance("Ca","C"));
alongPoint("G","J","preG",6.5 *scale);
displacementPoint("preW","J",hips/24.0+distance("J","H")/2.0,distance("Ca","C"));
alongPoint("W","H","preW",6.0 *scale);
rightPoint("Na","N",4.0 *scale);
displacementPoint("Ia","Na",2.0 *scale,distance("Y","Ya"));
displacementPoint("Oa","O",10.0 *scale,1.03 *scale);
rightPoint("Ja","Oa",waist/10.0);
displacementPoint("preTa","Ja",-distance("Oa","Ja")/2.0-hips/24.0-2.0 *scale,distance("Ca","C"));
alongPoint("Ta","Oa","preTa",distance("O","T"));
displacementPoint("preGa","Oa",distance("Oa","Ja")/2.0+hips/24.0,distance("Ca","C"));
alongPoint("Ga","Ja","preGa",distance("J","G"));
displacementPoint("fA","B",20 *scale,1.0 *scale);
rightPoint("fB","fA",bust/2.0-backWidth/2.0-bust/12.0);
downPoint("fC","fB",frontLength);
angleAngleIntersectionPoint("D","fA",-90.0,"fC",-180.0)
extendPoint("fCa","fB","fC",17.0 *scale);
teeIntersectionPoint("fDa","fCa",-180.0,"fA","D")
alongPoint("fR","D","fA",(frontLength-backLength)/2.0+armLength1);
teeIntersectionPoint("fE","fR",0.0,"fB","fC")
alongPoint("fL","fA","D",bust/16.0-3.0 *scale);
teeIntersectionPoint("fM","fL",0.0,"fB","fC")
alongPoint("fX","fR","fA",bust/16.0);
teeIntersectionPoint("fY","fX",0.0,"fC","fB")
alongPoint("fJ","fR","D",bust/16.0);
teeIntersectionPoint("fS","fJ",0.0,"fB","fC")
alongPoint("fV","fY","fX",bust/8.0);
alongPoint("fP","fB","fA",bust/16.0+1.0 *scale);
circleLineIntersectionPoint("fU", "fP", "fL", distance("P", "U") - 0.5 * scale, 0);

alongPoint("fPa","fU","fM",3.0 *scale);
alongPoint("fYa","fY","fX",bust/5.0);
alongPoint("fRa","fR","fA",4.0 *scale);
alongPoint("fpreH","fRa","D",distance("R","H"));
leftPoint("fH","fpreH",5.0 *scale);
alongPoint("fCb","fC","fCa",3.0 *scale);
alongPoint("fO","fCb","fH",2.0 *scale);
alongPoint("fN","fCa","fDa",1.0 *scale);
teeIntersectionPoint("fSa","fV",-90.0,"fJ","fS")
alongPoint("fJa","fSa","fJ",0.5 *scale);
alongPoint("fK","fO","fH",4.0 *scale);
leftPoint("fG","fN",3.0 *scale);
alongPoint("fF","fG","fK",3.0 *scale);
alongPoint("fKa","fK","fH",(distance("S","O")+distance("J","H")+distance("Ja","Oa")+distance("fH","fO"))-waist/2.0);
alongPoint("fGa","fG","fDa",distance("fK","fKa")+2.0 *scale);
alongPoint("fFa","fGa","fKa",5.0 *scale);

leftPoint("fpreW","D",3.0/32.0*hips+10.0 *scale);
alongPoint("fW","fH","fpreW",distance("H","W"));
printPoints();
//shapes.ImageShapenot supported at this point
//shapes.ImageShapenot supported at this point
line("Aa","S");
displacedQuad("Pa","Aa",distance("Pa","Aa")/2.0,1.2 *scale);
line("Pa","U");
displacedQuad("N","O",distance("N","O")/2.0,-2.0 *scale);
line("S","Db");
line("Db","T");
line("O","T");
displacedQuad("I","R",distance("I","R")/2.0,-0.3 *scale);
displacedQuad("R","H",distance("R","H")/2.0,-0.5 *scale);
displacedQuad("I","J",distance("I","J")/2.0,-0.5 *scale);
displacedQuad("J","G",distance("J","G")/2.0,-0.5 *scale);
line("G","W");
displacedQuad("H","W",distance("H","W")/2.0,0.2 *scale);
displacedQuad("Na","Ia",distance("Na","Ia")/2.0,-0.3 *scale);
displacedQuad("Ia","Ja",distance("Ia","Ja")/2.0,-0.5 *scale);
displacedQuad("Ta","Oa",distance("Ta","Oa")/2.0,0.5 *scale);
displacedQuad("Ja","Ga",distance("Ja","Ga")/2.0,0.5 *scale);
line("Ta","Ga");
displacedQuad("Na","Oa",distance("Na","Oa")/2.0,-2.0 *scale);
displacedQuad("U","N",distance("U","N")/2.0,-0.5 *scale);
displacedQuad("fYa","fRa",distance("fYa","fRa")/2.0,1.0 *scale);
displacedQuad("fRa","fH",distance("fRa","fH")/2.0,0.7 *scale);
line("fO","fN");
line("fO","fS");
displacedQuad("fV","fS",distance("fV","fS")/2.0,-0.5 *scale);
displacedQuad("fSa","fK",distance("fSa","fK")/2.0,0.5 *scale);
line("fF","fN");
line("fK","fF");
displacedQuad("fKa","fJa",distance("fKa","fJa")/2.0,0.5 *scale);
line("fKa","fFa");
line("fV","fJa");
line("fV","fSa");
line("fU","fPa");
displacedQuad("fU","fYa",distance("fU","fYa")/2.0,0.5 *scale);
line("fW","fFa");
line("fV","fPa");
displacedQuad("fW","fH",distance("fW","fH")/2.0,0.5 *scale);
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'armLength1');
wireUpControl(document,'backLength');
wireUpControl(document,'backWidth');
wireUpControl(document,'bust');
wireUpControl(document,'frontLength');
wireUpControl(document,'hips');
wireUpControl(document,'waist');
wireUpDistance(document);
