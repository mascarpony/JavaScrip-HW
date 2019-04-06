//1
let get = (num) => {
  let arr  = String(num).split("");
  let new_arr=[];
  for (let i in arr){
    new_arr[i] = Number(arr[i]);
  }
  return new_arr;
}
console.log(get(1234))

//2

let find = (arr) => {
  let res = []
  nextInput:
    for(let i in arr){
      let str = arr[i];
      for (let j = 0; j<res.length;j++){
        if(res[j]==str){
          continue nextInput;
        }
      }
         res.push(str)
    }
  return res;
}
console.log(find([1,2,2,8,2]))

//3
var obj = {
  a: 5,
  b: 3,
  c: 8
}
let del = (arr) => {
  for (let el of arr){
    delete obj[el];
  }
}
del(['a','b'])
console.log(obj)

//4
let a = [2,0,false,'key',false]
let res = (arr) => {
  while(arr.indexOf(false)!=-1){
    i = arr.indexOf(false);
    arr.splice(i,1);
  }
  return arr;
}
console.log(res(a))

//5
let obj1 = {
  a:1,
  obj:{
    c:3
  },
  b:3
}
let obj2 = {
  a:1,
  b:3,
  obj:{
    c:3
  }
}

//1 variant (lodash)

let deepEqual = (a,b)=>{
  return_.isEqual(a, b);
}

console.log(deepEqual(obj1,obj2));

//2 variant 
var deepEqual = function (a, b) {
  //case 'Number'/'String'
  if (a === b) {
    return true;
  }
  //case 'object'
  else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
    //comparison by key value
    if (Object.keys(a).length != Object.keys(b).length)
      return false;
    //comparison by value
    for (var prop in a) {
      if (y.hasOwnProperty(prop))
      {  
        //recursion, check every value
        if (! deepEqual(a[prop], b[prop]))
          return false;
      }
      else
        return false;
    }
    return true;
  }
  else 
    return false;
}
console.log(deepEqual(obj1,obj2))


//6
let res = (str) => {
  arr = str.split(" ");
  for (let el in arr){
    let old_char = arr[el].charAt(0);
    let new_char = old_char.toUpperCase();
    arr[el] = arr[el].replace(old_char,new_char);
  }
  let new_str = ""
  for (let el of arr){
    new_str = new_str + el + " ";
  }
  return new_str;
}
console.log(res("luke, i'm your father"))

//7
let start =  (x) => {
var timerId = setInterval( ()=> {
  get(x--)
  if(x<0){
   clearInterval(timerId)
 }
}, 1000);
function get(x){
  return console.log(x);
}
}

start(2)

//8
let concat = (a,b) => {
  return {...a,...b}
}
const z = concat(a,b)
console.log(z);

//9
let time = () => {
  let currentDay = new Date();
  let month = currentDay.getMonth() + 1; //because of [0,11]
  return currentDay.getDay() + "."+month+"." + currentDay.getYear()%100 + " " + currentDay.getHours() + ":"+currentDay.getMinutes();
}
console.log(time())
