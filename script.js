var slideno=1;
Carousel(slideno);

function Carousel(n){
var slides=document.getElementsByClassName("image-container");
var dots=document.getElementsByClassName("dot");

if(n>slides.length){
	slideno=1;
}
if(n<1){
	slideno=slides.length;
}
for(var i=0;i<slides.length;i++){
	slides[i].style.display="none";
}
slides[slideno-1].style.display="block";

for(var i=0; i<dots.length;i++){
	dots[i].className=dots[i].className.replace(" active","");
}
dots[slideno-1].className += " active";
}

function newSlide(n){
Carousel(slideno+=n);
}

function currentSlide(n){
	Carousel(slideno=n);
}

