let stringArray = ["Pertama","Kedua","Ketiga"] //Index[0]

let intArray = [1,2,3,4]//Integer

let mixArray = [true,1,"Ini String",1.2,{"title" : "Hallo ini sebuah Object"}, function myFunc(){console.log("hallo")}]


// console.log(mixArray[0])//True
// console.log(mixArray[4])//Title
// console.log(mixArray[3])//1.2


// console.log(mixArray[mixArray.length - 2])


// for(var i = 0; i <= mixArray.length; i++){
//     console.table(mixArray[i])
// }

// for(var extract of mixArray){
//     console.table(extract)
// }


// for(var extract in mixArray){
//     console.table(mixArray[extract])
// }

mixArray.push(function newFunc(){
    console.log("this is new function")
})

mixArray.unshift("This is new Value in Array Mix")

let last = mixArray.pop()

let first = mixArray.shift()

for(var extract of mixArray){
    console.table(extract)
}