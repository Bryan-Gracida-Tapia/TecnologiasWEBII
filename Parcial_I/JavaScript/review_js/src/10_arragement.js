const fruits = new Array("Apple", "Banana", "Cherry", "Date", "Elderberry");
fruits.push("Fig");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig"]
console.log(fruits.length); // Output: 6
console.log(fruits[2]); // Output: "Cherry"
console.log("")

fruits.forEach(fruit => {
    console.log(fruit);
});

console.log("")

for(const fruit of fruits) {
    console.log(fruit);
}

console.log("")

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}