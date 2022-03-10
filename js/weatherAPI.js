url = "https://api.weatherbit.io/v2.0/current?city=Jeddah&key=9fb1ed892ffd436caa8f19611008a777";



function xmlResolve() {
    var res = JSON.parse(this.responseText);
    console.log(res, "XMLHttpRequest");
}

function xmlReject(err) {
    console.log("Error Message: ", err);
}
var xhr = new XMLHttpRequest();
xhr.onload = xmlResolve;
xhr.onerror = xmlReject;
xhr.open("GET", url);
xhr.send();