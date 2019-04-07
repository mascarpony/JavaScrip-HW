// 1 task
function convert(number) {

  let array = [];
  
  let numberString = number.toString();
  
  let digitsString = numberString.split('');
  
  for(let i = 0; i < digitsString.length; i++) {
  array.push(Number.parseInt(digitsString[i]));
  }
  return array;
}

console.log(convert(1234));

//2 task
function filter(array) {
  
  for (let index = 0; index < array.length; index ++)
    for(let i = index + 1; i < array.length; i++) 
      if (array[index] == array[i]) {
        array.splice(i,1);
        i--;
      }
  
  return array;
}

console.log(filter([1,2,8,2]));

//3 task
var object = {
  a: 5, 
  b: 3, 
  c: 8
};

function deleteKeyValue(object, key) {
  for (let index in key) 
    delete object[key[index]];
  
  return object;
}

console.log(deleteKeyValue(object,['a', 'c']));

//4 task
function removeFalsyValues(array) {
  
  for (let i = 0; i < array.length; i ++)
      if (array[i] == false) {
        array.splice(i,1);
        i--;
      }
  
  return array;
}

console.log(removeFalsyValues([2, 0, false, 'key']));

//5 task

//6 task
function capitalFirstLetter(oldString) {
  
  let array = oldString.split(" ");
  let newString = "";
  
  for (let i = 0; i < array.length; i++) {
    let newLetter = array[i][0].toUpperCase();
    
    newString += newLetter + array[i].substr(1) + " ";
  }
  
  return newString;
}

console.log(capitalFirstLetter("luke, i'm your father"));

//7 task

//8 task

//9 task
