
function Penetrate()
{

    
    this.diameter=1; // inches; cm


    

    this.weight=1; // pds; kg
    this.velocity=1; // ft/s, m/s

}

Penetrate.prototype.calculate=function()
{
    console.log("Penetration Calculator");

/*    const weight2=math.unit(this.weight, "lbs");
    const velocity2=math.unit(this.velocity, "ft/s");
    const diameter2=math.unit(this.diameter, "in");


    const penetration2=Math.divide(Math.multiply(
        Math.multiply(.0004689, Math.pow(weight2, 0.55)),
        Math.pow(this.velocity2,1.1)),
        Math.pow(this.diameter2,0.65));


*/
    var penetration= (.0004689*Math.pow(this.weight,0.55)*Math.pow(this.velocity,1.1))/(Math.pow(this.diameter,0.65))
    
    
    console.log(this.weight, this.velocity, this.diameter);
    console.log(penetration);
    return penetration;
}

Penetrate.prototype.setDiameter=function(value)
{
    this.diameter=value;
}

Penetrate.prototype.setWeight=function(value)
{
    this.weight=value;
}

Penetrate.prototype.setVelocity=function(value)
{
    this.velocity=value;
}

function doCalculation()
{
    //console.log("doCalculation");
    var velocityfield = document.getElementById('velocity');
    var weightfield = document.getElementById('weight');
    var diameterfield = document.getElementById('diameter');
    var penetrationfield = document.getElementById('penetration');

    var velocityunit = document.getElementById('velocityUnit');
    var weightunit = document.getElementById('weightUnit');
    var diameterunit = document.getElementById('diameterUnit');
    var penetrationunit = document.getElementById('penetrationUnit');

    //console.log("doCalculation2");
    var calculator=new Penetrate(); 

    //console.log("velocity index", velocityunit.selectedIndex);
    if(velocityunit.selectedIndex==0){
        //console.log("Velocity US");
        calculator.setVelocity(velocityfield.value); 
    }
    else{    
        //console.log("Velocity Metric");
        calculator.setVelocity(velocityfield.value/0.3048);
    }

    if(weightunit.selectedIndex==0){
        calculator.setWeight(weightfield.value);
    }
    else{   
        calculator.setWeight(weightfield.value/0.453592);
    }
    if(diameterunit.selectedIndex==0){
        calculator.setDiameter(diameterfield.value);
    }
    else{
        calculator.setDiameter(diameterfield.value/2.54);
    }


    console.log("Penetration Calculator" + calculator);
    console.log(calculator.calculate());
    if(penetrationunit.selectedIndex==0)
        penetrationfield.value=calculator.calculate();
    else    
        penetrationfield.value=calculator.calculate()*2.54;


    

}

