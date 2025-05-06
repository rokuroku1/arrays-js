// Definir un array de nombres
const nombres = ["Ana", "Roberto", "María", "Luis", "Carmen"];

// Imprimir cada nombre en la consola con forEach
console.log("Nombres:");
nombres.forEach(nombre => {
    console.log(nombre);
});

// Crear un nuevo array con los nombres en mayúsculas usando map
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresMayusculas);

// Filtrar los nombres con más de 5 letras usando filter
const nombresLargos = nombres.filter(nombre => nombre.length > 5);
console.log("Nombres con más de 5 letras:", nombresLargos);

// Solicitar al usuario que ingrese su edad mediante prompt
const edad = prompt("¿Cuál es tu edad?");
if (edad !== null) {
    const edadNumero = parseInt(edad);
    if (!isNaN(edadNumero)) {
        if (edadNumero >= 18) {
            alert("Eres mayor de edad.");
        } else {
            alert("Eres menor de edad.");
        }
    } else {
        alert("Por favor ingresa un número válido.");
    }
}

// Usar un for para imprimir los números del 1 al 10 en la consola
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}