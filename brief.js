var whom = ["Who?","Whom?"];
var who = document.getElementById("who");
var counter = 0;
var whatst = ["What?","Whatst?"];
var what = document.getElementById("what");
var wherefore = ["Where?", "Wherefore?"];
var where = document.getElementById("where");
var whence = ["When?","Whence?"];
var when = document.getElementById("when");
var howcome = ["Why?","Howcome?"];
var why = document.getElementById("why");
var img = ["leesoph.jpg","leesoph3.jpg"];
var imgsw = document.getElementById("imgsw");

function changetext() {
  who.innerHTML = whom[counter];
  what.innerHTML = whatst[counter];
  where.innerHTML = wherefore[counter];
  when.innerHTML = whence[counter];
  why.innerHTML = howcome[counter];
  imgsw.src = img[counter];
  counter++;
  if (counter >= whom.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
setInterval(changetext,3000);