function loadDoc() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
function myFunction(response) {
    let json = JSON.parse(response.responseText);
    let table = document.getElementById('demo');
    let html = ' ';
    let heading = Object.keys(json[0]);
    html += '<tr><th>' + heading[0] + '</th><th>' + heading[1] + '</th><th>' + heading[2] + '</th><th>' + heading[3] + '</th></tr>';


for(let i =0; i < json.length; i++) {
     html += '<tr><td>' + json[i].userId + '</td><td>' + json[i].id + '</td><td>' + json[i].title + '</td><td>' + json[i].body + '</td></tr>';
}
    table.innerHTML = html;
}
