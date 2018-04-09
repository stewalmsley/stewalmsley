const text = [["Who?","Whom?"],["What?","Whatst?"],["Where?", "Wherefore?"],["When?","Whence?"],
      ["Why?","Howcome?"]];
const existing = document.getElementsByClassName("switch");
const images = [["leesoph4.jpg","leesoph2.jpg"]];
const imgsw = document.getElementsByClassName("imgsw");
let num = 0;
let counter = 0;
const chgtext = () => {
      num = 0;
      do {
      existing[num].innerText = text[num][counter];
      num ++;
    }
    while (num < existing.length);
  }
const chgimg = () => {
  num = 0;
    do {
      imgsw[num].src = images[num][counter];
      num ++;
    }
    while (num < images.length);
}
const change = () => {
  counter ++ ;
  if (counter >= text[0].length) {
    counter = 0;
  }
    chgtext();
    chgimg();
}
setInterval(change,3000);
