// Converting temperature to different units
const kelvin = 293; // this value stays constant
let celsius = kelvin - 293;  
// celsius is subtracting 293 from kelvin

let fahrenheit = celsius * (9/5) + 32;
// this coverts celsius to fahrenheit
 fahrenheit = Math.floor(celsius * (9/5) +32);
// this rounds the fahrenheit down to a whole number

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// convert to Newton
let newton = celsius * (33 / 100);
// Round down
 newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees newton.`);