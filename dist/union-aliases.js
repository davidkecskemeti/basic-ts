"use strict";
function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combiedNames = combine("Max", "Anna");
console.log(combiedNames);
function combine2(n1, n2, resultConversion) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
}
var combinedAges2 = combine2(30, 26, "as-number");
console.log(combinedAges2);
var combinedAges3 = combine2(30, "26", "as-number");
console.log(combinedAges3);
var combiedNames2 = combine2("Max", "Anna", "as-text");
console.log(combiedNames2);
//# sourceMappingURL=union-aliases.js.map