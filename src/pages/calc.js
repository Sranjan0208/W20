const calc= ()=>{
let myArray = [];
for (let i = 0; i < 24; i++) {
  myArray[i] = [];
  for (let j = 0; j < 3; j++) {
    myArray[i][j] = Math.floor(Math.random() * 4);
  }
}
function euclideanDistance(point1, point2) {
  let sum = 0;
  for (let i = 0; i < point1.length; i++) {
    sum += (point1[i] - point2[i]) ** 2;
  }
  return Math.sqrt(sum);
}

let inputArray = [1, 0, 0];
let minDistIndex1 = 0;
let minDistIndex2 = 0;
let minDistValue1 = Number.MAX_SAFE_INTEGER;
let minDistValue2 = Number.MAX_SAFE_INTEGER;
let dist_arr = [];
for (let i = 0; i < myArray.length; i++) {
  let dist = 0;
  dist = euclideanDistance(inputArray, myArray[i]);
  //console.log(dist);
  if (dist < minDistValue1) {
    minDistValue2 = minDistValue1;
    minDistValue1 = dist;
    minDistIndex1 = i;
  } else if (dist < minDistValue2 && dist != minDistValue1) {
    minDistValue2 = dist;
    minDistIndex2 = i;
  }
}
const names = ["Anjali", "Bhavya", "Cheshta", "Divya", "Ekta", "Farha", "Gauri", "Hina", "Ishita", "Jahnvi", "Kavya", "Lakshmi", "Mira", "Neha", "Ojaswini", "Preeti", "Ankita", "Rohini", "Sakshi", "Tanvi", "Udjwala", "Vaishnavi", "Yashi", "Zoya"];
console.log(
  "2 Indexes with minimum Euclidean distance: " +
    names[minDistIndex1] +
    " " +
    names[minDistIndex2]
);
}
export default calc;