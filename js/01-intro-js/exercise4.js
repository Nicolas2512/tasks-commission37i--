//! Ejercicio 4

let precioArticulo, cantidad, totalAbonar;
precioArticulo = parseInt(prompt('Ingrese el precio del producto seleccionado'));
cantidad = parseInt(prompt('Indique la cantidad del producto seleccionado'));
totalAbonar = console.log(`El cliente debe abonar un total de: $${precioArticulo * cantidad}`);