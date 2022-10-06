/* // LET CONST
let dia = "Jueves";
var mes = "Octubre";

function Fecha() {
    let dia = "Miércoles";
    var mes = "Noviembre";
    // console.log(dia);
    // console.log(mes);
}

Fecha(); */

// console.log(dia);
// console.log(mes);

// FUNCTION vs. ARROW FUNCTION

// function Multiplicar (num1, num2) {
//     return num1 * num2;
// }

// const Multiplicar = (num1, num2) => {
//     return num1 * num2;
// }

/* const array = [1,2,3]

array.push(5)

console.log(array)


const Pokemon = nombre => ({monster : nombre});

let boton = Pokemon('Charmander');

console.log(boton); */

// USO PRÁCTICO ARROW FUNCTION - MAP
// const fruta = ["manzana", "pera", "fresa", "plátano", "albaricoque"];

// sin map
/* for (let i = 0; i < fruta.length; i++) {
    fruta[i] = fruta[i] + 's';
} */

/* //mapeo
let frutasPlurales = fruta.map(variablePlaceHolder => variablePlaceHolder + 's');

console.log(frutasPlurales);
 */
/* let numeros = [25,38,42,57,112];

let numerosMapeados = numeros.map(cifra => cifra * 3);

console.log(numerosMapeados); */

/* const PrecioFinalImpuesto = (precio, impuesto = 0.21) => precio + (precio * impuesto);

console.log(PrecioFinalImpuesto(200, 0.45)); */

// KATA - nombre robot


/* const NombreRobot = () => {
    const prefijo = "RX";
    let sufijo = Math.floor(Math.random()*999);
    console.log(prefijo+sufijo);
}
console.log(NombreRobot()) */
/* 
const NombreRobot = (prefijo = 'RX') => prefijo + (Math.trunc((Math.random() *999)));

console.log(NombreRobot()) */
/* 
const esparcir = (name, ps, atk, def, speed) => {
    console.log("Nombre", name);
    console.log("Vida", ps);
    console.log("Ataque", atk);
    console.log("Nombre", def);
    console.log("Nombre", speed);
}

let pokemon = ["Pikachu", 35, 55, 40, 90];
let conquer = ["Raditz", 40, 66, 77, 88];

esparcir(...pokemon);
esparcir(...conquer); */

// REST
// Hace flexible los argumentos que admite
/* const Agrupar = (...argumentos) => {
    console.log(argumentos)
}

Agrupar(1, 2, 3, 4, 5); */

// Se propone generar una funcion que usando REST, le pasamos varios argumentos correspondientes a las habilidades de un luchador o luchadora, y posteriormente las mostrará por console.log , a cada habilidad le sumará un valor random del 1 al 10.
/* const GeneraLuchador = (...argumentos) => {
    let random = Math.floor(Math.random()*10);
    console.log(random)
    
    let nuevoArgumentos = argumentos.map(argumento => argumento + random)
    console.log(nuevoArgumentos)
}

// const guerrero = ["Guerrero", 100, 200, 400, 25 ];
// GeneraLuchador(...guerrero) */

/* // DESESTRUCTURAR ARRAY
let comida =  ["spaghetti", "sushi", "paella", "arroç al forn", "pollo"];
let [uno, dos, tres, cuatro, cinco] = comida;

console.log(dos); */

// // DESESTRUCTURAR OBJETOS
// let musica = {
//     grupo1: "Pink Floyd",
//     grupo2: "Joan Macarra",
//     grupo3: "Bad Bunny"
// };

// let { grupo1: rock, grupo2: punk, grupo3: trapLatino } = musica;

// console.log(rock, punk);

