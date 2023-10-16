var colorchange= function(color){
    return function(){
        document.getElementsByTagName("body")[0].style.backgroundColor=`${color}`;
    }
}

document.getElementById('Orange').onclick=colorchange('orange')
document.getElementById('Green').onclick=colorchange('green') 