//--------------------------------------------------------------------------------------//
                                    //* Variables
// Var
var comida = "Papas"

// Let
let diasAnio = 365

// Constantes
const horasDia = 24;

//--------------------------------------------------------------------------------------//

                                    //* Metodos con Strings

var prueba = "El peluca 2023 - Grande Milei"
console.log(`Texto: ${prueba}`)
console.log(`Tamaño string: ${prueba.length}`)
console.log(`¿Existe esta palabra? 'Peron': ${prueba.includes("Peron")}`)
console.log(`Texto en Mayúsculas: ${prueba.toUpperCase()}`)
console.log(`Texto en Minúsculas: ${prueba.toLowerCase()}`)
console.log(`Quitar espacios: ${prueba.trim()}`)
console.log(`Reemplazar palabras: ${prueba.replace("peluca", "Javier Milei")}`)
console.log(`Separar la Subcadena: ${prueba.slice(4, 7)}`)
console.log(`Subcadena (substring): ${prueba.substring(4, 7)}`)
console.log(`Que letra esta en la posición 5: ${prueba.charAt(5)}`)
console.log(`Repetir texto: ${prueba.repeat(5)}`)
console.log(`Separar por palabras: ${prueba.split(" ")}`)

//--------------------------------------------------------------------------------------//

                                //* Numeros
//? Presedencia operadores
var resul = (25 + 3) * 42 / 4 - 9 ** 7
console.log(resul);

//? Convertir string a numeros
var numb1 = 25
var numb2 = "10"
console.log(`Cambio final: ${numb1 + " " + numb2}`)

//? Operador ternario
var edad = 16
var alerta = (edad >= 18) ? "Puede ingresar" : "Acceso restringido"
console.log(alerta);

//--------------------------------------------------------------------------------------//

                                        //* Condicionales
//? If
var permisoSalida = true
if (permisoSalida != true) {
  console.log("No vas a salir")
} else {
  console.log("Si vas a salir")
}

//? Switch
var opPuerta = 1
var nombPuerta

switch (opPuerta) {
  case 1:
    nombPuerta = "LLA"
    break
  case 2:
    nombPuerta = "UxP"
    break
  default:
    nombPuerta = "Eso no existe"
}

//--------------------------------------------------------------------------------------//

                                           //* Bucles

//? forEach
var comidas = ['Paella', 'Churrasco', 'Fritada']
instrumentos.forEach(function(comidas) {
  console.log(comidas)
})

//? forOf
var animales = ['Gato', 'Perro', 'Panda']
for (const animal of animales) {
  console.log(animal)
}

//? forIn
var arrayPrueba = [9, 12, 18];
for (const index in arrayPrueba) {
  console.log(arrayPrueba[index])
}

//? Map
var pares = [2, 4, 6, 7 ,3, 5, 9 ,11]
var numeros = pares.map(function(numeros) {
  return numeros * 3
})
console.log(pares);

//--------------------------------------------------------------------------------------//

                                    //* Funciones


//? Sin Parametros
function desearExito() {
    console.log("¡Buena suerte en tu jornada!");
}
  
desearExito();

//? Anonima
var dividir = function(a, b) {
    return a / b
}

var resul = dividir(9, 3);
console.log("Division =", resul)

//? Parametros
function multiplicar(a, b) {
    return a * b
}
  
var resul = multiplicar(8, 3)
console.log("Multiplicacion =", resul)


//? Rest
function suma(...val) {
    let resul = 0
  
    for (let valorNumero of val) {
        resul += valorNumero
    }
  
    return resul
}


console.log(suma(4, 3, 66))
console.log(suma(10, 225, 69, 40, 5))
console.log(suma(5))
console.log(suma())

//? Flecha
const raiz = num => Math.sqrt(num);
const resul = raiz(9);
console.log("La raíz es", resul)

//? This
var local = {
    nombre: "Panaderia del panadero ",
    ventasMes: 500,
    presentacion: function() {
      console.log(`Mi panaderia es: ${this.nombre}, y vendo al mes ${this.ventasMes} panes`);
    }
}
local.presentacion()