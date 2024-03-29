'use strict';
let myTeam = 'Badri and Kevin';
console.log(myTeam);

function createGreeting(name, age) {
  if (typeof name === 'undefined' || typeof age === 'undefined') {
    throw new Error('Arguments not valid.');
  }
  if (age < 0) {
    throw new Error ('Age cannot be negative');
  }

  if (typeof name !== 'string' || typeof age !== 'number'){
    throw new TypeError();
  }

  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age){
  
  return 2019 - age;
}

try {
  const greeting1 = createGreeting('Badri', 25);
  console.log(greeting1);
} 
catch (e){
  console.error(e.message);
}

