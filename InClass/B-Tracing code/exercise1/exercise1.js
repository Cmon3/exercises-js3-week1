const greetPeople = (people) => {
  let greeting = "He";
  greeting = greeting + "llo";
  greeting = greeting + " ";

  //people.forEach((person) => {
  for (const key in people) {
    const person = people[key];
    if (key == people.length - 1) {
      greeting = `${greeting} ${person}. `;
    } else if (key == people.length - 2) {
      greeting = `${greeting} ${person} &`;
    } else {
      greeting = `${greeting} ${person}`;
    }
    console.log(greeting);
  };

  return greeting;
}

/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
  const mentors = ['Irina', 'Ashleigh', 'Etza'];
  const result = greetPeople(mentors)
