const readline = require('readline-sync'); //Import readline-sync module to read user input from the console
//This code prompts the user to enter a password and checks if it meets the minimum length requirement of 8 characters. If the password is too short, it displays an error message and prompts the user to try again until a valid password is entered. It is from the module on Values, data types, and variables, and operations. Also incorporates control flow to validate the password input.


let password = "";  //Initialize password variable
let isValid = false;  //Flag to check if the password is valid//boolean variable to track if the password is valid is from Control Structures and logic module 

while (!isValid) {  //Loop until a valid password is entered// Module: Working with Loops
    password = readline.question("Enter a password: ");  //Prompt user for password//
    
        let hasUpperCase = false; //Flag to check if the password contains an uppercase letter
        let hasNumber = false; //Flag to check if the password contains a number
        let lenght = password.length; //Get the length of the password // modules: Stringing Charaters Together and  Using Arrays to Store Data
         
       for (let i = 0; i < password.length; i++) { //Loop through each character in the password
        let char = password[i]; //Get the current character
         if (char >= '0' && char <= '9') { //Check if the character is a number
                hasNumber = true; //Set hasNumber to true if a number is found
            }   
            if (char >= 'A' && char <= 'Z') { //Check if the character is an uppercase letter
                hasUpperCase = true; //Set hasUpperCase to true if an uppercase letter is found
            }    
       }
        
        if (lenght >= 8 && hasUpperCase && hasNumber) { //Check if the password is less than 8 characters long and contains an uppercase letter and a number
            isValid = true; //Set isValid to true if the password meets all the requirements
        } else {
            console.log("Password must be at least 8 characters long and contain an uppercase letter and a number. Please try again."); //Display error message if the password does not meet the requirements  
        } //Check if the password is less than 8 characters long and contains an uppercase letter and a number
        console.log("Password is valid!"); //Display success message if the password is valid   
}
    
    


    let studentInfo = ["Zoey", "Smith", 20, "Computer Science"]; //Array to store student information from Module: building arrays.
    console.log(`Student Name: ${studentInfo[0]} ${studentInfo[1]}`); //Accessing array elements to display student name
    console.log(`Age: ${studentInfo[2]}`); //Accessing array element to display student age
    console.log(`Major: ${studentInfo[3]}`); //Accessing array element to display student major
