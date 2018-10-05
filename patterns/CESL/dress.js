var paper=Raphael("container",5000,5000);
var scale=15;
var points= new Map();
var makePattern=function(){
paper.clear()
    myMeasurements={}
var CгII=document.getElementById('CгIISlider').value*scale;
var Вг=document.getElementById('ВгSlider').value*scale;
var Впк=document.getElementById('ВпкSlider').value*scale;
var Впрз=document.getElementById('ВпрзSlider').value*scale;
var Дтп=document.getElementById('ДтпSlider').value*scale;
var Дтс=document.getElementById('ДтсSlider').value*scale;
var Дю=document.getElementById('ДюSlider').value*scale;
var Пг=document.getElementById('ПгSlider').value*scale;
var Пдтп=document.getElementById('ПдтпSlider').value*scale;
var Пдтс=document.getElementById('ПдтсSlider').value*scale;
var Пспр=document.getElementById('ПспрSlider').value*scale;
var Пшг=document.getElementById('ПшгSlider').value*scale;
var Пшгор=document.getElementById('ПшгорSlider').value*scale;
var Пшс=document.getElementById('ПшсSlider').value*scale;
var Сг1=document.getElementById('Сг1Slider').value*scale;
var Сш=document.getElementById('СшSlider').value*scale;
var Цг=document.getElementById('ЦгSlider').value*scale;
var Шг=document.getElementById('ШгSlider').value*scale;
var Шп=document.getElementById('ШпSlider').value*scale;
var Шс=document.getElementById('ШсSlider').value*scale;
addPoint("А0",20.9 *scale,7.7 *scale)
rightPoint("а1","А0",CгII+Пг);
downPoint("Т","А0",Дтс+Пдтс);
downPoint("Н","Т",Дю);
downPoint("Б","Т",Дтс/2.0-2.0 *scale);
downPoint("Г","А0",Впрз+Пспр+Пдтс);
angleAngleIntersectionPoint("Г1","а1",-90.0,"Г",0.0)
angleAngleIntersectionPoint("Б1","Б",0.0,"а1",-90.0)
angleAngleIntersectionPoint("Н1","Н",0.0,"а1",-90.0)
rightPoint("а","А0",Шс+Пшс);
leftPoint("а2","а1",Шг+(CгII-Сг1)+Пшг);
rightPoint("А","А0",Сш/3.0+Пшгор);
circleCircleIntersectionPoint("П","Т",Впк+Пдтс,"А",Шп+2.0 *scale,false);
alongPoint("В","А","П",Шп/3.0);
downPoint("В1","В",8.0 *scale);
circleCircleIntersectionPoint("В3","В1",distance("В","В1"),"В",2.0 *scale,false);
teeIntersectionPoint("П1","а",-90.0,"П","В3")
alongPoint("У","А0","Т",distance("А0","Т")*0.4);
intersectionPoint("Г2","а","П2","Г","Г1")
teeIntersectionPoint("Г3","а2",-90.0,"Г","Г1")
midPoint("Г4","Г2","Г3")
alongPoint("П2","Г2","П1",distance("Г2","П1")/3.0+2.0 *scale);
directionPoint("Г2а","Г2",45.0,distance("Г2","Г3")/5.0+0.5 *scale);
directionPoint("Г3а","Г3",135.0,distance("Г2","Г3")/5.0+0.5 *scale);
alongPoint("Г6","Г2","Г3",distance("Г3","Г2")/3.0);
intersectionPoint("Б2","Г6","Т2","Б","Б1")
teeIntersectionPoint("Т2","Т",0.0,"Г6","Б2")
intersectionPoint("Н2","Г6","Б2","Н","Н1")
angleAngleIntersectionPoint("Т1","Т",0.0,"а1",-90.0)
alongPoint("А3","Т1","а1",Дтп+Пдтп);
alongPoint("А5","А3","Т1",distance("А","А0")+1.0 *scale);
circleLineIntersectionPoint("А4","а1","А3",distance("А","А0"),-180.0);
alongPoint("Г7","Г1","Г",Цг);
alongPoint("Г8","А4","Г7",Вг);
circleCircleIntersectionPoint("А6","Г8",distance("Г8","А4"),"А4",2.0*(CгII-Сг1)+2.0 *scale,true);
alongPoint("П3","Г3","а2",distance("Г2","П1"));
alongPoint("П4","Г3","П3",distance("Г3","П3")/3.0);
downPoint("П41","П4",0.6 *scale);
circleCircleIntersectionPoint("П5","А6",Шп,"П41",distance("П41","П3"),false);
extendPoint("П51","А6","П5",0.5 *scale);
downPoint("А1","А0",2.5 *scale);
printPoints();
//shapes.ImageShapenot supported at this point
displacedQuad("П51","П41",distance("П41","П5")/2.0,-(-1.0 *scale));
fittedQuad("П41","Г3а","Г4");
fittedQuad("Г4","Г2а","П2");
displacedQuad("П2","П",distance("П2","П")/2.0,-(-0.3 *scale));
line("П","В3");
line("В3","В1");
line("В1","В");
line("В","А");
displacedQuad("А","А1",distance("А","А1")/2.0,-(-1.0 *scale));
line("П51","А6");
line("А6","Г8");
line("А4","Г8");
displacedQuad("А4","А5",distance("А4","А5")/2.0,-(2.6 *scale));
line("А5","Н1");
line("Н1","Н");
line("А1","Н");
displaydistance(document);
}
makePattern(true);
wireUpScale(document);
wireUpControl(document,'CгII');
wireUpControl(document,'Вг');
wireUpControl(document,'Впк');
wireUpControl(document,'Впрз');
wireUpControl(document,'Дтп');
wireUpControl(document,'Дтс');
wireUpControl(document,'Дю');
wireUpControl(document,'Пг');
wireUpControl(document,'Пдтп');
wireUpControl(document,'Пдтс');
wireUpControl(document,'Пспр');
wireUpControl(document,'Пшг');
wireUpControl(document,'Пшгор');
wireUpControl(document,'Пшс');
wireUpControl(document,'Сг1');
wireUpControl(document,'Сш');
wireUpControl(document,'Цг');
wireUpControl(document,'Шг');
wireUpControl(document,'Шп');
wireUpControl(document,'Шс');
wireUpDistance(document);
 
