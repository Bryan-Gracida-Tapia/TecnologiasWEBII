const sayHelloArrow = (name = "Juan", edad = 0) => 
 `Hello world function, I'm ${name} and I'm ${edad} years old.`;

const add = (a=0, b=0) => a + b;

const resultArrow = sayHelloArrow("Ryan", 18);
console.log(resultArrow);
console.log(add(5, 10));