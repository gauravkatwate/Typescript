function main() {
  var num: number = 29;
  var flag: boolean = false;

  if (CheckPrime(num, flag)) {
    console.log(num + " Is Prime Number");
  } else {
    console.log(num + " IS Not Prime Number");
  }
}

function CheckPrime(no: number, flag: boolean): boolean {
  var i: number = 0;
  for (i = 2; i <= no / 2; i++) {
    if (no % i == 0) {
      flag = false;
      break;
    } else {
      flag = true;
    }
  }
  return flag;
}

main();
