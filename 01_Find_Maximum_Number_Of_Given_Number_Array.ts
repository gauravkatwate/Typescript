var Numbers: number[] = [10, 30, 98, 67, 75];
var MaxNo: number = 0;
var i: number = 0;

for (i = 0; i < Numbers.length; i++) {
  if (Numbers[i] > MaxNo) {
    MaxNo = Numbers[i];
  }
}

console.log("Maximum Number Is => " + MaxNo);
