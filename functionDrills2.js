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


function decode (message) {
  let msgArray = message.split(' ');
  let decodedMsg = '';

  for (let i = 0; i < msgArray.length; i++) {
    if (msgArray[i][0] === 'a') {
      decodedMsg += msgArray[i][1];
    }
    else if (msgArray[i][0] === 'b'){
      decodedMsg += msgArray[i][2];
    }
    else if (msgArray[i][0] === 'c'){
      decodedMsg += msgArray[i][3];
    }
    else if (msgArray[i][0] === 'd'){
      decodedMsg += msgArray[i][4];
    }
    else {
      decodedMsg += ' ';
    }
  }

  return decodedMsg;
}

//console.log(decode('craft block argon meter bells brown croon droop'));
//expected: for loop

function daysInMonth(month, leapYear){
  let result;
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    result = `${month} has 31 days`;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    result = `${month} has 30 days`;
    break;
  case 'February':{
    if (leapYear) {
      result = 'February has 29 days';
    }
    else {   
      result = 'February has 28 days';
    }
    break;
  }
  default: throw new Error('Must provide a valid month');
  }
  return result;
}

/*
console.log(daysInMonth('January'));
console.log(daysInMonth('February'));
console.log(daysInMonth('February', true));
console.log(daysInMonth('February', false));
console.log(daysInMonth('not a month'));
console.log(daysInMonth('April'));
*/

