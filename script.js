document.getElementById("btn"),addEventListener("click",function(){
 alert("CLICKED THE BUTTON");
})


var hoverDiv = document.getElementById('color');
var originalColor = hoverDiv.style.backgroundColor;

color.addEventListener('mouseenter', function() {
    color.style.backgroundColor = 'red';
});

color.addEventListener('mouseleave', function() {
    color.style.backgroundColor = originalColor;
});