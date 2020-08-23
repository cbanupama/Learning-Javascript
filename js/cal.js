alert("Welcome");

console.log(eval('1 + 2'));

function display(val) {
   document.getElementById('ans').value = document.getElementById('ans').value + val;
}

function clr() {
    document.getElementById('ans').value = " ";
}

function solve() {
    let x = document.getElementById("ans").value;
    let answer = eval(x);
    document.getElementById("ans").value = answer;
}

