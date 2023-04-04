//! EJERCICIO 1
// let lado, promedio;
// lado = parseInt(prompt('Ingrese un lado del cuadrado'));
// promedio = lado * 4;
// document.write(`El perimetro del cuadrado es ${promedio}`);

//! EJERCICIO 2
// let numero1, numero2, numero3, numero4, suma, producto;
// numero1 = parseInt(prompt('Ingrese su primer número'));
// numero2 = parseInt(prompt('Ingrese su segundo número'));
// numero3 = parseInt(prompt('Ingrese su tercer número'));
// numero4 = parseInt(prompt('Ingrese su cuarto número'));

// suma = console.log(`La suma del 1º y 2º número es de: ${numero1 + numero2}`);
// producto = console.log(`El producto del 3º y 4º número es de: ${numero3 * numero4}`);

//! EJERCICIO 3
// let numero1, numero2, numero3, numero4, suma, producto;
// numero1 = parseInt(prompt('Ingrese su primer número'));
// numero2 = parseInt(prompt('Ingrese su segundo número'));
// numero3 = parseInt(prompt('Ingrese su tercer número'));
// numero4 = parseInt(prompt('Ingrese su cuarto número'));

// suma = console.log(`La suma de los números cargados es de: ${numero1 + numero2 + numero3 + numero4}`);
// producto = console.log(`El producto de los números cargados es de: ${numero1 * numero2 * numero3 * numero4}`);

//! EJERCICIO 4
// let precioArticulo, cantidad, totalAbonar;
// precioArticulo = parseInt(prompt('Ingrese el precio del producto seleccionado'));
// cantidad = parseInt(prompt('Indique la cantidad del producto seleccionado'));
// totalAbonar = console.log(`El cliente debe abonar un total de: $${precioArticulo * cantidad}`);

//! EJERCICIO 5
// let nota1, nota2, nota3, suma, promedio;
// nota1 = parseInt(prompt('Ingrese la primera nota del alumno'));
// nota2 = parseInt(prompt('Ingrese la primera nota del alumno'));
// nota3 = parseInt(prompt('Ingrese la primera nota del alumno'));
// suma = nota1 + nota2 + nota3;
// promedio = suma / 3;
// document.write(`El promedio del alumno es de: ${promedio}`);

//! EJERCICIO 6
// let clave1, clave2;
// clave1 = prompt('Ingrese su clave');
// clave2 = prompt('Ingrese nuevamente su clave');
// if(clave1 == clave2){
//     document.write('Su clave se guardo con éxito');
// }else{
//     alert('Las claves ingresadas no coinciden');
// }

//! EJERCICIO 7
// let numero;
// numero = parseInt(prompt('Por favor ingresa un número'));
// if(numero > 0){
//     alert('El número ingresado es positivo');
// }else if(numero == 0) {
//     alert('El número ingresado es igual a 0');
// }else{ 
//     alert('El número ingresado es negativo');
// }

//! EJERCICIO 8
// let numero = parseInt(prompt("Ingrese un número entero positivo de hasta tres cifras:"));

// if(numero >= 0 && numero <= 9) {
// alert("El número tiene 1 cifra.");
// } else if(numero >= 10 && numero <= 99) {
// alert("El número tiene 2 cifras.");
// } else if(numero >= 100 && numero <= 999) {
// alert("El número tiene 3 cifras.");
// } else {
// alert("El número ingresado no es válido o tiene más de tres cifras.");
// }

//! EJERCICIO 9
// let nombre, totalPreguntas, preguntasCorrectas, promedio;
// nombre = prompt('Ingresar el nombre del postulante');
// totalPreguntas = prompt('Ingresar la cantidad de preguntas realizadas');
// preguntasCorrectas = prompt('Ingresar la cantidad de preguntas correctas');
// promedio = (preguntasCorrectas/totalPreguntas)*100;
// if(promedio > 90){
//     alert('Nivel superior');
// }else if(promedio >= 75){
//     alert('Nivel medio');
// }else if(promedio >= 50){
//     alert('Nivel regular');
// } else{
//     alert('Fuera de nivel');
// }

//!EJERCICIO 10
// let triangulosMayoresA12 = 0;
// for (let i = 1; i <= 3; i++) {
// let base = parseFloat(prompt(`Ingrese la base del triángulo ${i}:`));
// let altura = parseFloat(prompt(`Ingrese la altura del triángulo ${i}:`));
// let superficie = (base * altura) / 2;
// alert(`Triángulo ${i}:\nBase: ${base}\nAltura: ${altura}\nSuperficie: ${superficie}`);
// if (superficie > 12) {
// triangulosMayoresA12++;
// }
// }
// alert(`Cantidad de triángulos con superficie mayor a 12: ${triangulosMayoresA12}`);

//!EJERCICIO 11
// let sumaTotal = 0;
// for (let i= 1; i <= 10; i++){
// let numeros = parseInt(prompt(`Ingrese el valor nº: ${i}`));
// if( i > 5 ){
//     sumaTotal += numeros;
// }
// }
// alert(`La suma de los ultimos 5 valores agregados es de: ${sumaTotal}`);

//!EJERCICIO 12
// for (let i = 0; i <= 50; i++){
// let resultado = 5 * i;
// document.write(`El resultado de 5 * ${i} es de: ${resultado} <br>`);
// }

//!EJERCICIO 13
// let numero;
// numero = parseInt(prompt('Ingrese un número entre 1 y 10'));
// if( numero <=12){
// for (let i = 0; i <= 12; i++){
// let resultado = numero * i;
// document.write(`El resultado de ${numero} * ${i} es de: ${resultado} <br>`);
// }
// } else{
//     alert(`Debe ingresar un número entre 1 y 12`);
// }

//!EJERCICIO 14
// let lado1, lado2, lado3, lado4, cantidadTipo, cantidadMenor,trianguloEquilatero = 0, trianguloIsoseles = 0, trianguloEscaleno = 0;
// for (let i = 1; i <= 4; i++){
//     lado1 = parseInt(prompt(`Ingrese el 1º lado`));
//     lado2 = parseInt(prompt(`Ingrese el 2º lado`));
//     lado3 = parseInt(prompt(`Ingrese el 3º lado`));
//     if(lado1 == lado2 && lado2 == lado3){
//         alert(`Se trata de un triángulo equilatero`);
//         trianguloEquilatero++;
//     }else if (lado1 == lado2 || lado1 == lado3){
//         alert(`Se trata de un triángulo isóseles`);
//         trianguloIsoseles++
//     } else{
//         alert(`Se trata de un triángulo escaleno`);
//         trianguloEscaleno++
//     }
    
// }
// alert(`La cantidad de triangulos equilateros es de ${trianguloEquilatero}`);
// alert(`La cantidad de triangulos isóseles es de ${trianguloIsoseles}`);
// alert(`La cantidad de triangulos escaleno es de ${trianguloEscaleno}`);



// if(trianguloEquilatero < trianguloEscaleno && trianguloEquilatero < trianguloIsoseles){
//     alert(`La menor cantidad de triangulos son los equilateros`);
// }else if( trianguloEscaleno < trianguloEquilatero&& trianguloEscaleno < trianguloIsoseles)
// {    alert(`La menor cantidad de triangulos son los escalenos`);
// }else{
//     alert(`La menor cantidad de triangulos son los isoseles`);
// }

//!EJERCICIO 15
// let cantidadPuntos, primerCuadrante = 0, segundoCuadrante = 0, tercerCuadrante = 0, cuartoCuadrante = 0, x, y;
// cantidadPuntos = parseInt(prompt(`Ingrese la cantidad de puntos a procesar`));
// for(let i = 1; i <= cantidadPuntos; i++) {
//     x = parseInt(prompt(`Ingresar la coordenada "x" del punto ${i}`));
//     y = parseInt(prompt(`Ingresar la coordenada "y" del punto ${i}`)); 
//     if(x > 0 && y > 0){
//         primerCuadrante++;
//     }else if(x < 0 && y > 0){
//         segundoCuadrante++;
//     }else if(x < 0 && y < 0){
//         tercerCuadrante++;
//     }else{
//         cuartoCuadrante++
//     }
// }
// alert(`La cantidad de puntos en el primer cuadrante es de ${primerCuadrante}`);
// alert(`La cantidad de puntos en el segundo cuadrante es de ${segundoCuadrante}`);
// alert(`La cantidad de puntos en el tercer cuadrante es de ${tercerCuadrante}`);
// alert(`La cantidad de puntos en el cuarto cuadrante es de ${cuartoCuadrante}`);

//!EJERCICIO 16
// let cantidadNegativos = 0;
// let cantidadPositivos = 0;
// let cantidadMultiplos15 = 0;
// let numerosPares = 0;

// for (let i = 1; i <= 10; i++) {
// let valor = parseInt(prompt(`Ingrese el valor ${i}:`));

// if (valor < 0) {
// cantidadNegativos++;
// } else if (valor > 0) {
// cantidadPositivos++;
// }

// if (valor % 15 === 0) {
//     cantidadMultiplos15++;
// }

// if (valor % 2 === 0) {
// numerosPares += valor;
// }
// }

// alert(`Cantidad de valores negativos ingresados: ${cantidadNegativos}`);
// alert(`Cantidad de valores positivos ingresados: ${cantidadPositivos}`);
// alert(`Cantidad de múltiplos de 15 ingresados: ${cantidadMultiplos15}`);
// alert(`Valor acumulado de los números ingresados que son pares: ${numerosPares}`);

//!EJERCICIO 17
// let suma1 = 0, suma2 = 0, suma3 = 0, turnoMañana, turnoTarde, turnoNoche, promTurnoMañana, promTurnoTarde, promTurnoNoche;
// for(let i=0; i<5; i++){
// turnoMañana = parseInt(prompt(`Ingresar la edad del alumno correspondiente al turno mañana`));
// suma1+= turnoMañana;
// }
// for(let i=0; i<6; i++){
// turnoTarde= parseInt(prompt(`Ingresar la edad del alumno correspondiente al turno tarde`));
// suma2+= turnoTarde;
// }
// for(let i=0; i<11; i++){
// turnoNoche = parseInt(prompt(`Ingresar la edad del alumno correspondiente al turno noche`));
// suma3+= turnoNoche;
// }
// promTurnoMañana = suma1 / 5;
// promTurnoTarde = suma2 / 6;
// promTurnoNoche = suma3 / 11;
// document.write(`El promedio de edades del turno mañana es de: ${promTurnoMañana}<br>`);
// document.write(`El promedio de edades del turno tarde es de: ${promTurnoTarde}<br>`);
// document.write(`El promedio de edades del turno noche es de: ${promTurnoNoche}<br>`);
// if(promTurnoMañana> promTurnoTarde && promTurnoMañana> promTurnoNoche){
//     document.write(`El promedio de mayor edad es el turno mañana`);
// }else if(turnoTarde>turnoMañana && turnoTarde> turnoNoche){
//     document.write(`El promedio de mayor edad es el turno tarde`);
// }else{
//     document.write(`El promedio de mayor edad es el turno noche`);
// }









