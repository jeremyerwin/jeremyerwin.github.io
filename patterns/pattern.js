/**
*
*/



function setDocumentScale(){
    var slider=document.getElementById('scaleSlider').value;

    return slider;
}

function forEachItem (items, fn) {
    var i,
    len = items.length

    for (i = 0; i < len; i++) {
        fn(items[i], i, items)
    }
}

function radians(degrees) {
    return degrees * Math.PI/180;
};
function degrees(radians){
    return radians*180/Math.PI;
}
function pointDist(a,b){
    var dx=a.x-b.x;
    var dy=a.y-b.y;
    return Math.sqrt(dx*dx+dy*dy);
}

function distance(aName, bName)
{
    var a=getPoint(aName);
    var b=getPoint(bName);
    if(a != null && b != null){
        var deltaX=a.x-b.x;


        var deltaY=a.y-b.y;
        return Math.sqrt(deltaX*deltaX+ deltaY*deltaY);
    }
    else return NaN;
}
function angle(aName, bName)
{
    var a=getPoint(aName);
    var b=getPoint(bName);

    var deltaX=b["x"]-a["x"];
    var deltaY=b["y"]-a["y"];
    return Math.atan2(deltaY,deltaX);
}

function getPoint(pointName)
{
    return points.get(pointName);
}
function addPoint(name, xval, yval)
{
    points.set(name, {x:xval,y:yval, description: "the origin point"});
}


function upPoint(name, aName, distance)
{
    var a=getPoint(aName);
    var documentScale=setDocumentScale();
    points.set(name, {x:a.x,y:a["y"]- distance, description: "Mark a point " + name  + "  "+ distance/documentScale + " up from point " + aName });
}

function downPoint(name, aName, distance)
{
    var a=getPoint(aName);
    var documentScale=setDocumentScale();
    points.set(name, {x:a.x,y:a["y"]+ distance, description: "Mark a point " + name  + "  "+ distance/documentScale + " down from point " + aName });
}

function leftPoint(name, aName, distance)
{
    var a=getPoint(aName);
    var documentScale=setDocumentScale();
    points.set(name, {x:a.x -distance,y:a["y"], description: "Mark a point " + name + "  "+ distance/documentScale + " to left of point " + aName });
}

function rightPoint(name, aName, distance)
{

    var a=getPoint(aName);
    var documentScale=setDocumentScale();

    points.set(name, {x:a.x +  distance,y:a.y, description: "Mark a point " + name  + "  "+ distance/documentScale + " to the right of point " + aName });

}

function midPoint(name, aName, bName)
{
    var a=getPoint(aName);
    var b=getPoint(bName);
    var documentScale=setDocumentScale();
    points.set(name, {x:(a["x"]+b["x"])/2.0, y:(a["y"]+b["y"])/2.0, description:"Mark a point " + name  + " equidistant between points "+ aName + " and " + bName });
}
function alongPoint(name, aName, bName, distance)
{
    var a=getPoint(aName);

    var theta=angle(aName, bName);
    var documentScale=setDocumentScale();


    points.set(name, {x:(a.x+Math.cos(theta)*distance), y:(a.y+Math.sin(theta)*distance), description:"Mark a point " + distance/documentScale  + " along the line from "+ aName + " to " + bName });
}

function displacementPoint(name, aName, xdistance, ydistance)
{
    var a=getPoint(aName);
    var documentScale=setDocumentScale();

    if(xdistance>1)
    {
        var xword=" to the right of ";
    }
    else
    {
        var	xword="to the left of";
    }
    if(ydistance>1)
    {
        var yword=" down from ";
    }
    else
    {
        var	yword=" up from ";
    }


    points.set(name, {x:a.x +  xdistance,y:a.y+ydistance, description: "Mark a point "  + Math.abs(xdistance/documentScale) + xword + " and " + Math.abs(ydistance/documentScale) + yword + aName });

}

function extendPoint(name, aName, bName, distance)
{
    var documentScale=setDocumentScale();
    var a=getPoint(aName);
    var b=getPoint(bName);
    var theta=angle(aName, bName);

    points.set(name, {x:(b["x"]+Math.cos(theta)*distance), y:(b["y"]+Math.sin(theta)*distance), description:"Extend the line from "+ aName + " to " + bName + " by " + distance/documentScale + " and mark a point "});
}

function directionPoint(name, aName, degrees, distance)
{
    var documentScale=setDocumentScale();
    var a=getPoint(aName);
    var theta=radians(degrees);
    points.set(name, {x:a.x+Math.cos(theta)*distance, y:a.y+Math.sin(theta)*distance, description: "Measure out " + distance/documentScale + " along a " + degrees + " angle and mark a point" });
}

function perpendicularPoint(name, aName,bName, distance)
{
    var documentScale=setDocumentScale();
    var b=getPoint(bName);
    theta=angle(aName, bName)+  Math.PI/2.0;

    points.set(name, {x:(b.x+Math.cos(theta)*distance), y:(b.y+Math.sin(theta)*distance), description:" From point " + bName +" Measure out " + distance/documentScale + " along a  line perpendicular  to line " + aName + bName  });
}

function perpendicularBisectorPoint(name, aName,bName, distance)
{
    var documentScale=setDocumentScale();
    var a=getPoint(aName);
    var b=getPoint(bName);
    var theta=angle(aName, bName)+  Math.PI/2.0;

    var m={x:(a["x"]+b["x"])/2.0, y:(a["y"]+b["y"])/2.0};
    points.set(name, {x:(m["x"]+Math.cos(theta)*distance), y:(m["y"]+Math.sin(theta)*distance), description:"From the midpoint of " + aName + " and " + bName +" Measure out " + distance/documentScale + " along a  line perpendicular  to line " + aName + bName});

}
function parallelPoint(name, aName,bName, cName, distance)
{
    var documentScale=setDocumentScale();
    var c=getPoint(cName);
    theta=angle(aName, bName);

    points.set(name, {x:(c.x+Math.cos(theta)*distance), y:(c.y+Math.sin(theta)*distance), description: "From point " + cName +" Measure out " + distance/documentScale + " along a  line perpendicular  to line " + aName + bName  });
}
function arcCenterPoint(name, aName,bName, versine)
{
    var documentScale=setDocumentScale();
    var a=getPoint(aName);
    var b=getPoint(bName);
    var theta=angle(aName, bName)+  Math.PI/2.0;
    var phi=angle(aName, bName)-  Math.PI/2.0;
    //point on arc:

    var AB={x:(a.x+b.x)/2.0 + +Math.cos(theta)*versine , y:(a.y+b.y)/2.0 +Math.sin(theta)*versine};

    //points.set("tempAB", AB);
    //middle point of chord
    var ABmid={x:(a.x+b.x)/2.0, y:(a.y+b.y)/2.0};
    //points.set("tempABmid", ABmid);

    var absversine= Math.abs(versine);
    var chordlength=distance(aName,bName);

    var radius=(((chordlength*chordlength)/(8.0*absversine))+absversine/2.0);
    console.log("radius",radius)


    points.set(name, {x:(AB.x+Math.cos(phi)*radius), y:AB.y+Math.sin(phi)*radius, description:"Mark the center pivot point of an arc through "+ aName + " and " + bName + ", and a point displaced by from the midpoint of chord " + aName  + bName + " by " + versine/scale});


}
function circleCircleIntersectionPoint(name, aName, radiusA, bName, radiusB, up)
{
    var documentScale=setDocumentScale();
    var a=getPoint(aName);
    var b=getPoint(bName);

    var dist=distance(aName, bName);
    var deltaX=a.x-b.x;
    var deltaY=a.y-b.y;

    var k = (dist*dist + radiusA*radiusA - radiusB*radiusB)/(2*dist);

    if(up){
        var newx = a.x - deltaX*k/dist - (deltaY/dist)*Math.sqrt(radiusA*radiusA - k*k);
        var newy = a.y - deltaY*k/dist + (deltaX/dist)*Math.sqrt(radiusA*radiusA - k*k);
    }
    else{
        var newx = a.x - deltaX*k/dist + (deltaY/dist)*Math.sqrt(radiusA*radiusA - k*k);
        var newy = a.y - deltaY*k/dist - (deltaX/dist)*Math.sqrt(radiusA*radiusA - k*k);
    }
    points.set(name,{x:newx, y:newy, description: "Mark the point of intersection of a circle of " + radiusA + " centered at point " + aName + " with  a circle of radius " + radiusB/documentScale + " centered at point " + bName});

}
function circleLineIntersectionPoint(name, aName, bName, radiusA, degreesB )
{
    var documentScale=setDocumentScale();
    var a=getPoint(aName);
    var b=getPoint(bName);

    var theta=radians(degreesB);
    var c={x:(b.x+Math.cos(theta)*1000), y:(b.y+Math.sin(theta)*1000)};
    console.log(degreesB, b.y, c.y);

    if(Math.abs(b.y - c.y) < 0.0001)
    {

        var dy= b.y-a.y;
        var dx=Math.sqrt(radiusA*radiusA -dy*dy);


        if (Math.abs(b.x -(a.x - dx)) < Math.abs(b.x -(a.x + dx)))
        {
            var solution={x:a.x-dx,y:b.y};
            console.log("solution one");
        }
        else
        {
            var solution={x:a.x+dx,y:b.y}
            console.log("solution two");
        }
    }
    else
    {
        solution=circleLineIntersection( a, b, c, radiusA);
    }
    points.set(name,{x:solution.x, y:solution.y, description: "Mark the point of intersection of a line extended from " + bName + " at an angle of " + degreesB + " with  a circle of radius " + radiusA/documentScale + " centered at point " + aName});
}



function circleLSIntersectionPoint(name, aName, bName, cName, radiusA )
{
    //from http://mathworld.wolfram.com/Circle-LineIntersection.html
    //circleLineIntersectionPoint(name, nameA, nameB, radiusA, degrees(angle(nameB,nameC)) );
    var documentScale=setDocumentScale();
    var a=getPoint(aName);
    var b=getPoint(bName);
    var c=getPoint(cName);


    if(Math.abs(b.y - c.y) < 0.0001)
    {

        var dy= b.y-a.y;
        var dx=Math.sqrt(radiusA*radiusA -dy*dy);

        if ((Math.abs(b.x -a.x + dx) < Math.abs(b.x -a.x - dx)))
        {
            var solution={x:a.x-dx,y:b.y};

        }
        else
        {
            var solution={x:a.x+dx,y:b.y}

        }
    }

    else
    if(Math.abs(b.x - c.x) < 0.0001)
    {

        var dx= b.x-a.x;
        var dy=Math.sqrt(radiusA*radiusA -dx*dx);

        if ((Math.abs(b.y -a.y + dy) < Math.abs(b.y -a.y - dy)))
        {
            var solution={x:b.x,y:a.y-dy};

        }
        else
        {
            var solution={x:b.x,y:a.y+dy}
        }
    }
    else
    {
        var solution=circleLineIntersection( a, b, c, radiusA);

    }


    points.set(name,{x:solution.x, y:solution.y, description: "Mark the point of intersection of a line extended from " + bName + " to " + cName + " with  a circle of radius " + radiusA/documentScale + " centered at point " + aName});

}

function circleLineIntersection( a, b, c, radiusA)
{
    var documentScale=setDocumentScale();
    //transform coordinates:
    var p1= {x:a.x-b.x,y:a.y-b.y};
    var p2={x:a.x-c.x, y:a.y-c.y};


    var dx= p2.x-p1.x;
    var dy=p2.x-p1.y;

    var dr=Math.sqrt(dx*dx+dy*dy);

    var D= p1.x*p2.y -p2.x*p1.y;

    var term2= (radiusA*radiusA*dr*dr -D*D);


    if(term2>=0)
    {
        console.log(radiusA);



        var sol1={x: (-D*dy + dx*Math.sqrt(term2))/ (dr*dr)};
        var sol2={x: (-D*dy - dx*Math.sqrt(term2))/ (dr*dr)};

        sol1.y=Math.sqrt(radiusA*radiusA- sol1.x*sol1.x);
        sol2.y=Math.sqrt(radiusA*radiusA- sol2.x*sol2.x);
        console.log(sol1,sol2)

        if(pointDist(p2,sol1) < pointDist(p2,sol2) )
        {
            var retval={x:a.x+sol1.x, y:a.y+sol1.y};
            console.log("circle line intersection solution 1", retval);
            return retval;
        }
        else
        {
            var retval={x:a.x+sol2.x, y:a.y+sol2.y};
            console.log("circle line intersection solution 2", retval);
            return retval;

        }
    }
    else
    {
        var retval={x:-90, y:-90}
        console.log("circle line intersection no solution", retval);
        return retval;
    }
}

function printPoint(value, key, map)
{

    if(isNaN(value.x) || isNaN(value.y)){
        console.log( key + " (" + value.x + "," + value.y +")");
    }
    var shape=paper.circle(value.x, value.y, 5);
    paper.text(value.x + 7, value.y-7,key).attr("font-size",16);
    var dtext=paper.text(value.x + 18, value.y+18, value.description).attr("font-size",36).attr("fill","red");
    dtext.hide();
    shape.attr("fill", "white");

    shape.mouseover(
        function(e){
            this.attr("fill","red");
            dtext.show();


        }
    ).mouseout(
        function(e){
            this.attr("fill","white");
            dtext.hide();

        }
    );





}

function displacedArc(aName, bName, displacement)
{
    var documentScale=setDocumentScale();
    var a=getPoint(aName);
    var b=getPoint(bName);
    var absversine= Math.abs(displacement);
    var chordlength=distance(aName,bName);
    var longway=0;
    var radius=(((chordlength*chordlength)/(8.0*absversine))+absversine/2.0);

    var clockwise=0;
    var rotateaxis=0;
    if(displacement > 0)
    {
        longway=1;
    }



    var d = ["M", a["x"], a["y"], "A", radius,radius, rotateaxis, clockwise, longway, b["x"], b["y"]];

    paper.path(d);
}
function printPoints()
{
    let keys = Array.from( points.keys() );

    for (var i = 0; i <= keys.length; i++) {
        // console.log(keys[i]);
        printPoint2(keys[i]);
    }


    //points.forEach(printPoint);
}

function printPoint2(key)
{
    var value=points.get(key);
    if(typeof value == 'undefined')
    return;
    //console.log(value);
    if(isNaN(value.x) || isNaN(value.y)){
        console.log( key + " (" + value.x + "," + value.y +")");
    }
    var shape=paper.circle(value.x, value.y, 5);
    paper.text(value.x + 7, value.y-7,key).attr("font-size",10);

    var dtext=paper.text(value.x + 18, value.y+18, value.description).attr("font-size",14).attr("fill","red");
    dtext.hide();
    shape.attr("fill", "white");

    shape.mouseover(
        function(e){
            this.attr("fill","red");
            dtext.show();
        }).mouseout(
            function(e){
                this.attr("fill","white");
                dtext.hide();

            }
        );

    }

    function findIntersection(a,b, c, d)
    {

        //https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
        denom=(a.x-b.x)*(c.y-d.y) - (a.y-b.y)*(c.x-d.x);

        if(denom!=0)
        {
            return [
                ((a.x*b.y- a.y*b.x)*(c.x-d.x)- (a.x-b.x)*(c.x*d.y- c.y*d.x))/denom,
                ((a.x*b.y- a.y*b.x)*(c.y-d.y)- (a.y-b.y)*(c.x*d.y- c.y*d.x))/denom];
            }
            else return [NaN,NaN];

        }

        function intersectionPoint(name, aName,bName, cName,dName)
        {
            var documentScale=setDocumentScale();
            var a=getPoint(aName);
            var b=getPoint(bName);
            var c=getPoint(cName);
            var d=getPoint(dName);

            console.log(a,b,c,d);
            var solution=findIntersection(a,b, c, d)
            console.log(a,b,c,d,solution);
            points.set(name,{x:solution[0], y:solution[1],description: "Mark the point of intersection of line " + aName + bName + " with line " + cName + dName});
            //
            //	//special case
            //	if(equiv(a.x,b.x) && equiv(c.y,d.y))
            //	{
            //		points.set(name,{x:a.x, y: c.y });
            //	}
            //	else if(equiv(a.y,b.y) && equiv(c.x,d.x))
            //	{
            //
            //		points.set(name,{x:c.x, y: a.y });
            //	}
            //
            //	else
            //{
            //
            //
            //
            //	var solution=findIntersection(a,b, c, d)
            //	points.set(name,{x:solution[0], y:solution[1]});
            //	//console.log("intersection",a,b,c,d,solution);
            //	}
        }



        function angleAngleIntersectionPoint( name, aName, angleA, bName, angleB)
        {
            var documentScale=setDocumentScale();
            var a=getPoint(aName);
            var b=getPoint(bName);
            var theta=radians(angleA);
            var a1={x:(a.x+Math.cos(theta)*1000), y:(a.y+Math.sin(theta)*1000)};
            var theta2=radians(angleB);
            var b1={x:(b.x+Math.cos(theta2)*1000), y:(b.y+Math.sin(theta2)*1000)};


            //paper.path("M", a.x, a.y, "L", a1.x, a1,y);
            var solution=findIntersection(a,a1, b, b1);

            points.set(name,{x:solution[0], y:solution[1], description: "Mark the point of intersection of a line extended from " + aName + " at an angle of " + angleA + " with a line extended from " + bName + " at an angle of " + angleB });
            //showGuide(a,a1);
            //showGuide(b,b1);



        }

        function teeIntersectionPoint( name, aName, angleA, bName, cName)
        {
            var documentScale=setDocumentScale();
            var a=getPoint(aName);
            var b=getPoint(bName);
            var c=getPoint(cName);
            var theta=radians(angleA);

            var a1={x:(a.x+Math.cos(theta)*1000), y:(a.y+Math.sin(theta)*1000)};

            //paper.path("M", a.x, a.y, "L", a1.x, a1,y);
            var a1={x:(a.x+Math.cos(theta)*1000), y:(a.y+Math.sin(theta)*1000)};
            var solution=findIntersection(a,a1, b, c);

            var direction;
            if(angleA == 0)
            {
                direction=" to the right of ";
            }
            else if(angleA == 180)
            {
                direction="to the left of ";
            }
            if(angleA == 270)
            {
                direction="down from ";
            }
            else if (angleA == 90)
            {
                direction="up from ";
            }

            else
            {
                var	direction=" at an angle of " + angleA + "degrees  from ";
            }

            points.set(name,{x:solution[0], y:solution[1], description: "Mark a point at the intersection of a line emerging " + direction + aName + " with a line " + bName + cName });

        }





        function line(aName, bName)
        {
            var a=getPoint(aName);
            var b=getPoint(bName);

            var d = ["M", a["x"], a["y"], "L", b["x"], b["y"]];

            paper.path(d);

        }

        function displacedQuad(aName, bName, along, out)
        {
            var documentScale=setDocumentScale();
            var a=getPoint(aName);
            var b=getPoint(bName);
            var theta=angle(aName, bName);
            var phi=angle(aName, bName) -Math.PI/2;
            var pc={x:a.x + along* Math.cos(theta) +out*Math.cos(phi), y:a.y + along* Math.sin(theta) + out*Math.sin(phi)};

            c1= Math.sqrt((pc.x-a.x)*(pc.x-a.x)+ (pc.y-a.y)*(pc.y-a.y));
            c2= Math.sqrt((b.x-pc.x)*(b.x-pc.x)+ (b.y-pc.y)*(b.y-pc.y));
            t1=c1/(c1+c2);

            x1=(pc.x-a.x*b0(t1)-b.x*b2(t1))/b1(t1);
            y1=(pc.y-a.y*b0(t1)-b.y*b2(t1))/b1(t1);

            //var d = ["M", a["x"], a["y"], "L", b["x"], b["y"]];
            var d = ["M", a["x"], a["y"], "Q", x1,y1, b["x"],b["y"]];

            paper.path(d);


        }

        function fittedQuad(aName,bName, cName)
        {
            var a=getPoint(aName);
            var b=getPoint(cName);
            var pc=getPoint(bName);
            c1= Math.sqrt((pc.x-a.x)*(pc.x-a.x)+ (pc.y-a.y)*(pc.y-a.y));
            c2= Math.sqrt((b.x-pc.x)*(b.x-pc.x)+ (b.y-pc.y)*(b.y-pc.y));
            t1=c1/(c1+c2);

            x1=(pc.x-a.x*b0(t1)-b.x*b2(t1))/b1(t1);
            y1=(pc.y-a.y*b0(t1)-b.y*b2(t1))/b1(t1);
            var d = ["M", a["x"], a["y"], "Q", x1,y1, b["x"],b["y"]];

            paper.path(d);
        }
        function guide(aName, bName)
        {
            var a=getPoint(aName);
            var b=getPoint(bName);
            var d = ["M", a["x"], a["y"], "L", b["x"], b["y"]];

            paper.path(d).attr("stroke","red");

        }

        function solveMatrix(x00, x10, x01, x11, b0, b1)
        {
            var A =[[x00, x10], [x01, x11]];

            var b= [b0, b1];


            debugger;


            var sol= math.lusolve(A, b);

            return sol;
            //

            //console.log("unsolved:[" +x00 + "," + x01 +"," + b0 +"]\n" + "[" +x10 + "," + x11 +"," + b1 +"]");

            //getting equivalent of divide by zero errors
            var factor0=-x10/x00;
            x10=x10+x00*factor0;
            x11=x11+x01*factor0;
            b1=b1+b0*factor0;
            ////
            var factor1=-x01/x11;
            x00=x00+x10*factor1;
            x01=x01+x11*factor1;
            ////
            b0=b0+b1*factor1;
            ////
            ////
            var factor2=1/x00;
            x00=x00*factor2;
            x01=x01*factor2;
            b0=b0*factor2;
            ////
            var factor3=1/x11;
            ////
            x10=x10*factor3;
            x11=x11*factor3;
            b1=b1*factor3;
            //
            //	//console.log("solved:[" +x00 + "," + x01 +"," + b0 +"]\n" + "[" +x10 + "," + x11 +"," + b1 +"]");
            return [b0, b1];
        }



        function equiv(a, b)
        {
            var epsilon=0.0000001;
            if(Math.abs(a-b)< epsilon)
            return true;
            else
            return false;

        }

        /**
        * Bernstein Polynomial 0,2
        * First of three basis functions making up a quadratic bezier curve
        * @param t
        * @return value of the polynomial evaluated at t
        */
        function b0(t)
        {
            return (1.0-t)*(1.0-t);
        }

        function bprime0(t)
        {
            return -2.0 +2 *t;
        }

        /**
        * Bernstein Polynomial 1,2
        * Second of three basis functions making up a quadratic bezier curve
        * @param t
        * @return value of the polynomial evaluated at t
        */
        function b1( t)
        {
            return 2.0*t*(1.0-t);
        }

        function bprime1(t)
        {
            return 2.0-2.0*t;
        }

        /**
        * Bernstein Polynomial 2,2
        * Third of three basis functions making up a quadratic bezier curve
        * @param t
        * @return value of the polynomial evaluated at t
        */
        function b2( t)
        {
            return t*t;
        }

        function bprime2( t)
        {
            return 2.0*t;
        }


        function displaydistance(webDocument)
        {
            var aName= webDocument.getElementById('pointA').value;
            var bName= webDocument.getElementById('pointB').value;


            if (typeof aName !== "undefined" && aName !== null && typeof bName !== "undefined" && bName !== null)
            {
                console.log(aName);
                console.log(bName);
                webDocument.getElementById('distanceField').value=distance(aName,bName)/scale;
            }
        }


function wireUpControl(webDocument, attribute)
{
    var sliderInput = webDocument.getElementById(attribute+'Slider');
    var textInput=webDocument.getElementById(attribute+'Text');
    sliderInput.oninput = function() {
        textInput.value=this.value;
        makePattern(false);
    }
    sliderInput.onchange = function() {
        textInput.value=this.value;
        makePattern(true);
    }
    textInput.oninput = function() {
        sliderInput.value=this.value;
        makePattern(false);
    }
    textInput.onchange = function() {
        sliderInput.value=this.value;
        makePattern(true);
    }

}

function wireUpScale(webDocument)
{
    var input = webDocument.getElementById('scaleText');
    var slider = webDocument.getElementById('scaleSlider');
    slider.oninput = function() {

        input.value=this.value;
        scale=this.value;
        makePattern(false);
    }

    slider.onchange = function() {

        input.value=this.value;
        scale=this.value;
        makePattern(true);
    }

    input.oninput = function() {
        slider.value=this.value;

        scale=this.value;
        makePattern(false);
    }
    input.onchange = function() {
        slider.value=this.value;

        scale=this.value;
        makePattern(true);
    }
}

function wireUpDistance(webDocument)
{
    debugger;
    webDocument.getElementById('pointA').oninput= function() {
    makePattern(true);}
    webDocument.getElementById('pointB').oninput= function() {
    makePattern(true);}
}
