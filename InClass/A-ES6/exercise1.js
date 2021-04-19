// Turn this function into an arrow function
const arrow = () => "es6 is awesome!";



//Use the es6 syntax for default parameter
const defaultParameter = (name = "sam") => {
  //var name = name || "sam";
  return name;
}

// Use the spread operator to combine arr1 and arr2
const combineArrays = (arr1, arr2) => {
  const combineArr1And2 = [...arr1, ...arr2];
  return combineArr1And2;
}

const abc = ["a", "b", "c"];
const ztx = ["z", "t", "x"];
console.log(combineArrays(abc, ztx));

//use destructuring to return the object's cyf property
const destructuring = (obj) => {
  //obj.cyf;
  const { cyf } = op;  //everything inside the brakets takes its own value as a const
  return cyf;
}

const op = {
  abc: "abc",
  cyf: "bcd"
}

 console.log(destructuring(op));

// use template literal to return a string with the sum of a and b
const templateString = (a, b) => {
  return `The sum is equal to ${a + b}`;
}

console.log(templateString(1, 3))
 