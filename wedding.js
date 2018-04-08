var text = [["Who?","Whom?"],["What?","Whatst?"],["Where?", "Wherefore?"],["When?","Whence?"],
			["Why?","Howcome?"],["faceswap.jpg","balloons.png"],["600","400"],["toering.jpg","sophscared.jpg"],
			["400","450"],["True Love","Became Inevitable"]];
var who = document.getElementById("who");
var what = document.getElementById("what");
var where = document.getElementById("where");
var when = document.getElementById("when");
var why = document.getElementById("why");
var who1 = document.getElementById("who1");
var what1 = document.getElementById("what1");
var where1 = document.getElementById("where1");
var when1 = document.getElementById("when1");
var why1 = document.getElementById("why1");
var imgsw = document.getElementById("imgsw");
var imgsw1 = document.getElementById("imgsw1");
var inev = document.getElementById("inevitable");
var counter = 0;

function changetext() {
  who.innerHTML = text[0][counter];
  what.innerHTML = text[1][counter];
  where.innerHTML = text[2][counter];
  when.innerHTML = text[3][counter];
  why.innerHTML = text[4][counter];
  who1.innerHTML = text[0][counter];
  what1.innerHTML = text[1][counter];
  where1.innerHTML = text[2][counter];
  when1.innerHTML = text[3][counter];
  why1.innerHTML = text[4][counter];
  imgsw1.src = text[5][counter];
  imgsw1.width = text[6][counter];
  imgsw.src = text[7][counter];
  imgsw.width = text[8][counter];
  inev.innerHTML = text[9][counter];
  counter++;
  if (counter >= text[0].length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
setInterval(changetext,3000);


