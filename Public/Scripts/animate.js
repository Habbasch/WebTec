var colors = [
  "#9400D3",
  "#4B0082",
  "#0000FF",
  "#00FF00",
  "#FFFF00",
  "#FF7F00",
  "FF0000"
];

$(document).ready(function(){
    $("h1").mouseenter(function(){
        $(this).css("color", "green");
  }).mouseleave(function(){
        $(this).css("color","red");
    });

    $("#top_menu").click(function(){
      topMenu = $("#top_menu");


    });
});

function loadStylesheet(style)
{
  if (style == "fancy") {
    isFancy = true;
    fancy();
  } else {
    isFancy = false;
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
