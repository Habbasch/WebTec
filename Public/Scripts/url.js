var contentDiv;
var rootUrl;

$(document).ready(function(){
  contentDiv = $("#content");
  rootUrl = window.location.href;
  console.log("DOC ready");
  contentDiv.on("DOMSubtreeModified", function(){
      console.log("change url");
      window.history.pushState(contentDiv.html(), "Updated HSLU WebTec", rootUrl + "/" + contentDiv.val());
  })
})
