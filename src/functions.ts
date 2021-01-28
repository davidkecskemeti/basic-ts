function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

let someValue: undefined;

let combineValues: Function;
combineValues = add;
console.log(combineValues(5, 11));

let combinedValues2: (a: number, b: number) => number;
combinedValues2 = add;
console.log(combinedValues2(2, 3));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log("RES: " + result);
});
