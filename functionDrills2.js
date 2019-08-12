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