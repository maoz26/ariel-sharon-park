var xmlhttp = new XMLHttpRequest();
var url = "includes/events.json";

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
		out +="<div class=\"open_cal\" id=\""+ arr[i].id +"event\">"+
			"	<button class=\"cal_button\">x סגור</button>"+
			"	<article id=\"upper_article\">"+
			"			<div id=\""+ arr[i].id +"\">"+
			"				<h5>"+ arr[i].name +"</h5>"+
			"				<h5>"+arr[i].date +"</h5>"+
			"			</div>"+
			"	</article>"+
			"	<article><p>"+arr[i].participants +"</p></article>"+
			"	<article><p>"+arr[i].phone +"</p></article>"+
			"</div>";
    }
    
    document.getElementById("mishmesh").innerHTML = out;
}


