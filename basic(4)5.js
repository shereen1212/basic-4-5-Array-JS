//1//

let nambers = [1, 2, 3, 4, 5];
document.write(nambers.length);
document.write("<br><br>");

//2//
let nam = [1, 2, 3, 4, 5];
for (let x = 0; x > 6; x++);
document.write(nam);
document.write("<br><br>");

//3//
let name = [1, 2, 3, 4, 5];
for (let index in name) {
  document.write(`index: ${index} value: ${name[index]}`);
  document.write("<br><br>");
}

//4//
let nameis = [1, 2, 3, 4, 5];
document.write(Array.isArray(nameis));
document.write("<br><br>");

//5//
let arraylink = { 0: "a", 1: "b", 2: "c", length: 3 };
let array = Array.from(arraylink);
document.write(array);
document.write("<br><br>");

//6//
let nameEach = [1, 2, 3, 4, 5];
nameEach.forEach(function (num) {
  document.write(num);
  document.write("<br><br>");
});

/*********   Mid  *******/

//1//
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
document.write(combined);
document.write("<br><br>");

//2//
// let nameof = [1, 2, 3, 4, 5];
// document.write(nameof.indexOf(1, 2, 3, 4, 5));
// document.write("<br><br>");

//3//

let arrayslice = [1, 2, 3, 4, 5, 6];
let arr = arrayslice.slice(0, 2).concat(arrayslice.slice(4, 7));
document.write(arr);
document.write("<br><br>");

// //4//
// let arraysplice = [1, 2, 3, 4, 5];
// let arrs = arraysplice.splice()

//5//

let arrayd = ["1, 2, 3, 4, 5"];
let joined = arrayd.join("-");
document.write(joined);
document.write("<br><br>");

//6//

//7//
let aar = Array.of(1, 2, 3);
document.write(aar);
document.write("<br><br>");
document.write("<br><br>");

//8//

//9//
let rrr = ["1, 2, 3, 4, 5"];
rrr.copyWithin(0, 6);
document.write(rrr);
document.write("<br><br>");

//10//
let arrr = ["apple", "banana", "cherry"];
arrr.sort();
document.write(arrr);
document.write("<br><br>");

//11//
let aarr = ["apple", "banana", "cherry"];
aarr.reverse();
document.write(aarr);
document.write("<br><br>");

/******   Advanced   ************ */

//1//
let ar = [1, 2, 3, 4, 5];
let squared = ar.map((num) => num * num);
document.write(squared);
document.write("<br><br>");

// 2//

let sh = [1, 2, 3, 4, 5];
let evens = sh.filter((num) => num % 2 === 0);
document.write(evens);
document.write("<br><br>");

//3//

let nama = [1, 2, 3, 4, 5];
let sum = nama.reduce((total, num) => total + num, 0);
document.write(sum);
