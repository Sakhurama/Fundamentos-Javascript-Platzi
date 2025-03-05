let precio = parseInt(prompt("¿Cual es el precio?"));
let descuento = parseInt(prompt("¿Cuánto es el descuento?"));

function CalcularPrecio(precio, descuento){
    return precio * (1 - descuento / 100);
};

alert(CalcularPrecio(precio, descuento));