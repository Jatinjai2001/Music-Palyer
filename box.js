var box_s=document.getElementById('box')
var clickcount=document.getElementById('count')
var count = 0

box_s.addEventListener('mouseover', function(){
    count++;
    console.log(count)
    clickcount.innerText=count+" "
})