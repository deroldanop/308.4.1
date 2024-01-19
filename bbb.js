const myString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let keyArr = [];

let counter = 1;
let arr = [];
let arrElement = "";
const myDictionary = {};

for(let i = 0; i <= myString.length; i++){
    if(myString[i] === '\n'){
        break;
    }
if(myString[i] === ',') {
        counter++;
    }
}
console.log(`The dictionary have ${counter} elements`)

for(let i = 0; i < myString.length; i++){
       
    if(myString[i] === ','){
        arr.push(arrElement);
        arrElement = "";
        continue;
    }
   
    if(myString[i] === '\n'){
        arr.push(arrElement);
        arrElement = "";
        continue;
    }  
        arrElement += myString[i];
}
arr.push(arrElement);

console.log(arr);
for(let j = 0; j < counter; j++){   
    myDictionary[arr[j]] = [];
}
for(let i = 1; i < arr.length/counter; i++){

for(let j = 0; j < counter; j++){
myDictionary[arr[j]].push(arr[counter * i + j]);

}
}
console.log(myDictionary);

//  two-dimensional array












