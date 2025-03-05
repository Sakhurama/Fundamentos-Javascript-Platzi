const persona = {
    nombre: "Daniel",
    apellido: "Romero",
};

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const daniel = new Persona("Daniel", "Romero");
console.log(daniel);

Persona.prototype.saludar = function() {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
}

Persona.prototype.despedir = function() {
    console.log(`Adiós ${this.nombre} ${this.apellido}`);
}

const anny = new Persona("Anny", "Florez");

daniel.saludar();
daniel.despedir();

anny.saludar();
anny.despedir();

/* 
De la nueva forma que lanzó javascript en 2015 
para hacerlo similar a los lenguajes orientados a objetos 
*/

class Animal {
    constructor(raza, nombre){
        this.raza = raza;
        this.nombre = nombre;
    }
    
    presentacion(){
        console.log(`Es un ${this.raza} llamado ${this.nombre}`);
    }
}

const gato = new Animal("Gato", "Misifus");

gato.presentacion();

console.log(gato.raza);
