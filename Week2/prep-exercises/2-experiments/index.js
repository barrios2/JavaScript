"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  // TODO
  // Write a for loop that iterates `sampleSize` times (sampleSize is a number).
  // In each loop iteration:
  //
  // 1. Generate a random integer between 1 and 6 (as if throwing a six-sided die).
  // 2. Add `1` to the element of the `valueCount` that corresponds to the random
  //    value from the previous step. Use the first element of `valueCounts`
  //    for keeping a count how many times the value 1 is thrown, the second
  //    element for value 2, etc.

  for (let i = 0; i < sampleSize; i++) {

    // math random gives a number between 0 and 1, but 1 is not included
    // so I multiply by the total of sides on the dice and adding 1 ensures that the max number is included in the range
    const getRandomNumber = Math.floor(Math.random() * 6) + 1;
    
    // I declared valueCountIndex because every time the dice is rolled we want to 
    // subtract one so that we get the right index from the array (because arrays index start at 0)

    const valueCountIndex = getRandomNumber - 1;

    // we add one to the count to keep track of how many times that value has been thrown (from getRandomNumber)
    valueCounts[valueCountIndex]++;
  } 

  const results = [];

  // TODO
  // Write a for..of loop for the `valueCounts` array created in the previous loop. 
  // In each loop iteration:
  // 1. For each possible value of the die (1-6), compute the percentage of how
  //    many times that value was thrown. Remember that the first value of
  //    `valueCounts` represent the die value of 1, etc.
  // 2. Convert the computed percentage to a number string with a precision of
  //    two decimals, e.g. '14.60'.
  // 3. Then push that string onto the `results` array.

  for (const element of valueCounts) {    
    const percentage = (element / sampleSize) * 100;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed 
    // get 2 decimal places and returns as a string
    const fixedPercentage = percentage.toFixed(2);

    results.push(fixedPercentage);
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

//   // TODO
//   // Write a for..of loop that calls the `runExperiment()` function for each
//   // value of the `sampleSizes` array.
//   // Log the results of each experiment as well as the experiment size to the
//   // console.
//   // The expected output could look like this:
//   //
//   // [ '26.00', '17.00', '10.00', '19.00', '16.00', '12.00' ] 100
//   // [ '14.60', '17.10', '19.30', '15.50', '16.70', '16.80' ] 1000
//   // [ '16.71', '16.68', '16.69', '16.66', '16.67', '16.59' ] 1000000

  for (const element of sampleSizes) {
    const results = runExperiment(element)
    console.log(results, element);
  }
}

main();
