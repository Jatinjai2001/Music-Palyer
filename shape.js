var firstshape="infinity"
var shape = ["square","ovel","circle","rectangle","triangle-right","infinity","dimand-shield","yin-yang"];
var color=["pink","brown","orange","green","maroon", "violet"];

document.getElementById("btnshape").onclick=function(){
    var ran = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(firstshape).setAttribute("id",ran);
    firstshape=ran;
}

document.getElementById("btncolor").onclick=function(){
    var rand = color[Math.floor(Math.random() * color.length)];
    document.getElementById("block").style.backgroundColor = rand;
}