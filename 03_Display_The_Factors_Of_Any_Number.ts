var Num: number = 20;

console.log("Factors Of Given Number Is =>");
DispalyFactors(Num);

function DispalyFactors(no: number) {
  var j: number = no / 2;
  while (j != 0) {
    if (no % j == 0) {
      console.log(j);
    }
    j--;
  }
}
