/*
Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records. The program is meant to:
  
  Allow users to enter an animal type and adoption fee.
  
  Add the animal and fee to a list.
  
  Retrieve the adoption fee for a specific animal when requested.

However, the initial developer left the program in a buggy state, with missing exception-handling logic
and some errors in the implementation. Your job is to fix it!



Instructions
Start by Understanding the Errors:
Run the program and observe the exceptions that occur. Document what the exceptions are and where they happen.

Write Exception Handling Code:
Use try/catch blocks to handle the errors so the program doesn’t crash when incorrect input or unexpected situations occur.

Test and Debug:
Test the program with valid and invalid inputs to confirm that exceptions are handled gracefully
and the program continues running as intended.
*/


// Will need to import / install readline-sync if not done so already within project dir: npm install readline-sync 
const readlineSync = require('readline-sync');

// Initial Code with Bugs (modified to use readline-sync)
let animals = [];
let fees = [];
function addAnimal(name, fee) {
//animal name can not be blank
if (!name || name.trim() === "") {
    throw new Error("Animal name cannot be blank.");
}
//adopt fee  can not be negative 
if (fee < 0) {
    throw new Error("Adoption fee cannot be negative.");
}

animals.push(name.trim());
fees.push(fee);
}
function getAdoptionFee(animalName) {
    if (!animalName || animalName.trim() === "") {
        throw new Error("Animal name cannot be blank.");
    }
      let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index];
}
// Main program
console.log("Welcome to the Pet Shelter System");
while (true) {
    let action = readlineSync.question("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();
    if (action === "exit") {
        
        console.log("Goodbye!");
        break;
    }
    if (action === "add") {
        let animal = readlineSync.question("Enter the animal's name: ");
        let fee = Number(readlineSync.question("Enter the adoption fee: "));
        try{addAnimal(animal, fee);
        console.log(`${animal} added with a fee of $${fee}.`);
        }catch(err)
        { console.log("Error adding animal:", err.message);}
        finally{
            console.log("Thank you for using our Pet Shelter System");
              }
    } else if (action === "fee") {
        let animal = readlineSync.question("Enter the animal's name to find its adoption fee: ");
       try{
        console.log(`${animal}'s adoption fee is $${getAdoptionFee(animal)}.`);
    }catch(err)
    { console.log(" Error rtriving fee", err.message);}
    finally{
        console.log("Thank you for using our Pet Shelter System");
          }
    } else {
        console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
    }
  
}




/*
Problems to Solve

Invalid Input Errors:
  What happens if the user provides a negative adoption fee or leaves the name blank?
  What happens if the user tries to find the fee for an animal that hasn’t been added?

Code Flow Problems:
  What happens if the program throws an exception? Does the rest of the code continue running?

Structured Exception Handling:
  Add try/catch blocks to handle the above errors gracefully.
*/