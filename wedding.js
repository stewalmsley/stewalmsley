const text = [["Who?","Whom?"],["What?","Whatst?"],["Where?", "Wherefore?"],["When?","Whence?"],
      ["Why?","Howcome?"],["Who?","Whom?"],["What?","Whatst?"],["Where?", "Wherefore?"],["When?","Whence?"],
      ["Why?","Howcome?"],["True Love","Became Inevitable"],
      ];
const width = [["400","450"],["600","400"]];
const images = [["toering.jpg","sophscared.jpg"],["faceswap.jpg","balloons.png"]];
const existing = document.getElementsByClassName("switch");
const widen = document.getElementsByClassName("widen");
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
const chgwidth = () => {
  num = 0;
    do {
      widen[num].width = width[num][counter];
      num ++;
    }
    while (num < widen.length);
}
const change = () => {
  counter ++ ;
  if (counter >= text[0].length) {
    counter = 0;
  }
    chgtext();
    chgimg();
    chgwidth();
}
setInterval(change,3000);


