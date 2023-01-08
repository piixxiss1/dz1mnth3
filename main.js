// 1

let i = 0;
 const printArrayValues = ()=> {
    i++;
    if(i > 3){
  return "array"
 
    } 
    console.log(i , "array");
    printArrayValues()
   
    console.log(arr[i],'array');

 }
 printArrayValues()

 
// 2

let arr1 = [1,2,3];
let arr2 = [4,5,6,7,8,9,10];
let arr3 = arr1.concat(arr2);

console.log(arr3);

// 3

let arr = [1,2,3,4,5];
for (let i = 0; i<arr.length; i++);
console.log(arr.pop())


// 4
 

const str = "'loremipsumdolor','o'"

console.log(str.slice(4).match(/o/g));


 console.log("'loremipsumdolor,'o'".match(/o/g));



