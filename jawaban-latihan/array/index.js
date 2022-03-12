// Array

/** Task 1a : Arloji Collection
 * let watches = ["Switch Army", "Daniel Wellington", "Dublot"]
 * 
 * Hasil : Saya punya Swiss Army, Daniel Wellington, dan Dublot.
 * 
 * 1. Result di print dalam 1 string
 * 2. Tanda ',' (koma) dan '.' (titik) harus sesuai
 *  
*/

var watches = ["Swiss Army", "Daniel Wellington", "Dublot"];
var tempStr = ""

for (var i = 0; i < watches.length; i++) {
    if(i < watches.length-1) {
        tempStr += watches[i] + ", ";
    } else {
        tempStr += "dan " + watches[i] + ".";
    }       
}
console.log("------------- ");
console.log(" ");
console.log("Task 1:")
console.log(" ");
console.log("Saya punya " + tempStr);

/** Task 1b : Arloji Collection
 * let arloji = ['A', 'B', 'C', 'D', 'E']
 * 
 * Hasil : Saya punya A, B, C, D, E.
 * 
*/

var arloji = ['A', 'B', 'C', 'D', 'E'];
var tempStr = ""

for (var i = 0; i < arloji.length; i++) {
    if(i < arloji.length-1) {
        tempStr += arloji[i] + ", ";
    } else {
        tempStr += "dan " + arloji[i] + ".";
    }       
}
console.log("Saya punya " + tempStr);
console.log(" ");
console.log("------------- ");
console.log(" ");

/** Task 2 : Array menjadi alphabeth
 * let fruits = ["cherry", "blueberry", "avocado", "apple", "cranberry"]
 * 
 * Result
 * ["avocado", "apple"],
 * ["blueberry"],
 * ["cherry", "cranberry"]
 * 
*/


// Test 1

// var fruits = ["cherry", "blueberry", "avocado", "apple", "cranberry"];
// var tempA = [];
// var tempB = [];
// var tempC = [];
// var str = "";

// for (var  i = 0; i < fruits.length; i++) {
//     for (var j = 0; j < fruits.length; j++) {
//         str = fruits[j];
//         var res = str.substring(0, 1);
//         switch (res) {
//             case "a":
//                tempA.push(str);
//                 str = "";
//                 break;
//             case "b":
//                 tempB.push(str);
//                 str = "";   
//                 break;
//             case "c":
//                tempC.push(str);
//                 str = "";   
//                 break;
//             default:
//                 str = "";
// 
//            }
//        }
// }
// console.log(" ");
// console.log(tempA);
// console.log(tempB);
// console.log(tempC);
// console.log(" ");

// Test 2

var fruits = ["cherry", "blueberry", "avocado", "apple", "cranberry"];
var tempA = [];
var tempB = [];
var tempC = [];
var str = "";

for (var  i = 0; i < fruits.length; i++) {
        str = fruits[i];
        var res = str.substring(0, 1);
        switch (res) {
            case "a":
                tempA.push(str);
                str = "";
                break;
            case "b":
                tempB.push(str);
                str = "";   
                break;
            case "c":
                tempC.push(str);
                str = "";   
                break;
            default:
                str = "";

            }
        }
console.log("Task 2: ")
console.log(" ");
console.log(tempA);
console.log(tempB);
console.log(tempC);
console.log(" ");
console.log("------------- ");
console.log(" ");

/** Task 3 : pecah kalimat menjadi per kata, masukkan ke dalam array
 * let kalimat = "belajar bersama dunia coding yuk"; 
 * 
 * Result : 
 * ["belajar", "bersama", "dunia", "coding", "yuk"]
 */


var kalimat = "belajar bersama dunia coding yuk"; 
var tempStr = "";
var tempArray = [];

for ( var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== " ") {
        tempStr += kalimat[i];
    } else {
        tempArray.push(tempStr);
        tempStr = "";
    }
    if ( i === kalimat.length -1) {
        tempArray.push(tempStr);
        tempStr = "";
    }
}
console.log("Task 3: ");
console.log(" ");
console.log(tempArray);
console.log(" ");
console.log("------------- ");
console.log(" ");




