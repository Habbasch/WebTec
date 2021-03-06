
var relPath = "../Content/";
var lastStylesheet;
var style = "default";

$(document).ready(function(){
  readCookie();
  getHtmlContent("home.html");
  loadStylesheet(lastStylesheet[1]);

  $(".home").click(function(){
    getHtmlContent("home.html");
  });
  $(".form").click(function(){
    getHtmlContent("form.html");
  });
  $(".canvas").click(function(){
    getHtmlContent("canvas.html");
  });
  $(".textImage").click(function(){
    getHtmlContent("textImage.html");
  });
  $(".jQuery").click(function(){
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

function switchStyle(pStyle)
{
  console.log(pStyle);
  style = document.cookie.split('=')[1];
  if (style == pStyle){
    document.cookie = "stylesheet=default";
    style = "default";
    pStyle = "default";
    console.log("default");
  } else {
    document.cookie =  "stylesheet=" + pStyle;
    style = pStyle;
    console.log(pStyle);
  }
  //console.log(style);
  loadStylesheet(pStyle);
}
