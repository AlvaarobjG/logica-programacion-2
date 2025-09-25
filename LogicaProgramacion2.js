function obtenerTemperaturaCelsius() {
    let temperaturaCelsius;
    let entradaValida = false;

    while (!entradaValida) {
        const input = prompt("Por favor, ingresa la temperatura en grados Celsius:");

        const numero = parseFloat(input);

        if (!isNaN(numero) && input !== null && input.trim() !== "") {
            temperaturaCelsius = numero;
            entradaValida = true;
        } else {
            alert("Error: Por favor, ingresa un valor numérico válido.");
        }
    }
    return temperaturaCelsius;
}

const tempCelsius = obtenerTemperaturaCelsius();

const tempFahrenheit = (tempCelsius * 9/5) + 32;
const tempKelvin = tempCelsius + 273.15;

console.log(`Temperatura en Celsius: ${tempCelsius}`);
console.log(`Grados Kelvin: ${tempKelvin}`);
console.log(`Grados Fahrenheit: ${tempFahrenheit}`);
