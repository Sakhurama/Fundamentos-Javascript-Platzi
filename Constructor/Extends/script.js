// Creamos una clase base que es una estructura génerica
class Vehiculo {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    presentacion(){
        console.log(`Es un ${this.marca} del ${this.modelo}`);
    }
}

// Usando esa estructura base crearé un objeto
const camion = new Vehiculo("Toyota", "98");

camion.presentacion(); // llamo al método presentacion


// Ahora crearemos una subclase que hereda de la clase base

class Motocicleta extends Vehiculo { // Se usa extends para heredar de la clase base
    constructor(marca, modelo, cc){
        super(marca, modelo); // esto es la clase base
        this.cc = cc;
    }

    presentacion(){
        console.log(`Es un ${this.marca} ${this.modelo} con ${this.cc} centimetros cubicos`); 
    }
}

const gixxer = new Motocicleta("Suzuki", "2021", "150");
gixxer.presentacion(); 