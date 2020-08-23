//      ******AJAX Method using to display Json data in Table format*******

// function loadUser() {
//     let xhttp = new XMLHttpRequest();
//     let url = "https://jsonplaceholder.typicode.com/users";
//     xhttp.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200) {
//             myUser(this);
//         }
//     }
//     xhttp.open("GET",url,true);
//     xhttp.send();
// }
//
// function myUser(use) {
//     let json = JSON.parse(use.responseText);
//     let table = document.getElementById('ans');
//     let html = ' ';
//     let heading = Object.keys(json[0]);
//     html += '<tr><td>' + heading[0] +'</td><td>' + heading[1] + '</td><td>' + heading[2] + '</td><td>' + heading[3]+ '</td><td>' + heading[4][0] + '</td><td>' + heading[4][1] + '</td><td>' + heading[4][2] + '</td><td>' + heading[4][3] + '</td><td>' + heading[4][4][0] + '</td><td>' + heading[4][4][1] + '</td><td>' + heading[5]+'</td></tr>';
//
//     for(let i = 0; i < json.length; i++) {
//         html += '<tr><td>' + json[i].id + '</td><td>' + json[i].name + '</td><td>' + json[i].username + '</td><td>' + json[i].email + '</td><td>' + json[i].address.street + '</td><td>' + json[i].address.suite + '</td><td>' + json[i].address.city +'</td><td>' + json[i].address.zipcode + '</td><td>' + json[i].address.geo.lat + '</td><td>' + json[i].address.geo.lng  + '</td><td>' + json[i].phone + '</td></tr>';
//     }
// table.innerHTML = html;
//     console.log(json);
// }

// *******Fetch method using to fetch Api in json data*********

// document.getElementById('loadJson').addEventListener("click", loadUser);
//
// function loadUser() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then((out) => {
//                 let table = document.getElementById('ans');
//                 let html = ' ';
//             let heading = Object.keys(out[0]);
//             html += '<tr><td>' + heading[0] +'</td><td>' + heading[1] + '</td><td>' + heading[2] + '</td><td>' + heading[3]+ '</td><td>' + heading[4][0] + '</td><td>' + heading[4][1] + '</td><td>' + heading[4][2] + '</td><td>' + heading[4][3] + '</td><td>' + heading[4][4][0] + '</td><td>' + heading[4][4][1] + '</td><td>' + heading[5]+'</td></tr>';
//
//             for(let i = 0; i < out.length; i++) {
//                 html += '<tr><td>' + out[i].id + '</td><td>' + out[i].name + '</td><td>' + out[i].username + '</td><td>' + out[i].email + '</td><td>' + out[i].address.street + '</td><td>' + out[i].address.suite + '</td><td>' + out[i].address.city +'</td><td>' + out[i].address.zipcode + '</td><td>' + out[i].address.geo.lat + '</td><td>' + out[i].address.geo.lng  + '</td><td>' + out[i].phone + '</td></tr>';
//             }
//                 table.innerHTML = html;
//             // console.log('Output: ', out);
//         }).catch(err => console.error(err));
//
// }

// using Axios

document.getElementById('loadJson').addEventListener("click", loadUser);
function loadUser() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
        // let table = document.getElementById('ans');
//                 let html = ' ';
//             let heading = Object.keys(out[0]);
//             html += '<tr><td>' + heading[0] +'</td><td>' + heading[1] + '</td><td>' + heading[2] + '</td><td>' + heading[3]+ '</td><td>' + heading[4][0] + '</td><td>' + heading[4][1] + '</td><td>' + heading[4][2] + '</td><td>' + heading[4][3] + '</td><td>' + heading[4][4][0] + '</td><td>' + heading[4][4][1] + '</td><td>' + heading[5]+'</td></tr>';
//
//             for(let i = 0; i < out.length; i++) {
//                 html += '<tr><td>' + out[i].id + '</td><td>' + out[i].name + '</td><td>' + out[i].username + '</td><td>' + out[i].email + '</td><td>' + out[i].address.street + '</td><td>' + out[i].address.suite + '</td><td>' + out[i].address.city +'</td><td>' + out[i].address.zipcode + '</td><td>' + out[i].address.geo.lat + '</td><td>' + out[i].address.geo.lng  + '</td><td>' + out[i].phone + '</td></tr>';
//             }
//                 table.innerHTML = html;
//             // console.log('Output: ', out);
//         }).catch(err => console.error(err));
        console.log(resp.data[0].name);
    });
}