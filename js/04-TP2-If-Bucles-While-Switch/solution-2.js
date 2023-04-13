//*EJERCICIO 1
// let edad
// edad = parseInt(prompt('Ingrese su edad'));
// if(edad >= 18 && !isNaN(edad)){
//     alert(`Usted ya puede conducir`);
// }else{
//     alert(`La edad ingresada no es un número válido`);
// }

//*EJERCICIO 2
// let nota;
// nota = parseInt(prompt(`Ingrese su nota`));
// if(isNaN(nota)){
//     alert(`Introduce un número válido`);
// }else if(nota >= 0 && nota <=2){
//     alert(`Muy deficiente`);
// }else if(nota >= 3 && nota <=4){
//     alert(`Insuficiente`);
// }else if(nota >= 5 && nota <=6){
//     alert(`Suficiente`);
// }else if(nota == 7){
//     alert(`Bien`);
// }else if(nota >= 8 && nota <=9){
//     alert(`Notable`);
    
// }else if(nota == 10){
//     alert(`Sobresaliente`);
// }else{
//     alert(`Número erróneo`);
// }

//*EJERCICIO 3

// let texto = "";
// let continuar;

// do {
// let cadena= prompt("Ingresa una cadena de texto:");
// continuar = confirm("¿Deseas ingresar otra cadena de texto?");
// texto += cadena + "-";
// } while (continuar);
// alert("Cadenas ingresadas: " + texto.slice(0, -1));

//*EJERCICIO 4
// let numero;
// let suma = 0;
// do {
// numero = prompt("Ingrese su número:");
// if (numero === null) {
//     break;
// }
// if (isNaN(numero)) {
//     alert("No ingresó un número válido. Inténtelo de nuevo.");
// } else {
//     suma += Number(numero);
// }
// } while (true);

// alert(`La suma total de los números ingresados es: ${suma}`);

//*EJERCICIO 5
// let dni, letraResultado, letras = 'TRWAGMYFPDXBNJZSQVHLKE';
// do{
//     dni = (parseInt(prompt(`Ingrese su DNI:`)));
//     if(isNaN(dni)){
//         alert(`El valor ingresado no es un número`);
//     }else if(dni < 0 || dni > 999999999){
//         alert(`El valor ingresado es incorrecto, debe ingresar un valor entre 0 y 99999999`);
//     }else{
//         letraResultado = letras.charAt(dni % 23);
//         alert(`Tu letra de DNI es: ${letraResultado}`);
//     }
// }while(true);

//*EJERCICIO 6
// for( i = 1; i <=30; i++){
// for(repeticiones = 0; repeticiones < i; repeticiones++){
//     document.write(i);
// }
// document.write('<br>');
// }

//*EJERCICIO 7
// let numero;
// numero = parseInt(prompt(`Ingrese un número de 1 a 50`));
// if(numero >= 1 && numero<=50){
//     for( i = numero; i >=1; i--){
//     for(repeticiones = 1; repeticiones <= i; repeticiones++){
// document.write(i);
// }
// document.write('<br>');

// }
// }else{
//     alert(`El número ingresado no es válido`);
// }

//*EJERCICIO 8
// let numero;
// numero = parseInt(prompt(`Ingrese un número de 1 a 50`));
// if(numero >0 && numero <=50){
//     for( i = numero; i <=50; i++){
//     for(repeticiones = 0; repeticiones < i; repeticiones++){
// document.write(i);
// }
// document.write('<br>');

// }
// }else{
//     alert(`El número ingresado no es válido`);
// }


//*EJERCICIO 9

// let contador = 0;

// for (let i = 1; i <= 500; i++) {
// if (i % 4 === 0 && i % 9 === 0) {
//     console.log(`${i} es múltiplo de 4 y de 9`);
// } else if (i % 4 === 0) {
//     console.log(`${i} es múltiplo de 4`);
// } else if (i % 9 === 0) {
//     console.log(`${i} es múltiplo de 9`);
// } else {
//     console.log(i);
// }
// contador++;
// if (contador === 5) {
//     console.log("-----");
//     contador = 0; // reiniciar el contador
// }
// }

//*EJERCICIO 10
// let filas, columnas, resultado;
// filas = parseInt(prompt("Introduce el número de filas:"));
// columnas = parseInt(prompt("Introduce el número de columnas:"));

// resultado = filas * columnas;

// document.write("<table>");

// for (let i = 0; i < filas; i++) {
// document.write("<tr>");
// for (let u = 0; u < columnas; u++) {
//     document.write("<td>" + resultado + "</td>");
//     resultado--;
// }
// document.write("</tr>");
// }
// document.write("</table>");


// //*EJERCICIO 11
// let nombre1, nombre2, nombre3, edad1, edad2, edad3, nombreMayor, edadMayor;
// nombre1 = prompt(`Ingrese el primer nombre:`);
// edad1 = parseInt(prompt(`Ingrese la edad de ${nombre1}:`));
// nombre2 = prompt(`Ingrese el segundo nombre:`);
// edad2 = parseInt(prompt(`Ingrese la edad de ${nombre2}:`));
// nombre3 = prompt(`Ingrese el tercer nombre:`);
// edad3 = parseInt(prompt(`Ingrese la edad de ${nombre3}:`));

// edadMayor = Math.max(edad1, edad2, edad3);

// if(edadMayor === edad1){
//     nombreMayor = nombre1;
// }else if(edadMayor === edad2){
//     nombreMayor = nombre2;
// }else{
//     nombreMayor = nombre3;
// } 
// document.write(`La persona con mayor edad es ${nombreMayor}`);


//*EJERCICIO 12
// let random = Math.floor(Math.random() * 99) + 1;
// console.log(random);


//*EJERCICIO 13
// let texto= '';
// texto = prompt(`Ingrese un texto`);
// console.log(texto.toUpperCase());


//*EJERCICIO 14
// let texto = prompt("Ingresa una cadena de texto:");
// let resultado = "";

// for (let i = 0; i < texto.length; i++) {
// resultado += texto[i] + "-";
// }
// console.log(resultado);


//*EJERCICIO 15
// let texto='', contador;
// texto= prompt("Ingrese su texto:");
// vocales = "aeiou";
// contador = 0;

// for (let i = 0; i < texto.length; i++) {
//     texto.toLowerCase()
// if (vocales.includes(texto[i])) {
//     contador++;
// }
// }

// console.log(`El texto "${texto}" tiene ${contador} vocales.`);


//*EJERCICIO 16
// let texto = prompt("Ingresa un texto:");
// let resultado = "";
// for (let i = texto.length -1; i >= 0; i--) {
// resultado += texto[i];
// }

// console.log(`El texto "${texto}" al revés es: "${resultado}"`);


//*EJERCICIO 17
// let texto = prompt("Ingresa un texto:");
// const vocales = "aeiou";
// let posicion = -1;

// for (let i = 0; i < texto.length; i++) {
//     texto.toLowerCase()
// if (vocales.includes(texto[i])) {
//     posicion = i;
//     break;
// }
// }

// if (posicion === -1) {
// console.log(`No se encontraron vocales en el texto "${texto}".`);
// } else {
// console.log(`La primera vocal en el texto "${texto}" está en la posición ${posicion}.`);
// }