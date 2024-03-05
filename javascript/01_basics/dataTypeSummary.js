  // data types

//primitive-number,symbol,string,boolean,bigint, undefined,null

//non - primitive--> array object function

const heros = ["tom", "wool", "add"];
let obj = {
  name: "adarsh",
  age: 34,
};

const myfunction = function () {
  console.log("i am adarsh");
};

myfunction();
let userone = {
    email: "gyh@gmail.com",
    upi: "ji@ybl",
  };
  
  let usertwo = userone;
  usertwo.email = "kjsdcn@gmail.com";
  
  console.log(usertwo.email);
  console.log(userone.email);