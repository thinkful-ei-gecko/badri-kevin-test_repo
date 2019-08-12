'use strict';

function jediName(firstName, lastName) {
  return `${firstName.slice(0, 3)}${lastName.slice(0, 2)}`;
}

//console.log(jediName('Badri', 'Tulsiram'));

function beyond(num){
  if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
    console.log('And beyond');
  }
  else if (num > 0){
    console.log('To infinity');
  }
  else if (num < 0){
    console.log('To negative infinity');
  } 
  else {
    console.log('Staying home');
  }
}

/*
beyond(Number.POSITIVE_INFINITY);
beyond(Number.NEGATIVE_INFINITY);
beyond(100);
beyond(-100);
beyond(0);
*/
