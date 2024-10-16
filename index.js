// As you pick out your froyo flavor at your favorite local frozen yogurt shop, you overhear the management team discussing how they would like a way for customers to order online. You make small talk and offer your services to help them build a web app. 

//  A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe an object listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

//These were my original thoughts --------------------------------------
//seperate the user input into strings without commas using split.
//create an empty array for each flavor to be pushed into
//create a for loop that seperates each user string by type 
// -perhaps something that compares if userInput is === `vanilla` that string is seperated & then pushed to the vanilla array
//push each instance of a flavor type  into an array
//find the length of each flavor type array
//make each flavor type it's own object, with the key being the type and the value being the length.

//create an object called froyo flavors
//plug each flavor type object inside
//console.log the froyo flavors object to see all the information gathered. 

//this should create a collection of objects inside the froyo flavor object
//-----------------------------------------------

const flavorInput = prompt(`enter froyo flavors pls`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`)

//seperate the user input into strings without commas using split.

const flavorsString = flavorInput.split(`,`)

//create an object to store the flavors and counts
const froyoFlavors = {
  vanilla:{
    amount: 
  },
  strawberry:{
    amount: 
  },
  coffee:{
    amount: 
  }
}

for (const vanilla in Object){
  
}

// loop through the array of flavors
// if the flavor is not in the object, then add the flavor to the object and set the count to 1
// if the flavor is already in the object, then increase the count by one for that flavor




