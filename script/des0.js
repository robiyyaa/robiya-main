//assel:
// function soundClick() {
//   var appleaudio = new Audio();
//   appleaudio.src = 'apple-pay-success';
//   appleaudio.autoplay = true; //audio.play();
// }
const appleaudio= new Audio("apple-pay-success.pm3");
// let starter =1;
// $
  $('#order').click(function(){
if (appleaudio.paused ==true) {
  appleaudio.play();
  }
  else {
    appleaudio.pause();
  }
  });
