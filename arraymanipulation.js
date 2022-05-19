let givenArray = [1, 2, "MIT Certificate", 4, 5];
givenArray.length = 5;
let newArray = [];
let element1 = '';
let element2 = '';


// Step 1: use slice to find elements in an array
function sliceElements(givenArray) {
  //TODO: return last 3 elements of givenArray
  newArray = givenArray.slice(2,5);
  return newArray;
}

// Step 2: use splice to find elements in an array
function spliceElements(givenArray, element1, element2) {
  //TODO: remove the last element of givenArray and add element1 and element2 at that position
  givenArray.splice(4);
  givenArray.push(element1, element2);
  console.log(givenArray.length);
  return givenArray;
}

// Step 3: use splice to find elements in an array
function splitElements(givenString) {
  //TODO: convert givenString into an array of words
  let newString = givenString.split(" ");
  return newString;
}

//Uncomment these line to see results for step 1
console.log(sliceElements([1, 2, "MIT Certificate", 4, 5])); // should return ["MIT Certificate", 4, 5]
console.log(sliceElements([1, 2, [3, 4], "JavaScript"])); // should return [2, [3, 4], "JavaScript"]

//Uncomment these line to see results for Step 2
var arr = [1, 2, "MIT Certificate", 4, 5];
console.log(spliceElements(arr, "JavaScript", 101)); // should return [1, 2, "MIT Certificate", 4, "JavaScript", 101]

//Uncomment these line to see results for Step 3
var str = "MIT Certificate loves JavaScript";
console.log(splitElements(str)); // should return ["MIT", "Certificate", "loves", "JavaScript"]
