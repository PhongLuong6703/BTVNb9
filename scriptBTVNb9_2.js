/*
Viết hàm min (a, b) trả về gía trị nhỏ nhất trong hai số a và b.
*/

let a = parseFloat(prompt("Nhập Số Thứ Nhất: "));
let b = parseFloat(prompt("Nhập Số Thứ Hai: "));

//version 1:

let a = min1;
if (b < a) {
    min1 = b;
} 
console.log(`Số Nhỏ Nhất Là ${min1}`);

//version 2:
let min2
min2 = a < b ? min2 = a : min2 = b;
console.log(`Số Nhỏ Nhất Là ${min2}`);