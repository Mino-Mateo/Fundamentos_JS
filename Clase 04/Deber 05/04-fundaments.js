//--------------------------------------------------------------------------------------------------------------//
                                            //* Objetos

//? Sintaxis de un objeto
const usuario = {
    nombre:"Mateo",
    apellido:"Miño",
    edad:22,
    direccion:{
        ciudad:"Quito",
        telefono:"099897969",
        calle:"Amazonas"
    },
    amigos:['Emily','Isaac','Erick','Danny'],
    estado:true,
    enviarCorreo (){
        return `send mail to ${this.Friends[0]}`
    },
    enviarNotificacion: function (){
        return `send notification to ${this.Friends[3]}`
    }
}

//! Imprimir en pantalla
console.log(user.estado);
console.log(user.enviarCorreo());
console.log(user.enviarNotificacion());


//? Desestructuración de Objetos
const { nombre, edad, otrosAmigos, activa } = usuario;
console.log(nombre, edad, otrosAmigos, activa);

//? Unir Objetos
const nuevaDireccion = {
  ciudad: "Cordoba",
  pais: "Argentina",
  calle: "Zurdos",
  edificio: "tiemblen"
};

const todaInformacion = { ...persona, ...nuevaDireccion };
console.log(todaInformacion);

//--------------------------------------------------------------------------------------------------------------//
                                            //* Arreglos

//? Sintaxis Arreglos
const lista = [10, "Pikachu", 30.12, true, false, "VLLC"];

console.log(lista.length);
console.log(lista[0]);
console.log(lista[6]);

//? Métodos de Arreglos
lista.push("Buenos dias");   // Agrega 110 al final del arreglo.
lista.unshift(5);   // Agrega 5 al inicio del arreglo.
lista.pop();        // Elimina el último elemento del arreglo.
lista.shift();      // Elimina el primer elemento del arreglo.

console.log("Arreglo Modificado:", lista);

//? Método find y map en Arreglos
const encontrado = lista.find(e => e != 10);
console.log("Encontrado:", encontrado); // Encuentra el primer elemento mayor que 50.

const nuevoDatos = lista.map(e => e / 2);
console.log("Nuevo Datos (dividido por 2):", nuevoDatos);

//? Desestructuración de Arreglos
const [num1, num2, num3, num4, nombres] = lista;
console.log("Arreglo Desestructurado:", num1, num2, num3, num4, nombres);

//--------------------------------------------------------------------------------------------------------------//