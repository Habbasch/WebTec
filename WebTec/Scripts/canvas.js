var canvas;
var ctx;
var answers = [
  "Yes you should",
  "Just do it",
  "That's stupid",
  "No.",
  "Sounds good",
  "Better not",
  "Definitely",
  "Luzia"
];

function initCanvas(){
  canvas = document.getElementById("magicShell");
  ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.strokeStyle = '#EEEEEE';
  drawCanvas();
}

function drawCanvas(){
  var spongebobBackground = new Image();
  var magicShell = new Image();
  spongebobBackground.onload = function() {
    ctx.drawImage(spongebobBackground, 0, 0);
    magicShell.src = "../Pictures/magicShell.png";
  };

  magicShell.onload = function() {
    ctx.drawImage(magicShell, 400, 400);
  };
  spongebobBackground.src = "../Pictures/spongebobBackground.png";
}

$(document).ready(function(){
  $("#magicShell").mousedown(function(){
    drawCanvas();
    drawLine(event.pageX,event.pageY - 100);
    drawCircle(event.pageX, event.pageY - 100);
    console.log("finished drawing");
  }).mouseup(function(){
    //drawLine(event.pageX,event.pageY - 100);
    //drawCircle(event.pageX, event.pageY - 100);

    ctx.fillText(getRandomAnswer(),10,50);
  });
});

function drawLine(posX, posY){
  ctx.moveTo(677,545);
  ctx.lineTo(posX, posY);
  ctx.lineWidth = 5;
  ctx.stroke();
}

function drawCircle(posX, posY){
  ctx.beginPath();
  ctx.arc(posX, posY, 10, 0, 2*Math.PI);
  ctx.stroke();
}

function getRandomAnswer(){
  return answers[
    Math.floor(Math.random() * answers.length)
  ];
}
