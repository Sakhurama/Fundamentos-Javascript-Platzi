
const gradosFarenheitos = [5, 10, 20, 27, 30];

const gradosCelsius = gradosFarenheitos.map(f => console.log((f - 32) * 5 / 9 ));

// Ejercicio Sumar Números

const numeros = [1, 2, 3, 4, 5];
let suma = 0;

numeros.forEach(number => suma = suma + number);

console.log(suma);

/* 
1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
*/

// Filter

const numerillos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numerillos.filter(n => n % 2 === 0);
const mayorCinco = numerillos.filter(n => n > 5);

console.log(pares);
console.log(mayorCinco);


// Spread operadtor

const nums = [1, 2, 3, 4, 5];

function sumaNumeros(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log("Suma numeris:")
const result = sumaNumeros(...nums); // Si se la paso sin el spread operator no funciona xd

console.log(result);
