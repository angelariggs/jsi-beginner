/* Example conditional statement

var isTeacher = function(name) {
  if (name === "Dan") {
    return true;
  } else if (name === "Andrew") {
    return true;
  } else {
    return false;
  }
}

console.log(isTeacher("Angela"));*/


/* Rewrite above code so there's only 'if' and 'else'; no 'else if'
var isTeacher = function(name) {
  if (name === "Andrew") {
    return true;
  } else {
    return false;
  }
}

console.log(isTeacher("Dan"));*/

/*var isTeacher = function(name) {
  if (name === "Dan") {
    return true;
  }
}

console.log(isTeacher("Angela"));*/


/*Conditional statements w/undefined*/

var students = [
  {
    name: 'Chauncey',
    faveColor: "blue",
    petType: 'Maine Coone',
    petName: 'Chloe Bear',
    faveFood: 'Everything',
    carMake: 'Smart'
  },
  {
    name: 'Justin',
    faveColor: 'green',
    petType: 'invisible',
    petName: 'none',
    faveFood: 'sushi',
  }

]

students.forEach(function(classmate) {
  ['name', 'faveColor', 'petType', 'petName', 'faveFood', 'carMake'].forEach(function(attribute) {
    if (classmate[attribute] === undefined) {
      console.log(attribute + ' is unknown');
    } else {
      console.log(classmate[attribute])
    }
  })
});
