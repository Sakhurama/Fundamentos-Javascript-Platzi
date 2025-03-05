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

const facebook = [
    "Primer post", "Segundo post", "Tercer post"
]

const usuario = prompt("Introduce tu usuario");
const contraseña = prompt("Introduce tu contraseña");


function validarUsuario(usuario, contraseña){
    for(let i = 0; i < database.length; i++){
        if(usuario === database[i].usuario && contraseña === database[i].contraseña){
            return true;
        }
    }
    return false;
};

const validar = validarUsuario(usuario, contraseña);

function login(validar){
    validarUsuario();
    if(validar){
        alert("Acceso concedido");
        console.log(facebook)
    } else {
        alert("Acceso denegado");
    }
}

login(validar);

