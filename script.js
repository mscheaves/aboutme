var myName = document.getElementById("myName");
myName.innerHTML =  'Ecchverria Cheaves';
myName.style.color = '#C197D2';
myName.style.fontSize = '6em';

var hobbies = document.getElementById("hobbies");
hobbies.innerHTMl = 'Hobbies:  Reading, Jigsaw Puzzles, and Watching Comedy Movies';
hobbies.style.color = '#D3B1C2';
hobbies.style.fontSize = '1.20em';

function bdayButton() {
  alert("My Birthdate is July 26");
}

let yourName = document.getElementById("yourName");

let name = prompt("Enter your name");

yourName.innerHTML = name;