// Convert Kelvin to Celsius, then to Fahrenheit
// Convert Celsius to Newton

const kelvin = 0;

// Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
 
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert to the newton scale
let newton = celsiusToNewton(celsius);
console.log(`The temperature is ${newton} degrees Newton.`)

// Convert celsius to fahrenheit; Fahrenheit = Celsius * (9/5) + 32
function celsiusToFahrenheit(celsius) {
    return Math.floor(celsius * (9/5) + 32);
}

// Convert celsius to newton; Newton = Celsius * (33/100)
function celsiusToNewton(celsius) {
    return Math.floor(celsius * (33/100))
}