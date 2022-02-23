//assel:
// function soundClick() {
//   var appleaudio = new Audio();
//   appleaudio.src = 'apple-pay-success';
//   appleaudio.autoplay = true; //audio.play();
// }
const appleaudio= new Audio("sounds/apple-pay-success.mp3");
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
