function Las(){
    this.buffer= new ArrayBuffer(10000000);
    //this.buffer.fill(0);
    this.offset=0;
    this.shapes=0;
    this.groups=0;

    this.red=0;
    this.green=0;
    this.blue=0;

    this.render=false;
}

Las.prototype.addText=function(x0,y0, the_string, font_name, font_size)
{
    var view=new DataView(this.buffer);
    var os=this.offset;
    view.setInt8(os, 7); os++; //shape_type
    view.setUint16(os,0x3075, false); os+=2; //3075
    view.setUint32(os,0x0f,true); os+=2; // 0e or 0f
    os=this.make_style(0,1,this.buffer, os);
    os+=2; //this is different
    os=this.make_shapeinfo(this.buffer, os);
    os=this.make_color(this.red,this.green,this.blue, this.buffer, os);
    os+=2;
    view.setUint32(os,1,false); os+=4; //num_points
    os+=3;
    view.setFloat64(os, x0,true); os+=8; //x coordinate
    view.setFloat64(os, y0,true); os+=8; //y coordinate

    //calculate stringlength

    var stringlength= the_string.length; // string length
    console.log(the_string+" StringLength= " + stringlength);
    var string_as_bytes=this.stringToUint(the_string);
    console.log(string_as_bytes);
    view.setUint32(os,string_as_bytes.length+140,true); os+=4; //stringlength 140 + length in bytes
    console.log(string_as_bytes.length + 140)
    view.setUint32(os,stringlength,true); os+=4; //

    os=this.encode_string(the_string, this.buffer, os);
    os+=8

    for (var j=0; j<font_name.length; j++, os++)
    {
        view.setUint8(os, font_name.charCodeAt(j));
    }
    os+=(32- font_name.length); //font_name
    os+=48

    view.setFloat64(os, font_size,true); os+=8;
    os+=8
    var radians=0.0;
    view.setFloat64(os, radians,true); os+=8; //angle in radians
    os+=24; //padding
    this.shapes++;
    this.offset=os;
}
Las.prototype.addArc=function(x0,y0,x1,y1,x2,y2)
{
    var view=new DataView(this.buffer);
    var os=this.offset;
    view.setInt8(os, 8); os++;
    view.setUint16(os,0x3075, false); os+=2;
    view.setUint32(os,0x0f,true); os+=4;
    os=this.make_style(0,1,this.buffer, os);
    os=this.make_shapeinfo(this.buffer, os);
    os=this.make_color(this.red,this.green,this.blue, this.buffer, os);
    os+=2;
    view.setUint32(os,3,false); os+=4;
    os+=3;
    view.setFloat64(os, x0,true); os+=8; //begin
    view.setFloat64(os, y0,true); os+=8; //begin
    view.setFloat64(os, x1,true); os+=8; //middle
    view.setFloat64(os, y1,true); os+=8; //middle
    view.setFloat64(os, x2,true); os+=8; //end
    view.setFloat64(os, y2,true); os+=8; //end

    //in pattern editor, the points are placed with a mouse as begin, end, middle.
    os+=4;

    this.offset=os;
    this.shapes++;
};

Las.prototype.addLine=function(x0,y0,x1,y1)
{
    var view=new DataView(this.buffer);
    var os=this.offset;
    view.setInt8(os, 1); os++;
    view.setUint16(os,0x3075, false); os+=2;
    view.setUint32(os,0x0f,true); os+=4;
    os=this.make_style(0,1,this.buffer, os);
    os=this.make_shapeinfo(this.buffer, os);
    os=this.make_color(this.red,this.green,this.blue, this.buffer, os);
    os+=2;
    view.setUint32(os,2,false); os+=4;
    os+=3;
    view.setFloat64(os, x0,true); os+=8;
    view.setFloat64(os, y0,true); os+=8;
    view.setFloat64(os, x1,true); os+=8;
    view.setFloat64(os, y1,true); os+=8;
    os+=4;

    this.offset=os;
    this.shapes++;
    return;
};

Las.prototype.addPoint=function(x0,y0)
{
    var view=new DataView(this.buffer);
    var os=this.offset;
    view.setInt8(os, 2); os++;
    view.setUint16(os,0x3075, false); os+=2;
    view.setUint32(os,0x0f,true); os+=4;
    os=this.make_style(0,1,this.buffer, os);
    os=this.make_shapeinfo(this.buffer, os);
    os=this.make_color(this.red,this.green,this.blue, this.buffer, os);
    os+=2;
    view.setUint32(os,1,false); os+=4;
    os+=3;
    view.setFloat64(os, x0,true); os+=8;
    view.setFloat64(os, y0,true); os+=8;
    os+=4;

    this.offset=os;
    this.shapes++;
    return;
};

Las.prototype.initHeader=function()
{
    this.buffer= new ArrayBuffer(10000000);
    var view=new DataView(this.buffer);
    var os=this.offset;


    view.setUint32(os,0x04, true); os+=4;
    view.setUint32(os,0x01,true); os+=4;
    view.setUint32(os,0,true); os+=4;
    view.setUint32(os,0,true); os+=4;

    this.offset=os;
    return;
}

Las.prototype.updateHeader=function(){
    var view=new DataView(this.buffer);
    var os=0;
    view.setUint32(os,0x04, true); os+=4;
    view.setUint32(os,0x01,true); os+=4;
    view.setUint32(os,this.groups,true); os+=4;
    view.setUint32(os,this.shapes,true); os+=4;

}

Las.prototype.make_shapeinfo=function(buffer,offset){
    var os=offset;
    var view=new DataView(buffer);
    os+=28;
    view.setUint32(os,0x000c, true);os+=2;
    view.setUint32(os,0x0001, true);os+=4;

    return os;
}
Las.prototype.make_color=function(red, green, blue, buffer,offset){
        var view=new DataView(buffer);
        var os=offset;
        view.setUint8(os,red, true); os+=1;
        view.setUint8(os,green, true); os+=1;
        view.setUint8(os,blue, true); os+=1;
        return os;
    }

Las.prototype.make_style=function(line_style, thickness,buffer,offset)
{
    var os=offset;
    var view=new DataView(buffer);
    view.setUint16(os,line_style, false); os+=2;
    view.setUint16(os,thickness, false); os+=2;
    os+=2;
    return os;
}

Las.prototype.make_stop=function(buffer,offset){
    var view=new DataView(this.buffer);
    var os=this.offset;

    view.setUint32(os,0x24, true); os+=4;
    os+=36;
    this.offset=os;
}
Las.prototype.trim=function(){
    truncated=this.buffer.slice(0,this.offset);
    this.buffer=truncated;

}

function ab2str(buf) {
    return Array.prototype.map.call(new Uint8Array(buf), x => ('00' + x.toString(16)).slice(-2)).join(' ');
 }



Las.prototype.encode_string=function(the_string, buffer,offset){
    var encoded= unescape(encodeURIComponent(the_string));
    var charList = encoded.split('');
    var uintArray = [];
    for (var i = 0; i < charList.length; i++) {
    uintArray.push(charList[i].charCodeAt(0));
    }
    var view=new DataView(buffer);
    var os=offset;
    for (var j=0; j<uintArray.length; j++, os++)
    {
        view.setUint8(os, uintArray[j]);
    }
    return os;
}

Las.prototype.stringToUint=function(the_string)
{
    var string = unescape(encodeURIComponent(the_string)),charList = string.split(''), uintArray = [];
    for (var i = 0; i < charList.length; i++) {
      uintArray.push(charList[i].charCodeAt(0));
    }
    return new Uint8Array(uintArray);
}
