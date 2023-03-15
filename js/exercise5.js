//! Ejercicio 5
let numero1, numero2, numero3, mayor, menor, raizCuadrada;
numero1 = parseInt(prompt('Ingrese su primer número'));
numero2 = parseInt(prompt('Ingrese su segundo número'));
numero3 = parseInt(prompt('Ingrese su tercer número'));


mayor = Math.max(numero1, numero2, numero3);
menor = Math.min(numero1, numero2, numero3);
raizCuadrada = Math.sqrt(numero2);


console.log(`El mayor numero ingresado es: ${mayor}`);
console.log(`El menor numero ingresado es: ${menor}`);
console.log(`La raiz cuadrada de ${numero2} es: ${raizCuadrada}`);