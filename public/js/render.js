

// Rendering html by id
var html = function(params){
  document.getElementById(params.idTag).innerHTML = params.htmlContent;
}

//Gennerate html content for the Navbar from this Callback
function drawNav (object){
  var resultTemplate = "";
  resultTemplate += "<ul class=\"nav-items\">";
  object.items.forEach(function(item) {
    var subItems = item.items;
    var SubItemsHtml = "";
    var caret = "<span class=\"fa fa-caret-down\" aria-hidden=\"true\"></span>";
    if(subItems.length>0){
      SubItemsHtml += "<ul class=\"nav-subitems\">";
      subItems.forEach(function(item) {
        SubItemsHtml +=  "<li><a href=\"" + item.url + "\">" + item.label + "<span class=\"fa fa-circle\"></span></a></li>";
      });
      SubItemsHtml +=  "</ul>";
    }else{
      caret = "";
    }
    //SubItemsHtml = "";
    resultTemplate +=  "<li><a href=\"" + item.url + "\">" + item.label + " " + caret + "</a>" + SubItemsHtml + "</li>"

  });
  resultTemplate +=  "</ul>";

  // Calling html function for rendering html content 
  html({
    idTag: "navbar",
    htmlContent: resultTemplate
  });
}
