let frutaFavorita = prompt("¿Cual es tu fruta favorita?");
let frutas = frutaFavorita;

switch (frutas) {
    case "Manzana":
        console.log("La Manzana, es una fruta roja muy rica");
        break;
    case "Naranja":
        console.log("La Naranja, es un citrico alto en vitamina C");
        break;
    case "Pera":
        console.log("La Pera es verde y sabrosa.");
        break;
    default:
        console.log("No tenemos información sobre esa fruta");
}