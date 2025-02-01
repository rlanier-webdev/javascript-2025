// Convert Kelvin to Celsius, then to Fahrenheit
// Convert Celsius to Newton

const kelvin = 0;

// Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
 
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = celsiusToNewton(celsius);
console.log(`The temperature is ${newton} degrees Newton.`)

// Convert celsius to fahrenheit; Fahrenheit = Celsius * (9/5) + 32
const celsiusToFahrenheit = celsius => Math.floor(celsius * (9/5) + 32);

// Convert celsius to newton; Newton = Celsius * (33/100)
const celsiusToNewton = celsius => Math.floor(celsius * (33/100));