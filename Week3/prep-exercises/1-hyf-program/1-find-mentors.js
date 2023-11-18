import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  const possibleMentors = []; // declared empty array to store filtered mentors

  for(const {name, canTeach} of mentors) { // looping through each objects in mentors array using destructuring to extract the name and canTeach properties
    const filteredModules = canTeach.filter(word => word === moduleName); // filtering through canTeach array of each mentor if they teach the moduleName 

    if(filteredModules.length > 0) { // filteredModules can return empty array so I check if its length is greater than 0 
      possibleMentors.push(name);
    }
  } 
  return possibleMentors;
};

// You can uncomment out this line to try your function
console.log(possibleMentorsForModule('using-apis'));

/******
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const results = possibleMentorsForModule(moduleName); // will contain the names of mentors who can teach the module
  const randomMentor = Math.floor(Math.random() * results.length);
  return results[randomMentor];
};

// You can uncomment out this line to try your function
console.log(findMentorForModule('javascript'));
