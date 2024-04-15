"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
const string1 = "avacado";
const string2 = "zucini";
console.log(string1 == string2);
console.log(string1 !== string2);
// • Tests using the lower case function
const MixedcaseString = "Hina School";
console.log(MixedcaseString.toLocaleLowerCase()
    === "hina school");
console.log(MixedcaseString.toLocaleLowerCase()
    !== "hina school");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 20;
const num2 = 15;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
// • Tests using "and" and "or" operators
const Condition1 = true;
const Condition2 = false;
console.log(Condition1 && Condition2);
console.log(Condition1 || Condition2);
// • Test whether an item is in a array
// • Test whether an item is not in a array
const fruits = ["Apple", "oranges", "banana", "graps"];
console.log(fruits.includes("Apple"));
console.log(fruits.includes("apple"));
