//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 6;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 70.69;

//create a variable to hold a person's middle initial
let middleInitial = 'G'

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutSide = false;

//create a variable to hold a customer's first name
let customersFirstName = "Madhu"


//create a variable to hold a street address

let streetAddress = "6210 Stearns Hill Road"
//print all variables to the console

console.log(availablePlaneSeats);
console.log (costOfGroceries);
console.log(middleInitial);
console.log(isHotOutSide);
console.log(customersFirstName);
console.log(streetAddress);

 
//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats -2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);


//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'c';
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutSide = !isHotOutSide;
console.log(isHotOutSide);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = customersFirstName +" "+ middleInitial + "Kumari";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hi, My Name is" + customersFirstName + "and I live at" + streetAddress + "." );
