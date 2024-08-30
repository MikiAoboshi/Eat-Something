var randomNumber = Math.floor(Math.random()*6) + 1;
var randomImg = "images/" + randomNumber + ".png";
document.querySelector("img").setAttribute("src",randomImg);