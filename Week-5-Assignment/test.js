var slider = document.getElementById('slider');
var image =  document.getElementById('image');
var width = image.width;
var height = image.height;

slider.onchange = function(){
    image.width = width * (slider.value / 100);
    image.height = height * (slider.value / 100);
}