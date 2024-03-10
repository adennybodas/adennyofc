var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"A",
"A",
"AD ",
"ADE ",
"ADE ",
"ADEN O",
"ADENN O",
"ADENNY Of",
"ADENNY Of",
"ADENNY Ofc",
"ADENNY Ofc",
"ADENNY Of",
"ADENNY Of",
"ADENNY O",
"ADEN O",
"ADE ",
"ADE ",
"AD ",
"AD ",
"A",

""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}