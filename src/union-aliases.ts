function combine(n1: number | string, n2: number | string) {
  let result;

  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combiedNames = combine("Max", "Anna");
console.log(combiedNames);

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine2(
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;

  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
}

const combinedAges2 = combine2(30, 26, "as-number");
console.log(combinedAges2);

const combinedAges3 = combine2(30, "26", "as-number");
console.log(combinedAges3);

const combiedNames2 = combine2("Max", "Anna", "as-text");
console.log(combiedNames2);
