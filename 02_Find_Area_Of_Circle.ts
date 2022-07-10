var rad: number;
var PI: number = 3.14;
var ans: number;

rad = 5;
ans = Area(rad, PI);
console.log("Area Of Circle Is => " + ans);

function Area(rad: number, PI: number): number {
  console.log(rad);
  var Area: number;
  Area = PI * (rad * rad);
  return Area;
}
