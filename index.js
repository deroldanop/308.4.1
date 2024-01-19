
const myString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let newstr = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let counter = 1;
let nCounter = 1;
for(let i = 0; i <= myString.length; i++){
    if(myString[i] === '\n'){
        console.log(cell1, cell2, cell3, cell4);
         cell1 = "";
 cell2 = "";
cell3 = "";
 cell4 = "";
        counter = 1
        continue;
    }
    
if(myString[i] === ','){
    counter++;
    continue;
}
if(counter === 1){
    cell1 += myString[i];
}
if(counter === 2){
    cell2 += myString[i];
}
if(counter === 3){
    cell3 += myString[i];
}
if(counter === 4){
    cell4 += myString[i];
}


}

for(let j = 0; j <= myString.length; j++){

    if(myString[j] === '\n'){
        break;
    }
    if(myString[j] === ',') {
        nCounter++;
    }
}

console.log(`The dictionary have ${nCounter} elements`)






// for(let j = 0; j <= myString.length; j++){

//     if(myString[j] === '\n'){
//         break;
//     }
//     if(myString[j] === ',') {
//         nCounter++;
//     }
// }


// for (const i of myString) {
 
//     if (myString[i] == "\n"){
//         while (i != ",")
//         continue;
//     }
// newstr += i; 
//     console.log(newstr);

// }


