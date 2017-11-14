
var relPath = "../Content/";
var lastStylesheet;
var style;

$(document).ready(function(){
  readCookie();
  loadStylesheet(lastStylesheet[1]);

  $("#home").click(function(){
    getHtmlContent("home.html");
  });
  $("#form").click(function(){
    getHtmlContent("form.html");
  });
  $("#canvas").click(function(){
    getHtmlContent("canvas.html");
  });
  $("#textImage").click(function(){
    getHtmlContent("textImage.html");
  });
  $("#jQuery").click(function(){
    getHtmlContent("jQuery.html");
  });
  $(".icon").click(function(){
    var topMenu = $("#top_menu");
    console.log(topMenu.attr('class'));
    if (!topMenu.hasClass("responsive")) {
        topMenu.addClass("responsive");
    } else {
        topMenu.removeClass("responsive");
    }
  });
});

function getHtmlContent(contentId)
{
  contentDiv = $("#content");
  errorDiv = $("#error");
  errorDiv.empty();
  url = relPath + contentId;

  $.ajax(url)
    .done(function(data){
      console.log(data)
      contentDiv.val(contentId);
      contentDiv.html(data);
    })
    .fail(function(){
      console.log("error");
      errorDiv.html("An unexpected error occurred while loading data for " + url)
    })
}

function readCookie()
{
  var cookies = document.cookie.split(";");
  lastStylesheet = cookies[0].split("=");
}

function switchStyle()
{
  if (style == "default"){
    document.cookie = "stylesheet=fancy";
    style = "fancy";
    console.log("fancy");
  } else {
    document.cookie = "stylesheet=default";
    style = "default";
    console.log("default");
  }
  console.log(style);
  loadStylesheet(style);
}
