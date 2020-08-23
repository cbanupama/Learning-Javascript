function loadTodo() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    let xhtml = new XMLHttpRequest();
    xhtml.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
         xhtml.open('GET', url, true);
         xhtml.send();

}
function myFunction(todo){
    let json = JSON.parse(todo.responseText);
    let table = document.getElementById('demo');
    let html = ' ';
    let heading = Object.keys(json[0]);
    html+= '<tr><th>' + heading[0] +'</th><th>' + heading[1] +'</th><th>' + heading[2] +'</th><th>' + heading[3] +'</th></tr>';

   for (let i = 0; i < json.length; i++) {
        html+= '<tr><td>' + json[i].userId +'</td><td>' +json[i].id +'</td><td>' + json[i].title+'</td><td>' + json[i].completed+'</td></tr>';
    }
    table.innerHTML = html;
}