/* Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
tripleFive()
Five! Five! Five! */

function tripleFive(){
  for(var i = 0; i<3; i++){
    return "Five! Five! Five!";
  }
}
console.log("TripleFive: " + tripleFive());

/*Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
lastLetter('hello') should return 'o'
lastLetter('island') should return 'd'*/

function lastLetter(word){
  var lastLetterOfWord = word.charAt(word.length-1);
  return "The last letter of the word is: " + lastLetterOfWord;
}
console.log("lastLetter: " + lastLetter("hello"));

/* Write a function called 'square' which takes a single argument which is a number, and returns number * number.
square(3) should return 9
square(5) should return 25 */

function square(num){
  return num * num;
}
console.log("square: " + square(5));

/* Write a function called 'negate' which takes a single number argument and returns the negative of that number.
negate(5) should return -5
negate(-8) should return 8 */

function negate(number){
  return number * -1;
}
console.log("negate: " + negate(75));

/* Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
toArray(1, 4, 5) should return [1, 4, 5]
toArray(8, 9, 10) should return [8, 9, 10] */
function toArray(a, b, c){
  return a + " "+ b + " " + c
}
console.log("toArray: " + toArray(1, 4, 5));

/* Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
startsWithA('aardvark') should return true
startsWithA('bear') should return false */

function startWithA(str) {
  if(str.charAt(0) == "A" || str.charAt(0) == "a"){
    return true;
  } else {
    return false;
  }
}
console.log("startWithA: " + startWithA("Anthony"));
console.log("startWithA: " + startWithA("bear"));

/* Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
excite('yes') should return 'yes!!!'
excite('go') should return 'go!!!' */
function excite(string){
  return string +"!!!"
}
console.log("excite: " + excite("yes"));

/*Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
sun('sundries') should return true
sun('asunder') should return true
sun('catapult') should return false*/

function sun(string){
  if(string.indexOf("sun") == -1){
    return false;
  }else{
    return true;
  }
}

console.log("sun check: " + sun("sundries"));
console.log("sun check: " + sun("catapult"));

/* Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
tiny(0.3) should return true
tiny(14) should return false
tiny(-5) should return false */

function tiny(num){
  if(num >0 && num < 1){
    return true;
  }else{
    return false;
  }
}
console.log("tinycheck: " + tiny(0.3));
console.log("tinycheck: " + tiny(16));

/* Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
getSeconds('01:30') should return 90
getSeconds('10:25') should return 625 */
function getSeconds(str){
  var hours = str.substring(0,2);
  var hoursConvert = parseInt(hours)*60;
  var mins = str.substring(3,5);
  var minsConvert = parseInt(mins);
  return hoursConvert + minsConvert;
}
console.log("getSeconds: " + getSeconds('10:25'));
