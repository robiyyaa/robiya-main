
$('#main').hide();
  $('#main').slideToggle(1300);

  const audio= new Audio("sounds/apple-pay-success.mp3");
  function soundClick() {
    $('#overview').click(function(){
      audio.play();
        });
  }


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






// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






  function slowScroll(id) {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 3000);
  }
  $(document).on("scroll", function () {
    if($(window).scrollTop() === 0)
    $("header").removeClass("fixed");
    else {
      $("header").attr("class", "fixed");
    }
  });
