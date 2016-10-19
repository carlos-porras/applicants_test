/*
* Http Class
*/

var Http = function(){


  //Http get method for retrieve the json
  this.get = function(params){
    ajax(params);
  };

  var ajax = function(params, type){

    //Default request type
    type = type || "GET";

    // Setting data type in the response data (any default, or other options). "For this case type"
    params.dataType = params.dataType || "";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        //Validating type of response with a switch
        switch (params.dataType) {
          case "json":
            var response = JSON.parse(this.responseText);
            params.callback(response);
            break;
          default:
            params.callback(this.responseText);

        }

      }
    };
    xhttp.open(type , params.url, true);
    xhttp.send();
  }
}

// Created the Http object
var h = new Http();
