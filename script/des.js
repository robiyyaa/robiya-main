
const appleaudio= new Audio("sounds/apple-pay-success.mp3");

function soundClick1() {
  $('#order1').click(function(){
    appleaudio.play();

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
