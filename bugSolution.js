function bar(a, b) {
  // Explicit type conversion using parseInt
  return parseInt(a) + parseInt(b);
}

console.log(bar(1, "2")); // Output: 3

//Alternative using Number():
function bar2(a,b){
  return Number(a) + Number(b);
}
console.log(bar2(1, "2")); //Output: 3
//Handle potential errors 
function bar3(a,b){
  let numA = Number(a);
  let numB = Number(b);
  if(isNaN(numA) || isNaN(numB)){
    return "Invalid input";
  }
  return numA + numB;
}
console.log(bar3(1,"2"));//Output:3
console.log(bar3("a","b"));//Output: Invalid input