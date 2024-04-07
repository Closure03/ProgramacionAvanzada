// Declaración de la variable al inicio
let numero;

function esPar(numero) {
  if (typeof numero !== "number") {
    return console.log("Debes ingresar un número");
  }

  if (numero % 2 === 0) {
    return console.log(`El número ${numero} es par`);
  } else {
    return console.log(`El número ${numero} es impar`);
  }
}

numero = 10;
esPar(numero); 

numero = 7;
esPar(numero); 

numero = "Hola";
esPar(numero);

/*--------------------------- Punto 1 ------------------------------------- */

// Declaración de las variables al inicio
var ladoA;
var ladoB;
var ladoC;

function determinarTipoTriangulo(ladoA, ladoB, ladoC) {
  if (typeof ladoA !== "number" || typeof ladoB !== "number" || typeof ladoC !== "number") {
    return console.log("Debes ingresar valores numéricos para los lados del triángulo");
  }

  if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    return console.log("No es un triángulo válido");
  }

  if (ladoA === ladoB && ladoB === ladoC) {
    return console.log("El triángulo es equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return console.log("El triángulo es isósceles");
  } else {
    return console.log("El triángulo es escaleno");
  }
}

ladoA = 5;
ladoB = 5;
ladoC = 5;
determinarTipoTriangulo(ladoA, ladoB, ladoC); 

ladoA = 4;
ladoB = 4;
ladoC = 3;
determinarTipoTriangulo(ladoA, ladoB, ladoC); 

ladoA = 3;
ladoB = 4;
ladoC = 5;
determinarTipoTriangulo(ladoA, ladoB, ladoC);

ladoA = "a";
ladoB = 4;
ladoC = 5;
determinarTipoTriangulo(ladoA, ladoB, ladoC); 

ladoA = 3;
ladoB = 4;
ladoC = 1;
determinarTipoTriangulo(ladoA, ladoB, ladoC); 

/*----------------------------Punto 2 ------------------------------------ */

// Declaración de las variables al inicio
let a;
let b;
let c;

function tieneSolucionReal(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return console.log("Debes ingresar valores numéricos para los coeficientes de la ecuación");
  }

  let discriminante = b * b - 4 * a * c;

  if (discriminante >= 0) {
    return console.log("La ecuación tiene solución real");
  } else {
    return console.log("La ecuación no tiene solución real");
  }
}

// Ejemplos de uso
a = 1;
b = 2;
c = 1;
tieneSolucionReal(a, b, c); 

a = 1;
b = 4;
c = 5;
tieneSolucionReal(a, b, c); 

a = "a";
b = 2;
c = 1;
tieneSolucionReal(a, b, c); 

/*---------------------------- Punto 3 ------------------------------------ */

// Declaración de la variable al inicio
let dato;

function esPrimo(dato) {
  if (typeof dato !== "number") {
    return console.log("Debes ingresar un número");
  }

  if (dato <= 1) {
    return console.log(`El dato ${dato} no es primo`);
  }

  for (let i = 2; i <= Math.sqrt(dato); i++) {
    if (dato % i === 0) {
      return console.log(`El dato ${dato} no es primo`);
    }
  }

  return console.log(`El dato ${dato} es primo`);
}

// Ejemplos de uso
dato = 10;
esPrimo(dato); 

dato = 7;
esPrimo(dato); 

dato = "Hola";
esPrimo(dato); 

dato = 1;
esPrimo(dato);

 /*---------------------------- Punto 4 ------------------------------------ */

// Declaración de las variables al inicio
let mes;

function obtenerEstacion(mes) {
  if (typeof mes !== "number" || mes < 1 || mes > 12) {
    return console.log("Debes ingresar un número de mes válido (entre 1 y 12)");
  }

  switch (mes) {
    case 12:
    case 1:
    case 2:
      return console.log(`El mes ${mes} corresponde a la estación de invierno`);
    case 3:
    case 4:
    case 5:
      return console.log(`El mes ${mes} corresponde a la estación de primavera`);
    case 6:
    case 7:
    case 8:
      return console.log(`El mes ${mes} corresponde a la estación de verano`);
    case 9:
    case 10:
    case 11:
      return console.log(`El mes ${mes} corresponde a la estación de otoño`);
  }
}

// Ejemplos de uso
mes = 12;
obtenerEstacion(mes); // Salida: "El mes 12 corresponde a la estación de invierno"

mes = 4;
obtenerEstacion(mes); // Salida: "El mes 4 corresponde a la estación de primavera"

mes = 7;
obtenerEstacion(mes); // Salida: "El mes 7 corresponde a la estación de verano"

mes = 10;
obtenerEstacion(mes); // Salida: "El mes 10 corresponde a la estación de otoño"

mes = 15;
obtenerEstacion(mes); // Salida: "Debes ingresar un número de mes válido (entre 1 y 12)"

mes = "Hola";
obtenerEstacion(mes); // Salida: "Debes ingresar un número de mes válido (entre 1 y 12)"

/*---------------------------- Punto 5 ------------------------------------ */

// Declaración de las variables al inicio
let num1;
let num2;
let num3;

function encontrarMayor(num1, num2, num3) {
  if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
    return console.log("Debes ingresar tres números válidos");
  }

  let mayor = num1;

  if (num2 > mayor) {
    mayor = num2;
  }

  if (num3 > mayor) {
    mayor = num3;
  }

  return console.log(`El número mayor es ${mayor}`);
}

// Ejemplos de uso
num1 = 10;
num2 = 5;
num3 = 15;
encontrarMayor(num1, num2, num3);

num1 = 2;
num2 = 2;
num3 = 2;
encontrarMayor(num1, num2, num3);

num1 = "Hola";
num2 = 5;
num3 = 10;
encontrarMayor(num1, num2, num3); 

/*---------------------------- Punto 6 ------------------------------------ */

// Declaración de las variables al inicio
let docenas;
let precioDocena = 60000;

function calcularDescuento(docenas) {
  if (typeof docenas !== "number" || docenas < 0) {
    return console.log("Debes ingresar una cantidad válida de docenas (un número mayor o igual a 0)");
  }

  let descuento;

  if (docenas >= 10) {
    descuento = 0.2;
  } else if (docenas >= 5) {
    descuento = 0.15;
  } else if (docenas >= 1) {
    descuento = 0.1;
  } else {
    descuento = 0;
  }

  let valorCompra = docenas * precioDocena;
  let valorDescuento = valorCompra * descuento;
  let valorTotal = valorCompra - valorDescuento;

  return console.log(`
    Cantidad de docenas: ${docenas}
    Precio por docena: $${precioDocena}
    Descuento: ${descuento * 100}%
    Valor descuento: $${valorDescuento}
    Valor total: $${valorTotal}
  `);
}

// Ejemplos de uso
docenas = 12;
calcularDescuento(docenas);

docenas = 6;
calcularDescuento(docenas);

docenas = 2;
calcularDescuento(docenas);

docenas = 0.5;
calcularDescuento(docenas);

docenas = -1;
calcularDescuento(docenas);

/*---------------------------- Punto 7 ------------------------------------ */