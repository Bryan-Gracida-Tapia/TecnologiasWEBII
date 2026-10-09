const average = 6.5;
let status = "";

status = average >= 7 ? "Approved" : "Failed";

console.log(`The student's status is: ${status}`);

/*
if (average >= 7) {
    status = "Approved";
} else {
    status = "Failed";
}

console.log(`The student's status is: ${status}`);
*/

console.log(`the student's status is: ${average >= 7 ? "Approved" : "Failed"}`);

let max = 0;

const a = 10;
const b = 20;
const c = 30;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`The maximum value is: ${max}`);