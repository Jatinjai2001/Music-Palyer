var box_I=document.getElementById('Inner')
var box_O=document.getElementById('Outer')

box_I.addEventListener('click', function(event){
    event.stopPropagation()
    console.log("Inner box Clicked")
})

box_O.addEventListener('click', function(event){
    event.stopPropagation()
    console.log("Outer box Clicked")
}) 
document.addEventListener('click',function(){
    console.log("document clicked")
})