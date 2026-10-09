const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const fruitsCopy = [...fruits]; // Using the spread operator to create a shallow copy of the array

const products = ["milk", "bread", "eggs", "cheese"];
const clothes = ["shirt", "pants", "jacket", "shoes"];

//const marketItems = [...fruits, ...products];

//console.log(marketItems);

const allItems = [...fruits, ...products, "water", "juice", "soda"]; 
console.log(allItems);

const allItemsCopy = fruitsCopy.concat(clothes).concat(products).concat(["water", "juice", "soda"]); 
console.log(allItemsCopy);