//Needs identifiers for the search to target 
//At the moment code on line 2 searches for the word foobar on the page this needs to be reconfigured to find the user input fields
var stringToSearchFor = 'foobar';
//At the moment code on line 5 targets the page and finds the word foobar 
var searchThisString = document.body.innerText || document.body.textContent;
// Gonne be honest not 100% sure how this one works found it on Stackoverflow
var found = (searchThisString.indexOf(stringToSearchFor) >= 0);
//Line 9 requires the dependency
var cleanser = require('profanity-cleanser');
//accesses the profanity dictionary
var output = cleanser.getDictionary();


cleanser.setLocale()
//line 16 is the given input value
var inputString = "Your ass is shit"
//cleanser.setLocale(['hi', 'es', 'ja']);
//line 19 changes the word 
var output = cleanser.replace(inputString, 'word', 'FOOBAR');
//line 21 is a consol log
console.log(output);

