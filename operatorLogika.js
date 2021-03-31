let men = 19;
let woment = 20;

let right = men > woment;
let wrong = men < woment;


// (And)
let result = right && wrong;
document.write(`${right} && ${wrong} = ${result}<br>`)

// (or)
let or = right || wrong;
document.write(`${right} || ${wrong} = ${or} <br>`)


// (Not)
var not = !wrong
document.write(`${right} ! ${wrong} = ${not}`)