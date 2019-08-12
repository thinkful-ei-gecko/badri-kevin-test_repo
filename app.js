'use strict';
let myTeam = 'Badri and Kevin';
console.log(myTeam);

function createGreeting(name, age) {
  const yearOfBirth = 2019 - age;
  return `Hi, my name is ${name} and I'm ${age} years old.
     I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting('Badri', 25);
console.log(greeting1);
