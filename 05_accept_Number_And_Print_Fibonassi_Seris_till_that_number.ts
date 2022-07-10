function main() {
  var num: number = 21;
  fibonassi(num);
}

function fibonassi(num: number) {
  var i: number = 0;
  var j: number = 1;
  var k: number = i + j;
  var m: number = 0;

  console.log(i);
  console.log(j);
  for (m = 3; m <= num; ++m) {
    console.log(k);
    if (k == num) {
      break;
    }
    i = j;
    j = k;
    k = i + j;
  }
}

main();
