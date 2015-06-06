/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.
 */
function Blob() {
  this.eatRate = 1;
  this.ate = 0;
}
 //TODO: Next, create an instance of Blob named blob.
var blob = new Blob();
// TODO: Then, use a loop to calculate how long it took the blob to finish
// with Dowington.

var dowingtonPeople = 1000;
var hour = 0;

consumption = function() {
  for (var i = 0; i < dowingtonPeople; i++) {
    if (blob.ate < dowingtonPeople) {
      blob.ate += blob.eatRate;
      blob.eatRate++;
      hour++;
    }
  }
  console.log(hour);
};
var hoursSpentInDowington = consumption();

Blob.prototype.consumption = consumption; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  this.eatRate = 1;
  this.ate = 0;
  this.hour = 0;
  for (var i = 0; i < population; i++) {
    if (this.ate < population) {
      this.ate += peoplePerHour;
      peoplePerHour++;
      this.hour++;
    }
  }
  //console.log(this.hour);
};

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(500, 2) === 9, "not enough hours!");
assert(blob.hoursToOoze(750, 5) === 12, "still not enough hours!");

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (home, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.home = home;
  this.language = language;
}
// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
  if (sb == klingon) {
    return hello.klingon;
  } else if (sb == romulan) {
    return hello.romulan;
  } else if ("federation standard") {
    return hello["federation standard"];
  }
    //TODO: put this on the SentientBeing prototype
}
SentientBeing.prototype.sayHello = sayHello;
// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
var klingon = new SentientBeing("Qo\"noS", klingon);
var romulan = new SentientBeing("Romulus", romulan);
var human = new SentientBeing("Earth", "federation standard");

//assert((new Human()).sayHello(new Klingon()) === "nuqneH",
//  "the klingon should hear nuqneH");
assert(human.sayHello(klingon) === "nuqneH",
  "the klingon should hear nuqueH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(human.sayHello(romulan) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert(klingon.sayHello(romulan) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert(klingon.sayHello(human) === "hello",
  "the human should hear hello");
assert(romulan.sayHello(klingon) === "nuqneH",
  "the klingon should hear nuqueH");
assert(romulan.sayHello(human) === "hello",
  "the human should hear hello");

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************
var oneTime = [ "word", "batman", "gift", "joker", "gummy", "bears" ];

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
      return 1;
    }
    if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
      return -1;
    }
    return 0;
  }
  return stringArray.sort(byLastLetter);
}

var temp = lastLetterSort("joker", "batman");
var temp2 = lastLetterSort("ironman", "hulk");
assert(lastLetterSort([ "joker", "batman" ]) === temp,
  "nope... redo");
assert(lastLetterSort([ "ironman", "hulk" ]) === temp2,
  "nope... try again");

var numbahs = [ 3, 5, 8, 1, 5 ];
var numbah = [ 5, 7, 1, 4, 9 ];
var numbah2 = [ 6, 7, 0, 2, 4, 5, 9 ];
function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(a) {
    sum += a;
  });
  return sum;
}

assert(sumArray(numbahs) === 22,
  "nope... redo");
assert(sumArray(numbah) === 26,
  "no no no");

var temp = (sumArray(numbah));
var temp2 = (sumArray(numbahs));
var temp3 = (sumArray(numbah2));

function sumSort(arrayOfArrays) {
  return arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    arrayOfArrays.sort(item);
  });
}

assert(sumSort([ temp, temp2, temp3 ]) === [ 22, 26, 33 ],
  "no no no");
assert(sumSort([ [ 1, 2, 3 ], [ 4, 5, 6 ] ]) === [ 6, 15 ],
  "nope");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
