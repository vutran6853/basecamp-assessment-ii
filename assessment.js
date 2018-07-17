// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. Assign the keys the appropriate values.

let me = {
  firstname: "VU",
  age: 30,
  state: "Texas"
}

// CODE HERE

// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'faveColor' and set it to your favorite color as a string

me['faveColor'] = "Blue";

//CODE HERE

// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
let message = {
  date: new Date(),
  userName: me.firstname
};
//DON'T TOUCH THE CODE ABOVE
// CODE HERE

message['text'] = "Hello there!!";

// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'. upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

let adjustCount = {
  upVote: function(num1) {
    num1++;
    return num1;
  },
  downVote: function(num1) {
    num1--;
    return num1;
  }
};

let a = 4;
let b = 3;

adjustCount.upVote(a);
adjustCount.downVote(b);
// CODE HERE

// #5 Create an array called 'myFriends' with four of your friends names
// CODE HERE

let myFriends = ["Hoang", "Paul", "Hung", "Joe"];

// #6 Add a fifth friends name to the end of your myFriends array
// CODE HERE

myFriends[4] = "Sally"
console.log(myFriends);

// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. Use the built in JavaScript method to create a copy.
//DON'T TOUCH THE CODE BELOW
let myArray = [1, 2, 3, 4];
//DON'T TOUCH THE CODE ABOVE
// CODE HERE

let myArrayCopy = [];
for(i = 0; i < myArray.length; i++){
  myArrayCopy.push(myArray[i]); 
}
// for(i in myArray) {
//   myArrayCopy += myArray[i];
// }

console.log(myArrayCopy);

// #8 Below is a array, myNumbers. Create a function called 'evensOnly' that returns the 'evensArray' of only even numbers
//DON'T TOUCH THE CODE BELOW
let myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE

evenArray = [];
function evensOnly() {
  // CODE HERE
  for (let i = 0,j=0 ;i < myNumbers.length; i++) {
     if(myNumbers[i] % 2 === 0) { 
         evenArray[j] = myNumbers[i];
         j++;
        }
      }
    return evenArray;
  }

console.log(evenArray);

// #9 Using filter(), return only your friends of the array of people below. Assign it to a variable called 'trueFriends'.
// CODE HERE
let peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];

let trueFriends =  peopleIknow.filter(function(hero) {
  return hero.friend == true;
});

console.log(trueFriends);


//// NEED HELP ON THIS PROBLEM
// #10 Create a function called indexFinder that will loop over an array and return a new array of the indexes of the contents e.g. [243, 123, 4, 12] would return [0,1,2,3]. 
// Create a new variable called 'indexes' and set it to contain the indexes of randomNumbers.
let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
let indexes = [];

function indexFinder(){
  for(i = 0; i < randomNumbers.length; i++) {
    indexes.push(i);
  }
  console.log(i);
  return indexes;
};
indexFinder();