// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 6];

// function findOdd(arr1, arr2) {
//   const arr3 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (!arr2.includes(arr1[i]) && !arr1.includes(arr2[j])) {
//       arr3.push(arr1[i], arr2[j]);
//     }
//     }
//   }
//   return arr3;
// }

for (let i = 0; i <= 10; i++) {
  // outer loop code
  console.log('outer loop:', i);
  for (let j = 4; j>=0; j-=2) {
    // inner loop code
  console.log('inner loop:', j);
  }
}

function helloWorld(){
  console.log("hello world");
}