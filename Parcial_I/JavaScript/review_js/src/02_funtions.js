/*function sayHello(name = "Juan", edad = 0) {
  const greeting = `Hola mundo function, soy ${name} y tengo ${edad} años.`;
  console.log("Hola mundo funtion!!!");
  return greeting;
}
sayHello();

const result = sayHello("Pedro", 30);

console.log(result);
console.log(sayHello("Maria", 25));
*/

const sayHello = function(name = "Juan", edad = 0) {
  const greeting = `Hola mundo function, soy ${name} y tengo ${edad} años.`;
  console.log("Hola mundo funtion!!!");
  return greeting;
}

const result = sayHello("Pedro", 30);

console.log(result);
console.log(sayHello("Maria", 25));