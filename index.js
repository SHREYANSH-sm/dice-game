var randomNumber1=Math.floor((Math.random()*6)+1);
var randomeDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomeDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);



var randomNumber2=Math.floor((Math.random()*6)+1);
var randomeDiceImage1="dice"+randomNumber2+".png";
var randomImageSource1="images/"+randomeDiceImage1;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);

if(randomNumber1>randomNumber2)
document.querySelector("h1").textContent="Player 1 Wins ";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").textContent="Player 2 Wins ";
else 
document.querySelector("h1").textContent="It's a Draw ";