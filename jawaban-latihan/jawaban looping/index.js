// Looping

var prompt = require("prompt-sync")();
var number = prompt("Masukkan nilai: ");
console.log("   ");

/**  Task 1
 * Faktor dari angka 10 adalah angka 1, 2, 5 dan 10.
 * Ciri-ciri faktor adalah angka tersebut habis membagi
 * 
 * Results:
 * 1, 2, 5, 10
 */

// cek angka habis membagi
// habis adalah angka habis dibagi          ==> angka % pembagi = 0

console.log("Task 1 :");
// var number = 10;
var temp = "";

for (var i = 1 ; i < number ; i++) {
      if (number % i === 0) {
          temp += i + ", ";        
        }
    }
    if (i = number) {
        temp += i;
    }    
console.log(temp);
console.log("   ");

/** Task 2
 * print segitiga
 * var n = 5
 * 
 * // Result
 * 
 * #
 * #X
 * #X#
 * #X#X
 * #X#X#
 * 
 * 
 */
  
console.log("Task 2: ")
var input = number;
// var input = 5;
var temp = ""

for (var i = 0; i < input; i++) {
    if (i % 2 === 0) {
        temp += "#";
    } else {
        temp += "X";
    }
    console.log(temp);
 }
 console.log("   ");

/** Task 3
 * print sebuah kota
 * var input = 5;
 * 
 * // Result
 * #####
 * #   #
 * #   #
 * #   # 
 * #####
 * 
 */


console.log("Task 3: ")
// var input = 5;
var temp = "";

for (var i = 0; i < input; i++) {
    if (input / (i + 1) == input || input / (i + 1) == 1) {
      for(var j = 0; j < input; j++) {
                temp += "#";
        }
     } else {
        temp = "#";
        for(var j = 1; j < input - 1; j++) {
            temp += " ";
        }
        temp = temp +"#";
    }
    console.log(temp)
    temp = ""
}
console.log("   ");


