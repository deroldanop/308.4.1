const myString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


let counter = 1;
let arr = [[]];
const myDictionary = {};

for (let i = 0; i <= myString.length; i++) {
  if (myString[i] === '\n') {
    break;
  }
  if (myString[i] === ',') {
    counter++;
  }
}

let arrElement = "";
let lineCounter = 0;
for (let i = 0; i < myString.length; i++) {

  if (myString[i] === ',') {
    arr[lineCounter].push(arrElement);
    arrElement = "";
    continue;
  }

  if (myString[i] === '\n') {
    arr[lineCounter].push(arrElement);
    arrElement = "";
    lineCounter++;
    arr.push([]);
    continue;
  }

  arrElement += myString[i];
}
arr[lineCounter].push(arrElement);

console.log(`Two dimentional array: ${arr}`);

// Part 3

const collection = [];
for (let i = 1; i < arr.length; i++) {
  let obj = {};
  for (let j = 0; j < arr[i].length; j++) {
    obj[arr[0][j].toLowerCase()] = arr[i][j];
  }
  collection.push(obj);
}

console.log(collection);

// Part 4

collection.pop();
collection.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25"});
collection.push({id: "7", name: "Bilbo", occupation: "None", age: "111"});


// Calculate average age
let sum = 0;
for (let i = 0; i < collection.length; i++) {
  sum += parseInt(collection[i].age);
}
const avgAge = sum / collection.length;
console.log("Average age: ", avgAge);


//Part 5
let csvString = "";
for (let key in collection[0]) {
  csvString += key + ",";
}
csvString = csvString.slice(0, -1);
csvString += "\n";
for (let i = 0; i < collection.length; i++) {
  for (let key in collection[i]) {
    csvString += collection[i][key] + ",";
  }
  csvString = csvString.slice(0, -1);
  csvString += "\n";
}
csvString = csvString.slice(0, -1);
console.log('CSV: ');
console.log(csvString);