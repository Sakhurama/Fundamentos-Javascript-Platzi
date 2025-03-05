// Usar metodo find para encontrar elementos dentro de un array

const frutas = ["manzana", "pera", "limón", "melocotón", "mango", "papaya", "kiwi", "fresa", "naranja", "uva"];
const frutabuscar = prompt("Introduce la fruta que deseas buscar");

function buscarFruta(frutabuscar){
    const validar = frutas.find(fruta => fruta === frutabuscar); // Usamos find para buscar, si existe me devuelve true;

    if(validar){
        alert(`Si hay ${frutabuscar}`);
    } else {
        alert(`La fruta ${frutabuscar} no está disponible`);
    }
}

buscarFruta(frutabuscar);