// FUnction

// function hello(name) {
//     console.log("Hello, " + name)
// }

// invoke function / call function
// hello("admin")

/**Study Case 1
 * 
 * Tentukan faktor-faktor dari sebuah angka.
 * 
 * Contoh:
 * 
 * function factor(n){
 *  // code here
 * }
 * 
 * Result:
 * factor(10)
 * // 1 2 5 10
 */

// function factor(n) {
//     for(var i = 1; i <= n; i++) {
//         if(n % i ===0){
//             console.log(i)
//         }
//     }
// }

// factor(1000000);

/**STudy Case 2 
 * 
 * Buat 2 function untuk cek apakah sebuah bilangan Prima atau tidak.
 * 
 * Task:
 * - function checkFactor(n) untuk menentukan jumlah faktornya
 * - function checkPrime(n) untuk cek bilangan prima atau tidak (main function) 
*/

// function checkFactor(n) {
//     let countFactor = 0;
//     for (var i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             countFactor++;
//         }
//     }
//     return countFactor;
// }

// // Pengertian Bilangan Prima : bilangan yang hanya memiliki 2 faktor: 1 dan bilangan itu sendiri
// function checkPrime(n) {
//     let jumlahFaktor = checkFactor(n);
//     if (jumlahFaktor === 2) {
//         return "Bilangan Prima"
//     } else {
//         return "Bilangan Bukan Prima / Bilangan Komposit"
//     }
// }

// console.log(checkPrime(5))


/** Task 1 : Bilangan Prima 
 * Print N bilangan angka prima pertama
 * 
 * Test case
 * printPrime(5)
 * 2 3 5 7 11
 * 
 */

 function checkFactor(n){
    let countFactor = 0;
    for(var i = 1; i<= n; i++){
        if(n % i === 0){
            countFactor++;
        }
    }
    return countFactor;
}

// Pengertian Bilangan Prima : bilangan yang hanya memiliki 2 faktor: 1 dan bilangan itu sendiri
function checkPrime(n){
    let jumlahFaktor = checkFactor(n);
    if(jumlahFaktor === 2){
        return true
    } else {
        return false
    }
}

function printNumbers(num) {
    let i = 1;
    let hitung = 1;
    let tempArray = [];    
while ( i <= num) {
    var prima = checkPrime(hitung);
    if ( prima === false) {
        hitung++;
    } else {
    if ( prima === true) {
        tempArray.push(hitung);
        hitung++;
        i++;
        }
    }
   
}
console.log(tempArray);
}


console.log("------------- ");
console.log(" ");
console.log("Task 1:")
console.log(" ");
printNumbers(5)
console.log(" ");
console.log("------------- ");



/** Task 2 : Triple Pythagoras
 * 3^2 + 4^2 = 5^2 => 9 + 16 = 25
 * 6^2 + 8^2 = 10^2 => 36 + 6 = 100
 * 
 * function triple(a, b, c)
 * 
 * console.log(triple(3,4,5)) // true
 * console.log(triple(3,3,3)) // false
 *  * 
 */


function triple(a,b,c) {
    let num_a = a ** 2;
    let num_b = b ** 2;
    let num_c = c ** 2;
    let result = ""
    if ((num_a + num_b) == num_c) {
    let result = "true";
    console.log(result);
    } else {
    let result = "false";
    console.log(result);
    }
    return result;
}

console.log(" ");
console.log("Task 2:")
console.log(" ");
console.log(triple(3,4,5));
console.log(" ");
console.log("------------- ");


/** Task 3 : Pasangan terbesar
 * splitToArray : mengambil pasangan angka ke dalam array
 * contoh:
 *      let input = "5279312" -> [52,27,79,93,31,12]
 * 
 * findTheLargest : function utama menghasilkan number
 * 
 * function splitArray(string) {
 * }
 * 
 * function findTheLargest(string) {
 * let arrayNumbers = splitToArray(string);
 * }
 *  
 */


// Test # 1
// ------------------------------------
// var input = "5279312";
// var input = "313282787";
// var input = "19";
// var input = "7";
// var input = "";

// var angka1 = 0;
// var angka2 = 0;
// var besar = 0;
// var hasil = "";

// if (input.length = 1) {
//     input = "00" + input;
// }

// for (var i = 0; i < input.length-1; i++) {
//     if (i % 2 === 0) {
// //        console.log(input[i]+input[i+1]);
//         angka1 = Number(input[i] + input [i+1]);
//         console.log("angka1 = " + angka1);
//     } else {
// //        console.log(input[i]+input[i+1]);
//         angka2 = Number(input[i] + input [i+1]);
//         console.log("angka2 = " + angka2);
//     }
    
// if (besar < angka1) {
//     besar = angka1;
// } else {
//     if (besar < angka2) {
//     besar = angka2;
//     }
// }    

// }

// if (besar <= 0) {
//     hasil = "Input number";
// } else {
//     hasil = (besar).toString();
// }

// console.log(" ");
// console.log("Task 3:")
// console.log(" ");
// console.log("besar = " + besar);
// console.log("hasil = " + hasil);
// console.log(" ");
// console.log("------------- ");


// Test # 2
// ------------------------------------
// var input = "5279312";
// var input = "313282787";
// var input = "19";
// var input = "7";
// var input = "";

// var angka1 = 0;
// var angka2 = 0;
// var besar = 0;
// var hasil = "";

function splitToArray(input) {
    let angka = 0;
    let besar = 0;
    let hasil = "";

if (input.length = 1) {
    input = "00" + input;
    }

for (var i = 0; i < input.length-1; i++) {
    if (i % 2 === 0) {
//        console.log(input[i]+input[i+1]);
        angka[i] = Number(input[i] + input [i+1]);
        console.log("angka" + "("+i+") = " + angka[i]);
        return angka[i];
    } else {
//      console.log(input[i]+input[i+1]);
        angka[i] = Number(input[i] + input [i+1]);
        console.log("angka" + "("+i+") = " + angka[i]);
        return angka[i];
    }
}
}

function findTheLargest(input) {
    let besar = 0;
    let hasil = "";
    let arrayNumbers = splitToArray(input);
for (var i = 0; i < input.length-1; i++) {
    if (i % 2 === 0) {
    if (besar < angka[i]) {
        besar = angka[i];
    } else {
        if (besar > angka[i]) {
        besar = angka[i];
    }
    if (besar <= 0) {
        hasil = "Input number";
    } else {
        hasil = (besar).toString();
    }
    return hasil;
}
}


console.log(" ");
console.log("Task 3:");
console.log(" ");
// console.log("besar = " + besar);
// console.log("hasil = " + hasil);
console.log(splitToArray("5279312"));
// console.log(findTheLargest("5279312"));

console.log(" ");
console.log("------------- ");

