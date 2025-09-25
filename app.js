// Ask the user to enter their street, city, and country. Concatenate these values into one full
// address string and display it like:
// "Your full address is: 123 Main St, Springfield, USA"

var street = prompt("enter your street");
var city = prompt("enter your city");
var country = prompt("enter your country");
var fullAdress = ("your full adress is:" + street + "," + city + "," + country);
console.log(fullAdress);


// Ask the user to input their first name and a favorite number. Concatenate them to create a
// simple username like:
// "john42"
// Display the result with a message: "Your new username is: john42"


var firstName = prompt("enter your first name");
var favoriteNumber = prompt("enter your favorite number");
var username = (firstName + favoriteNumber);
console.log("your new username is:" + username);


// Ask the user for their first name and last name. Combine them into an email address format
// like:
// "firstname.lastname@example.com"
// Show the result.


var firstname = ("enter your first name");
var lastname = ("enter your last name");
var email = (firstname + "." + lastname + "@gmail.com");
console.log(email);


// Ask the user for their favorite color, animal, and food. Create a sentence like:
// "Your favorite things are: blue dogs and pizza!"


var favoriteColor = prompt("enter your favorite color");
var favoriteAnimal = prompt("enter your favorite animal");
var favoriteFood = prompt("enter your favorite food");
var sentence = prompt("your favorite things are:" + favoriteColor + "," + favoriteAnimal + "and" + favoriteFood);
console.log(sentence);


// Ask the user for a quote and the author’s name. Display it in the format:
// "The only limit is your mind." - John Doe


var quote = prompt("Enter your favorite quote");
var author = prompt("Enter the author's name");
var format = ("\"" + quote + "\" - " + author );
console.log(format);




