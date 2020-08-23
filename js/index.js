   //This is how write a comment in js
   // console.log('Hello World');
   let welcomeMsg = document.getElementById('welcome');
   let controlMsg = document.getElementById('welcome2');

   console.log(controlMsg);

   welcomeMsg.innerHTML = "<span>Calculator</span>";
   welcomeMsg.style.color = "red";
   controlMsg.innerText = "<span>Hide this Element</span>";
   function changeColor() {
      welcomeMsg.style.color = "blue";
      hideThis();
   }

   function hideThis() {
      console.log(controlMsg);
      controlMsg.style.display = "block";
   }
   console.log(welcomeMsg);
   // this is web ok


   // 2 input box
   // 1 button
   // input box alli enter madodunna add madbke
// let a = 1;
// let b = 2;
// let c = a + b;



function addNumber() {
   let num1 = Number(document.getElementById('first').value);
   let num2 = Number(document.getElementById('second').value);
   document.getElementById('res').innerHTML = num1 + num2;

   return false;
}
document.getElementById('button1').addEventListener('click', addNumber);

function subNumber() {
   let num1 = Number(document.getElementById('first').value);
   let num2 = Number(document.getElementById('second').value);
   document.getElementById('res').innerHTML = num1 - num2;

   return false;
}
   document.getElementById('button2').addEventListener('click', subNumber);

   function mulNumber() {
      let num1 = Number(document.getElementById('first').value);
      let num2 = Number(document.getElementById('second').value);
      document.getElementById('res').innerHTML = num1 * num2;

      return false;
   }
   document.getElementById('button3').addEventListener('click', mulNumber);

   function divNumber() {
      let num1 = Number(document.getElementById('first').value);
      let num2 = Number(document.getElementById('second').value);
      document.getElementById('res').innerHTML = num1 / num2;

      return false;
   }
   document.getElementById('button4').addEventListener('click', divNumber);