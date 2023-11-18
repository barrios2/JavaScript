import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  
  const activeStudentsAndMentors = []; // will store students/mentors that are actively participating in className
  let activeModule; // to store the current module of the specified class
  
  for(const {name, class: activeClassName} of students){ // loops through students' properties to get their name and class name
    if(activeClassName === className){ // checks if className of students equals activeClassName
      activeStudentsAndMentors.push({name, role: "student"}) // pushing name/role of student to active... (empty) array
    }
  }

  for(const {name, currentModule} of classes){ // checks each name & currentModule from classes array
    if(name === className){ // if name (from each class object) is the same as className then execute the following:
      activeModule = currentModule; // value of currentModule ("react") will be stored in activeModule, will be use later
    }
  }

  for(const {name, nowTeaching} of mentors){
    if(activeModule === nowTeaching){ // checks if activeModule is same as property nowTeaching from its respective mentor
      activeStudentsAndMentors.push({name, role: "mentor"}); // pushes the name of that mentor + their role to the active... array
    }
  }

  return activeStudentsAndMentors;
};

// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  let activeClassesObj = {}; // will store the name of each active class
  const activeClasses = classes.filter(c => c.active); // stores classes that have active: true from classes array

  activeClasses.forEach(activeClass => {
    const peopleByClass = getPeopleOfClass(activeClass.name); // used activeClass.name from each class object and get results using prev. function

    return activeClassesObj[activeClass.name] = peopleByClass; // set each object inside the activeClassesObj to the name of each activeClass array and store the result of using the prev. function
  });

  return activeClassesObj;
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());
