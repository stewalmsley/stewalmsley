const text = [["Who?","Whom?"],["What?","Whatst?"],["Where?", "Wherefore?"],["When?","Whence?"],
      ["Why?","Howcome?"],["Who?","Whom?"],["What?","Whatst?"],["Where?", "Wherefore?"],["When?","Whence?"],
      ["Why?","Howcome?"],["True Love","Became Inevitable"],
      ];
const width = [["400","0"],["0","450"],["600","0"],["0","400"]];
const appear = document.getElementsByClassName("hidden");
const existing = document.getElementsByClassName("switch");
const widen = document.getElementsByClassName("widen");
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
const chgfont = () => {
  num = 0;
    do {
      appear[num].classList.toggle("hide");
      num ++;
    }
    while (num < appear.length);
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
    chgwidth();
    chgfont();
}
setInterval(change,3000);


