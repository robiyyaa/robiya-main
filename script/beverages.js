const music1 = new Audio('sounds/waltz.mp3')
const music2 = new Audio('sounds/bonapp.mp3')
$('#welcomen').hide();
$('#welcomen').toggle(2000);

function music1Toggler() {
    if (music1.paused == true) {
        music1.play();
    } else {
        music1.pause();
    } 
 }
 
let x = 1;
$(document).mouseover(function () { 
    if (x == 1) {
        music1Toggler();

        if (music1.paused == false) {
            x = 0;
        }
    }
});

$('#about').mouseover(function () { 
    $('#about').css('transform', 'scale(1.02)');
});

$('#about').mouseout(function () { 
    $('#about').css('transform', 'scale(1)');
});

$('#waltzToggler').click(function () { 
    music1Toggler();
});

$(document).keypress(function (e) { 
    if (e.key == 'm' || e.key == 'ь') {
        music1Toggler();
    }
});

$('.custom-button').click(function (e) { 
    music2.play();
});

// how to w3
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }