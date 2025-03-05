const valores = [1, 2, 3];

let indice = 0;

for (let i = 0; i < valores.length; i++){
    indice = indice + valores[i];
}

console.log(indice);

/*
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
*/

// PUSH y POP

const paises = ["Brasil", "Argentina", "Chile", "Uruguay"];

let newPais = paises.push("Colombia", "Venezuela");

console.log(newPais);
console.log(paises);

let deletePais = paises.pop(); // Pop solo permite borrar el último elemento

console.log(deletePais);
console.log(paises);

// MAP
const comidas = ["Cereales", "Frutas", "Vegetales", "Proteínas", "Carnes", "Legumbres"];

const meGusta = comidas.map(comida => console.log("Me gusta la " + comida));
const mayusculas = comidas.map(comida => comida.toUpperCase());

console.log(mayusculas);

