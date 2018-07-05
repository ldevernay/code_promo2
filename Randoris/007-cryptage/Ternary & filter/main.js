function crypter (text,n) {
  let start = text.split("").filter((x,i) => (i%2!=0) ).join("");
  let end = text.split("").filter((x,i) => (i%2==0)).join("");
  return n>0 ? (n--, crypter(start+end,n)) : text }

crypter("Randori enfin fini",3);



function decrypter (text,n) {
  let start = text.substring(0,text.length/2).split("");
  let end = text.substring(text.length/2,text.length).split("");
  let tempo = text.length%2 != 0 ? start.map((x,i) => end[i]+x).join("")+end[end.length-1] : start.map((x,i) => end[i]+x).join("")
  return n>0 ? (n--, decrypter(tempo,n)) : text }

decrypter(" ionaniifdiRenr nf",3);