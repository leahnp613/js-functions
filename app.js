/* 
Exercise 1 (completed below):
  -Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.
*/

function maxOfTwoNumbers(x, y) {
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else {
    return x;
  }
}

// or more "elegantly" using the fantastic ternary expression:
// function maxOfTwoNumbers(x, y) {
//   return  x >= y ? x : y;
// }

console.log("Exercise 1 Result:\n", maxOfTwoNumbers(3, 9));

/* 
Exercise 2:
  - Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
*/

function maxOfThree(...args) {
  args = args.sort((a, b) => a - b);
  return args.at(-1);
}

console.log("Exercise 2 Result:\n", maxOfThree(3, 9, 16));

/* 
Exercise 3: 
  - Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
*/
const vowels = ["a", "e", "i", "o", "u"];
function isCharAVowel(char1) {
  return vowels.includes(char1.toLowerCase());
}

console.log(
  `Exercise 3 Result:
 E: ${isCharAVowel("E")}
 m: ${isCharAVowel("m")}
 o: ${isCharAVowel("o")}
 t: ${isCharAVowel("t")}
 i: ${isCharAVowel("i")}
 v: ${isCharAVowel("v")}
 e: ${isCharAVowel("e")}
 T: ${isCharAVowel("T")}
 u: ${isCharAVowel("u")}
 n: ${isCharAVowel("n")}
 a: ${isCharAVowel("a")}`
);

/* 
Exercise 4: 
  - Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
*/
function sumArray(array) {
  return array.reduce((previous, current) => previous + current, 0);
}
console.log("Exercise 4 Result:\n", sumArray([2, 5, 15, 20]));

/* 
Exercise 5:
  - Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
*/
function multiplyArray(arrayNum) {
  return arrayNum.reduce((previous, current) => previous * current, 1);
}

console.log("Exercise 5 Result:\n", multiplyArray([2, 6, 12]));

/*
Exercise 6:
  - Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
*/
function numArgs(arrayArgs) {
  return arrayArgs.length;
}
console.log(
  `Exercise 6 Result: 
 ${numArgs("Hello.", "I", "would", "like", "one", "taco", "plz.")}
 ${numArgs("Sir, you may not only order one taco here.")}
 ${numArgs("Fine.", "What else do you have?", "I would like my taco.")}
 ${numArgs("Nothing.", ":)")}
 ${numArgs("Noooooo!", "Foiled again!", "One day I will eat a taco!")}`
);

/*
Exercise 7:
  - Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".
*/
function reverseString(string1) {
  return string1.split("").reverse().join("");
}
console.log("Exercise 7 Result:\n", reverseString("!stratpoP taeh ton oD"));

/* 
Exercise 8:
  - Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.
*/
function longestStringInArray(arrayStrings) {
  return;
}

console.log(
  "Exercise 8 (with O(N)?) Result:\n",
  longestStringInArray(["Please", "do", "not", "pet", "the", "taco", "cat"])
);

console.log(
  "Exercise 8 using sort (with O(NlogN) depending on your browser) Result:\n",
  longestStringInArray2(["Please", "do", "not", "pet", "the", "taco", "cat"])
);

console.log(
  "Seems like Google and Firefox use different sorting algorithms\n Firefox uses mergesort while Chrome uses a mix of merge and insertion"
);

/* 
Exercise 9: 
  - Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
*/

console.log(
  "Exercise 9 Result:\n",
  stringsLongerThan(["say", "goodnight", "whenever", "you", "like"], 3)
);
