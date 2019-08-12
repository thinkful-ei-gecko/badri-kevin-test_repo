'use strict';
let myTeam = 'Badri and Kevin';
console.log(myTeam);

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old.
     I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age){
  if (age < 0) {
    throw new Error ('Age cannot be negative');
  }
  return 2019 - age;
}

try {
  const greeting1 = createGreeting('Badri', 25);
} 
catch (e){
  console.error(e);
}

const greeting1 = createGreeting('Badri', 25);
console.log(greeting1);
