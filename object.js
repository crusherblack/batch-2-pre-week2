const persons = {
    "name" : "Petter",
    "age" : 28,
    gender : "Male" ,
    "born City": "Jakarta",
}

for(let data in persons){
    document.write(persons[data] + "<br>");
}

// document.write(persons.name +"<br>")
// document.write(persons["age"] +"<br>")
// document.write(persons.gender +"<br>")
// document.write(persons["born City"] +"<br>")

// let input = prompt("Input Your show Property")
//  alert(persons[input])

// console.log(persons)