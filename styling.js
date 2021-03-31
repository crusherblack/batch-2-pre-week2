//mengganti value dari object properties / Manipulating by values

const person = {
  firstName: "firdaus",
  address: "bandung",
  job: "programmer",
  sallary: 1000000,
  rank: "VII",
  displayName: function () {
    return this;
  },
};

if (person.rank === "VI") {
  person.sallary = 2000000;
}

//variable namaAwal bereference ke object person
let namaAwal = person.firstName; //firdaus programmer / mengcopy value dari sebuah properties
namaAwal = "Firdaus Putra";

console.log("Manipulating by references", namaAwal);
console.log(person.firstName);

console.log(person.sallary);

console.log("sebelum value diubah", person.firstName);
person.firstName = "samsul";
console.log("setelah value dirubah", person.firstName);

//Menghapus object properties

console.log("person", person);

if (person.rank !== "VI") {
  delete person.job;
}

console.log("person after delete", person);

//cara memanggil method

person.displayName();

//multidimension array // array dalam array

const array1 = ["ABC", 24, 2000];
const array2 = ["bcd", 25, 1000];

const multidimensionArray = [array1, array2];
const multidimensionArray2 = [
  ["a1", 24, 2000],
  ["a2", 25, 1000],
  ["a3", 25, 1000],
  ["a4", 25, 1000],
  ["a5", 25, 1000],
];

multidimensionArray2.push(["a6", 27, 500]); //masukin value ke index paling akhir

multidimensionArray2.splice(3, 0, ["ccc", 88, 1000]); //splice menambahkan data secara spesific

//multidimensionArray2.splice(4); //0,1,2,3 //splice mengambil 4 element dari index 0

//multidimensionArray2.splice(0, 2); //menghapus dari index mana dan berapa yang dihapus dari index tersebut

multidimensionArray2.pop(); //remove element terakhir dari array apapun itu
multidimensionArray2.shift(); //remove element pertama dari array

multidimensionArray2.forEach(function (item) {
  item.pop();
});

console.table(multidimensionArray2);

console.log(multidimensionArray);
console.log(multidimensionArray2);
console.log(multidimensionArray2[0][2]); //cara memanggil

//nested loop

for (i = 1; i <= 5; i++) {
  //outer loop
  console.log("outer loop", i);
  for (j = 6; j <= 10; j++) {
    //inner loop
    console.log("inner loop", j);
  }
}

//slice

const animals = ["duck", "bird", "cow", "crocodile", "chicken"];

const animalsYangTerhapus = animals.slice(1, 4);
//sifat dari slice itu, mengcopy array refrences kemudian mereturn array baru sehingga array references tidak terefek / tidak termutasi
//slice memotong dari index >= start hingga < index end

console.table(animals);
console.table(animalsYangTerhapus);

//array like object

function convertParameterToArray() {
  return Array.prototype.slice.call(arguments);
}

let listNumber = convertParameterToArray("andi", 2, 3); //["andi",2,3]
console.log(listNumber);

//javascript style
// = * + % <== operator

const helloGoodMorningAll = "good morning all";

const FULL_PRICE = 2 + 3;

const URL = "http://dumbways.id";

function helloWorld() {
  console.log("hello world");
  function test() {
    console.log(URL);
  }
}

// "Landscape.png" === "landsacape.png" // windows
// "Landscape.png" !== "landscape.png" // unix / caseSensitive

//local dan global varible

const MY_DOMAIN = "www.tahucoding.com";

function testing1() {
  let hello = "hello"; //local variable
  console.log("akses hello dari local scope", hello);
  console.log("akses MYDOMAIN dari local scope", MY_DOMAIN);
}

testing1();

// console.log("akses hello dari global scope", hello);
console.log("akses MYDOMAIN dari global scope", MY_DOMAIN);

// jadikan local ke global
localToGlobal();

console.log(localVariable);

function localToGlobal() {
  console.log("dalam funciton", this);
  localVariable = "ini dari local";
}

console.log(this);

//akses propertis pada method dari object lain // binding propertis dari object lain

const profile = {
  getProfile: function () {
    return this.firstName + this.lastName;
  },
};

const profileData = {
  firstName: "Putri",
  lastName: "Shina",
};

console.log(profile.getProfile.call(profileData));
