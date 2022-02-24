
$(".button").click(function(){
            var audio = new Audio();
            audio.src = 'sounds/bonapp.mp3';
            audio.autoplay = true;

            return true;
        });

let btn = $("button");
        btn.mouseenter(function(){
          $(this).css("background-color", "#c3d4b4");
        });
        btn.mouseleave(function(){
          $(this).css("background-color", "lightgray");
        });