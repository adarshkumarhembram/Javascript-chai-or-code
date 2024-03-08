// array

const myarr  =[1,2,3,4,4]
const myheros = ["shaktiman","bhim","raju"]

const myarr2= new Array( 1,2,3,4)
console.log(myarr[1]);


// array methods

myarr.push(7)
myarr.pop(7)
myarr.unshift(7)
console.log(myarr);

//slice and splice
console.log("A", myarr);

const myn1=myarr.slice(1,3)

console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3)

console.log(myn1);
console.log(myn2);
