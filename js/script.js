/// SLIDE SHOW

window.addEventListener('load',slideTxt);

function slideTxt(){

  var txt = document.querySelector('.txt');

  txt.classList.add('efect');




}






const txt = document.querySelector('.txt');
const slide = document.querySelectorAll('.slide'),
	  krug = document.querySelectorAll('.krug');
let counter = 1;
slidefun(counter);










let timer = setInterval(autoSlide, 8000);

function autoSlide() {
	counter += 1;
	slidefun(counter);
}


var nextS = document.querySelector('.next');
nextS.addEventListener('click', function plusSlides(n) {
  counter += 1;
	slidefun(counter);
	resetTimer();
  txt.classList.remove('efect');

                       })

var prevS = document.querySelector('.prev');
prevS.addEventListener('click', function plusSlides(n) {
  counter += -1;
	slidefun(counter);
	resetTimer();
    txt.classList.remove('efect');

                       })



function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
    txt.classList.remove('efect');
}





var krug1 = document.querySelector('#krug1');

krug1.addEventListener('click', function currentSlide(n) {
  counter = 1;
	slidefun(counter);
	resetTimer();
  txt.classList.remove('efect');
                       })

var krug2 = document.querySelector('#krug2');

krug2.addEventListener('click', function currentSlide(n) {
  counter = 2;
	slidefun(counter);
	resetTimer();
    txt.classList.remove('efect');

                       })

var krug3 = document.querySelector('#krug3');

krug3.addEventListener('click', function currentSlide(n) {
  counter = 3;
	slidefun(counter);
	resetTimer();
  txt.classList.remove('efect');
                       })





function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}





function slidefun(n) {
	let i;
	for(i = 0;i<slide.length;i++){
		slide[i].classList.add('none');
    	slide[i].classList.remove('block');
	}
	for(i = 0;i<krug.length;i++) {
		krug[i].className = krug[i].className.replace(' active', '');
	}
	if(n > slide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = slide.length;
	   }

        slide[counter - 1].classList.add('block');
        slide[counter - 1].classList.remove('none');
	      krug[counter - 1].className += " active";
}






/// LIVE NUMBER


    $(".number").counterUp({delay:10,time:1000});





/// PADAJUCI MENI

var overlay = document.querySelector('.overlay');
var nav1 = document.getElementById("nav1");
var menu = document.getElementById("meni");
var closemenu = document.querySelectorAll('.closemenu');
var meniBg = document.getElementById("meni-bg");

overlay.classList.remove("overlay");

menu.addEventListener('click',onClickMenu,false);



function onClickMenu(){

	document.getElementById("meni").classList.toggle("change");
	document.getElementById("nav1").classList.toggle("change");

	document.getElementById("meni-bg").classList.toggle("change-bg");

  overlay.className='overlay';

let closemenu = document.querySelectorAll('.closemenu');


for(var i =0; i<closemenu.length; i++){

  closemenu[i].addEventListener('click',onClickk,false);

}


}




function onClickk(){
overlay.className='';
  this.classList.remove("change");
  document.getElementById("meni").classList.remove("change");
	document.getElementById("nav1").classList.remove("change");
  document.getElementById("meni-bg").classList.remove("change-bg");


}




window.addEventListener('click', function(event){

var changeBg= document.querySelector('.change-bg');

  if(event.target === overlay){

let closemenu = document.querySelectorAll('.closemenu');
  for(var i =0; i<closemenu.length; i++){

  closemenu[i].classList.remove("change");

}

    menu.classList.remove("change");
    nav1.classList.remove("change");
    meniBg.className = 'meni-bg';

    overlay.classList.remove("overlay");

  }


})







/// OTISKIVACI


AOS.init({
        offset: 400,
        delay: 0,
        duration: 1000
      });



//// POP UP



var hideGallery = document.getElementById('hideg');
hideGallery.addEventListener('click',hidePopup);


var hideover = document.getElementById('blur');
hideover.addEventListener('click',hidePopup);


function hidePopup(){
document.getElementById('gallery-preview').classList.remove('visible');


  let nav = document.querySelector('.dg-prev');
  nav.style.display='block';

 let nav2 = document.querySelector('.dg-next');
  nav2.style.display='block';


}




window.addEventListener('load',int);

function int(){
  bindGalleryItems();
  bindKeyDown();
}




function bindGalleryItems(){
  let images = document.querySelectorAll('#galerija a');

  let index=0;
  for(let image of images){
    image.addEventListener('click',showImage);
    image.dataset.index=index;
    index++;
  }



}

function showImage(event){


  event.preventDefault();

  let link  = event.target.parentElement.href;
  let index = event.target.parentElement.dataset.index;

  console.log(link);
  let image = document.querySelector('#gallery-preview img');

  image.src = link;

  let popup = document.getElementById('gallery-preview');
  popup.dataset.currentIndex = index;

  popup.classList.add('visible');


  let nav = document.querySelector('.dg-prev');
  nav.style.display='none';

 let nav2 = document.querySelector('.dg-next');
  nav2.style.display='none';




}

function bindKeyDown(){

 window.addEventListener('keydown',keyDownHandler)

}

function keyDownHandler(event){

switch(event.key){
    case "Escape":
      hidePopup();
      break;

    case "ArrowRight":
      showNextImage();
      break;

        case "ArrowLeft":
      showPreviousImage();
      break;
  }





  }


 var nextIMG = document.getElementById('nextIMG');

  nextIMG.addEventListener('click',showNextImage);

 var prevIMG = document.getElementById('prevIMG');

  prevIMG.addEventListener('click',showPreviousImage);


function showNextImage(){

  let popup = document.getElementById('gallery-preview');
  let currentIndex = popup.dataset.currentIndex;

  let images = document.querySelectorAll('#galerija a');

  currentIndex++;

  currentIndex = currentIndex % images.length;


let link = images[currentIndex].href;

    let image = document.querySelector('#gallery-preview img');

    image.src = link;


  popup.dataset.currentIndex = currentIndex;
  popup.classList.add('visible');

 }



function showPreviousImage(){
  let popup = document.getElementById('gallery-preview');
  let currentIndex = popup.dataset.currentIndex;
   currentIndex--;

    let images = document.querySelectorAll('#galerija a');



  if(currentIndex<0){

    currentIndex = images.length-1;

  }

  let link = images[currentIndex].href;
  let image = document.querySelector('#gallery-preview img');

  image.src = link;

   popup.dataset.currentIndex = currentIndex;
   popup.classList.add('visible');


}






