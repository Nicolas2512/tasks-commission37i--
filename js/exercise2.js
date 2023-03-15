//! Ejercicio 2

let numero1, numero2;
numero1 = parseInt(prompt('Ingrese su primer número'));
numero2 = parseInt(prompt('Ingrese su segundo número'));
if(numero1 > numero2){
console.log(`${numero1} es mayor que  ${numero2}, la suma de  ${numero1} + ${numero2} es de  ${numero1 + numero2} `);
} else{
     if(numero1 == numero2){ console.log(`${numero1} es igual que  ${numero2} y el producto de  ${numero1} x ${numero2} es de  ${numero1 * numero2} `);
}else{
console.log(`${numero1} es menor que  ${numero2}, la resta de  ${numero2} - ${numero1} es de  ${numero2 - numero1} `);
}
}