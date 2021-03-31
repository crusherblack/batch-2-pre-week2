//Operator Aritmatik
let value1 = 10;
let value2 = 25;

const sum = value1 + value2;
const subtraction = value1 - value2;
const multiplication = value1 * value2;
const division = value1 / value2;
const modulus = value1 % value2;


document.getElementById("sum").innerHTML = sum
document.getElementById("subtraction").innerHTML = subtraction
document.getElementById("multiplication").innerHTML = multiplication
document.getElementById("division").innerHTML = division
document.getElementById("modulus").innerHTML = modulus

//Assignment Operator
var assignmentValue1;
assignmentValue1 = 100  

document.getElementById("assign").innerHTML = assignmentValue1


assignmentValue2 = 50;
assignmentValue2 += 30;
document.getElementById("addAssign").innerHTML = assignmentValue2


assignmentValue3 = 50;
assignmentValue3 -= 30
document.getElementById("subtractAssign").innerHTML = assignmentValue3


assignmentValue4 = 50;
assignmentValue4 *= 40
document.getElementById("multiAssign").innerHTML = assignmentValue4

assignmentValue5 = 50;
assignmentValue5 /= 40
document.getElementById("devideAssign").innerHTML = assignmentValue5

assignmentValue6 = 50;
assignmentValue6 %= 40
document.getElementById("modulusAssign").innerHTML = assignmentValue6


preInc = 10;
preInc++
document.getElementById("preInc").innerHTML = preInc

postInc = 10;
++postInc
document.getElementById("postInc").innerHTML = postInc

preDec = 10;
preDec--
document.getElementById("preDec").innerHTML = preDec

postDec = 10;
--postDec
document.getElementById("postDec").innerHTML = postDec


// Logical Operator
let year = 2040;

if((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)){
    document.write(year + " is A leap Year.")
}else{
    document.write(year + " is not A leap Year.")
}