const database = [
    {
        usuario: "Daniel",
        contraseña: "12",
    },
    {
        usuario: "Pedro",
        contraseña: "1234",
    },
    {
        usuario: "Juan",
        contraseña: "123",
    },
]


// const usuario = prompt("Introduce tu usuario");
// const contraseña = prompt("Introduce tu contraseña");


function validarUsuario(usuario, contraseña){
    for(let i = 0; i < database.length; i++){
        if(usuario === database[i].usuario && contraseña === database[i].contraseña){
            alert("Acceso concedido");
            break
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }
};



