var colors = [
  "#9400D3",
  "#4B0082",
  "#0000FF",
  "#00FF00",
  "#FFFF00",
  "#FF7F00",
  "FF0000"
];
var isFancy = false;
var isInvert = false;

$(document).ready(function(){

    $("#top_menu").click(function(){
      topMenu = $("#top_menu");


    });

    $("*").hover(function(){
      if (isInvert) {
        console.log("hover");
        $(this).addClass("invert");
      }
    }, function(){
      if (isInvert) {
        console.log("unhover");
        $(this).removeClass("invert");
      }
    }

  );
});

function loadStylesheet(style)
{
  isInvert = false;
  isFancy = false;
  if (style == "rainbow") {
    isFancy = true;
    fancy();
  } else if (style == "invert"){
    isInvert = true;
  } else {
    document.documentElement.style.setProperty("--color", "#EFEFEF");
  }
}

async function fancy(){
  document.documentElement.style.setProperty("--color", getColor());
  await sleep(100);
  if (isFancy) {
    fancy();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function getColor() {
   return colors[
     Math.floor(Math.random() * colors.length)
   ];
}
