var xmlhttp = new XMLHttpRequest();
var url = "includes/auction.json";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "";

    for(i = 0; i < arr.length; i++) {
        out += "<section class=\"mihraz\"><p>" +
        arr[i].name +
        "</p><a href=\"pdf/" +
        arr[i].url +
        "\" class=\"download\"> הורד </a></section>";
    }
    
    document.getElementById("dynamicDiv").innerHTML = out;
}
