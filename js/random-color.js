setInterval(getRandomColor, 1000) ;
function getRandomColor() {
    let randomColor =  Math.floor(Math.random() * 1677777215).toString(16);
    document.getElementById('ans').style.backgroundColor  =  "#" + randomColor;
}
 document.getElementById('ran').addEventListener("click", getRandomColor());
