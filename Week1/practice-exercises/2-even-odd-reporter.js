/**
 * Report whether or not a number is odd/even!
 *
 *  Create a for loop, that iterates from 0 to 20.
 *  Create a conditional statement that checks if the value of the counter variable is odd or even.
 *  If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
 *  If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.
 */

  let length = 20;
  for (let i = 0; i <= length; i++) {

    if (i % 2 === 0) {
      console.log(i + " is even!");
    } else {
      console.log(i + " is odd!");
    }
  }

  // https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-5.php