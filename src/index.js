
const info = require('./information'); 
const cowsay = require('cowsay'); 

console.log(cowsay.say({
    text : `i'm ${info.nom} i come from ${info.campus}`,
    E : "oO",
    T: "U "
})); 
   

