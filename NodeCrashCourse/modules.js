// const xyz = require('./peoples');

// console.log(xyz); // Objet vide
// console.log(xyz.people, xyz.ages);

const { people, ages} = require('./peoples');

console.log(people, ages);

const os = require('os');
console.log(os.platform(), os.homedir());