
const appleaudio= new Audio("sounds/apple-pay-success.mp3");

function soundClick1() {
  $('#order1').click(function(){
    appleaudio.play();
  document.getElementById("order1").innerHTML="В корзине";
      });

}
function soundClick2() {
  $('#order2').click(function(){
    appleaudio.play();
  document.getElementById("order2").innerHTML="В корзине";
      });

      }


function soundClick3() {
  $('#order3').click(function(){
    appleaudio.play();
    document.getElementById("order3").innerHTML="В корзине";

      });


}
function soundClick4() {
  $('#order4').click(function(){
    appleaudio.play();
  document.getElementById("order4").innerHTML="В корзине";
      });
}
function soundClick5() {
  $('#order5').click(function(){
    appleaudio.play();
  document.getElementById("order5").innerHTML="В корзине";
      });
}
function soundClick6() {
  $('#order6').click(function(){
    appleaudio.play();
  document.getElementById("order6").innerHTML="В корзине";
      });
}



// function mOver(obj)
//        {
//        obj.innerHTML="<div id='help_container'><button id='close'>X</button><p id='help_text'>Help Text</p></div>"
//        }
//
//        function mOut(obj)
//        {
//        obj.innerHTML="<button id='button' onmouseover='mOver(this)' onmouseout='mOut(this)'>?</button>"
//        }
// $(function () {
// 	  $('.real-show-hint').on("mouseover mouseout", function(e){
// 	  	e = e || window.event;
// 	  	e.preventDefault();
// 	  	var ypos = $(this).offset().top+24;
// 	  	var xpos = $(this).offset().left;
// 	  	var RealHint =  $(this).data('hint');
// 	  	$(RealHint).css('top',ypos);
// 	  	$(RealHint).css('left',xpos);
// 	  	$(RealHint).toggle('fast');
// 	  	return;
// 	  	});
//
// 	  $('.prm-cross').on('click', function(){
// 	  	$(this).parent().hide('fast');
// 	  	return false;
// 	  });
//
// 	  document.onclick = function(e){
// 	  	if ($(e.target).hasClass('real-hint')==false)
// 	  	$('.real-hint').hide('fast');
// 	  	return;
// 	  }
// 	});
//
//
//   $(function(){
//       $("[data-tooltip]").mousemove(function (eventObject) {
//           $data_tooltip = $(this).attr("data-tooltip");
//           $("#tooltip").html($data_tooltip)
//               .css({
//                 "top" : eventObject.pageY + 5,
//                 "left" : eventObject.pageX + 5
//               })
//               .show();
//           }).mouseout(function () {
//             $("#tooltip").hide()
//               .html("")
//               .css({
//                   "top" : 0,
//                   "left" : 0
//               });
//       });
// });
// function tip (tipOn, event) {
// 	var tipText = document.getElementById("theTip");
// 	var tipOn = document.getElementById("tipOn");
// 	tipOn.appendChild(tipText);
//   if (document.addEventListener) {
//
// 		tipOn.addEventListener("mouseover",showTip,true);
// 		tipOn.addEventListener("mouseout",hideTip,true);
//
// 	} else if (document.attachEvent) {
//
// 		tipOn.setCapture();
// 		tipOn.attachEvent("onmouseover", showTip);
// 		tipOn.attachEvent("onmouseout", hideTip);
//
// 	}
//
// 	if (event.stopPropagation) event.stopPropagation();
// 	else event.cancelBubble=true;
//
// 	if (event.preventDefault) event.preventDefault();
// 	else event.returnValue=false;
//
//
//   function showTip (e) {
// 		if (!e) e = window.event;
// 		tipText.style.display = "block";
// 		tipText.style.left = e.clientX;
// 		tipText.style.top = e.clientY + 5 + "px";
// 		tipOn.style.cursor = "help";
// 	}
//
// 	function hideTip (e) {
// 		if (!e) e = window.event;
// 		tipText.style.display = "none";
//
//     if (document.removeEventListener) {
//
// 			document.removeEventListener("mouseover", showTip, true);
// 			document.removeEventListener("mouseout", hideTip, true);
//
// 		} else if (document.detachEvent) {
//
// 			tipOn.detachEvent("onlosecapture", showTip);
// 			tipOn.detachEvent("onmouseover", showTip);
// 			tipOn.detachEvent("onmouseout", hideTip);
// 			tipOn.releaseCapture();
//
// 		}
//
// 		if (e.stopPropagation) e.stopPropagation();
// 		else e.cancelBubble = true;
// 	}
// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }
//
// function colorwuw{
//   var change = document.querySelector('.block');
//
//   change.addEventListener('mouseenter', function () {
//       block.classList.add('color1');
//   });
//   change.addEventListener('mouseleave', function () {
//       block.classList.remove('color1');
//   });
// }
// var colorsExamples = anime.timeline({
//   endDelay: 1000,
//   easing: 'easeInOutQuad',
//   direction: 'alternate',
//   loop: true
// })
// var colorsExamples = anime.timeline({
//   endDelay: 1000,
//   easing: 'easeInOutQuad',
//   direction: 'alternate',
//   loop: true
// })
// .add({ targets: '#footer-menu',  background: '#FFF' }, 0)
