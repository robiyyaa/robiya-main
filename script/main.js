mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// звук
const mus = new Audio('sounds/mouseclick.mp3')
function soundClick() {
  $('#overview').click(function(){
    mus.play();

      });
}

const mus1 = new Audio('sounds/mouseclick.mp3')
function soundClick1() {
  $('#flowers').click(function(){
    mus1.play();

      });
}


// ---------------









  // function slowScroll(id) {
  //   $('html, body').animate({
  //     scrollTop: $(id).offset().top
  //   }, 3000);
  // }
  // $(document).on("scroll", function () {
  //   if($(window).scrollTop() === 0)
  //   $("header").removeClass("fixed");
  //   else {
  //     $("header").attr("class", "fixed");
  //   }
  // });
