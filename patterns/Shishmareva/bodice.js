pat=new Pattern();
pat.document=document;
var makePattern = function() {
pat.paper.clear();
scale=pat.scale;
    myMeasurements={}
var backWidth=document.getElementById('backWidthSlider').value*scale;
var chestWidth=document.getElementById('chestWidthSlider').value*scale;
var frontLength=document.getElementById('frontLengthSlider').value*scale;
var frontWidth=document.getElementById('frontWidthSlider').value*scale;
var portion=document.getElementById('portionSlider').value*scale/24;
var shoulder=document.getElementById('shoulderSlider').value*scale;
var sideHeight=document.getElementById('sideHeightSlider').value*scale;
pat.addPoint("А",35.0 *scale,3.8 *scale)
pat.downPoint("Б","А",frontLength);
pat.alongPoint("p1","А","Б",portion*6.0);
pat.alongPoint("p3","А","Б",portion*7.5);
pat.rightPoint("p4","p1",portion*6.0);
pat.upPoint("p5","p4",3.0*portion);
pat.leftPoint("p6","p5",portion*1.5);
pat.upPoint("В","p6",1.0 *scale);
pat.alongPoint("Н","В","p5",shoulder);
pat.upPoint("p9","Б",sideHeight);
pat.rightPoint("p10","p9",9.0*portion);
pat.rightPoint("p11","p9",12.0*portion);
pat.upPoint("Г","p10",portion*3.0);
pat.leftPoint("б","Г",frontWidth);
pat.downPoint("в","б",10.0 *scale);
pat.alongPoint("г","Г","в",chestWidth);
pat.upPoint("а","p11",2.0 *scale);
pat.angleAngleIntersectionPoint("д","Б",0.0,"а",-90.0)
pat.intersectionPoint("Д","б","г","д","Б")
pat.rightPoint("p19","Д",5.0 *scale);
pat.rightPoint("p20","p19",5.0 *scale);
pat.midPoint("p21","p19","p20")
pat.alongPoint("p22","p21","В",16.0 *scale);
pat.rightPoint("p23","p20",2.0 *scale);
pat.rightPoint("p24","p23",6.0 *scale);
pat.midPoint("p25","p23","p24")
pat.circleCircleIntersectionPoint("p26","p22",6.5 *scale,"p25",17.4 *scale,true);
pat.rightPoint("н","p24",8.0 *scale);
pat.rightPoint("Е2","д",15.4 *scale);
pat.upPoint("е2","Е2",sideHeight);
pat.rightPoint("к2","Е2",9.0 *scale);
pat.rightPoint("ж2","е2",3.0*portion);
pat.upPoint("з2","ж2",3.0*portion);
pat.alongPoint("p33","з2","е2",2.0 *scale);
pat.extendPoint("ш2","ж2","p33",2.0 *scale);
pat.rightPoint("ж3","к2",35.2 *scale);
pat.upPoint("з3","ж3",sideHeight+3.0*portion);
pat.leftPoint("л3","ж3",2.0 *scale);
pat.alongPoint("Л3","л3","з3",38.0 *scale);
pat.perpendicularPoint("м3","з3","Л3",-(portion*3.0));
pat.leftPoint("и3","з3",backWidth);
pat.upPoint("к3","и3",portion*3.0);
pat.alongPoint("к3","м3","к3",pat.distance("В","Н"));
pat.leftPoint("М3","л3",6.0 *scale);
pat.extendPoint("p44","г","Д",15.0 *scale);
pat.alongPoint("p45","Д","p44",25.0 *scale);
pat.upPoint("p46","н",2.0 *scale);
pat.rightPoint("о2","Е2",3.0 *scale);
pat.downPoint("p48","н",10.0 *scale);
pat.rightPoint("p49","p48",3.0 *scale);
pat.downPoint("p50","p48",10.0 *scale);
pat.rightPoint("p51","p50",3.0*portion);
pat.circleCircleIntersectionPoint("p52","p44",pat.distance("p44","p25"),"p49",pat.distance("p49","p25"),false);
pat.alongPoint("p53","p25","p52",15.0 *scale);
pat.intersectionPoint("p54","p44","p48","p25","p53")
pat.alongPoint("p55","p54","p49",2.0 *scale);
pat.extendPoint("p56","p55","p54",2.0 *scale);
pat.alongPoint("p57","p23","p56",15.6 *scale);
pat.intersectionPoint("p58","p57","p53","p24","p55")
pat.circleCircleIntersectionPoint("p59","p44",pat.distance("p44","p21"),"p49",pat.distance("p49","p21"),false);
pat.intersectionPoint("p60","p21","p59","p44","p49")
pat.perpendicularPoint("p61","p21","p60",-(1.0 *scale));
pat.perpendicularPoint("p62","p21","p60",-(-2.0 *scale));
pat.alongPoint("p63","p21","p60",15.0 *scale);
pat.extendPoint("p64","p20","p61",2.2 *scale);
pat.extendPoint("p65","p19","p62",2.1 *scale);
pat.downPoint("p66","о2",10.0 *scale);
pat.downPoint("p67","к2",9.9 *scale);
pat.downPoint("p68","p66",10.0 *scale);
pat.downPoint("p69","p67",10.0 *scale);
pat.rightPoint("p70","p69",3.0*portion);
pat.rightPoint("p71","p67",3.0 *scale);
pat.leftPoint("p72","p66",3.0 *scale);
pat.leftPoint("p73","p68",3.0*portion);
pat.downPoint("p74","М3",10.0 *scale);
pat.downPoint("p75","л3",10.0 *scale);
pat.downPoint("p76","p74",10.0 *scale);
pat.downPoint("p77","p75",10.0 *scale);
pat.rightPoint("p78","p77",3.0*portion);
pat.leftPoint("p79","p76",3.0*portion);
pat.leftPoint("p80","p74",3.0 *scale);
pat.rightPoint("p81","p75",3.0 *scale);
pat.printPoints();
//shapes.ImageShapenot supported at this point
pat.displacedQuad("В","p3",pat.distance("В","p3")/2.0,-(-0.5 *scale));
pat.displacedQuad("Г","а",pat.distance("Г","а")/2.0,-(1.5 *scale));
pat.displacedQuad("Н","Г",pat.distance("Н","Г")/2.0,-(1.0 *scale));
pat.line("В","Н");
pat.displacedQuad("p22","p19",pat.distance("p22","p19")/2.0,-(0.5 *scale));
pat.displacedQuad("p24","p26",pat.distance("p24","p26")/2.0,-(0.4 *scale));
pat.displacedQuad("p26","p23",pat.distance("p26","p23")/2.0,-(0.5 *scale));
pat.displacedQuad("p20","p22",pat.distance("p20","p22")/2.0,-(0.5 *scale));
pat.displacedQuad("ш2","е2",pat.distance("ш2","е2")/2.0,-(-0.5 *scale));
pat.displacedQuad("ж2","к2",pat.distance("ж2","к2")/2.0,-(-0.4 *scale));
pat.line("ш2","ж2");
pat.displacedQuad("и3","М3",pat.distance("и3","М3")/2.0,-(-1.5 *scale));
pat.displacedQuad("и3","к3",pat.distance("и3","к3")/2.0,-(0.4 *scale));
pat.displacedQuad("о2","е2",pat.distance("о2","е2")/2.0,-(0.4 *scale));
pat.displacedQuad("а","p46",pat.distance("а","p46")/2.0,-(0.4 *scale));
pat.displacedQuad("p46","p49",pat.distance("p46","p49")/2.0,-(-0.5 *scale));
pat.line("p49","p51");
pat.line("p3","p45");
pat.line("p45","p51");
pat.line("p44","p49");
pat.line("p19","p65");
pat.line("p65","p64");
pat.line("p64","p20");
pat.line("p23","p23");
pat.line("p23","p57");
pat.line("p57","p58");
pat.line("p24","p58");
pat.line("к2","p71");
pat.line("p71","p70");
pat.line("p73","p72");
pat.displacedQuad("p72","о2",pat.distance("p72","о2")/2.0,-(-0.5 *scale));
pat.line("М3","p80");
pat.line("p80","p79");
pat.line("p81","p78");
pat.line("p81","л3");
pat.line("к3","м3");
pat.line("м3","Л3");
pat.line("Л3","л3");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'backWidth');
wireUpControl(document,'chestWidth');
wireUpControl(document,'frontLength');
wireUpControl(document,'frontWidth');
wireUpControl(document,'portion');
wireUpControl(document,'shoulder');
wireUpControl(document,'sideHeight');
wireUpControl(document,'portion');


/*var chestInput = webDocument.getElementById('chestSlider');
var chestInput=webDocument.getElementById(attribute+'chestText');
chestInput.oninput = function() {
    chestInput.value=this.value;
    webDocument.getElementById('portionText').value=chestInput.value/4.0;
    webDocument.getElementById('portionSlider').value=chestInput.value/4.0;
    makePattern(false);
    }
    chestSlider.oninput = function() {
        chestInput.value=this.value;
        webDocument.getElementById('portionText').value=chestSlider.value/4.0;
        webDocument.getElementById('portionSlider').value=chestSlider.value/4.0;
        makePattern(false);
        }*/

wireUpDistance(document);
