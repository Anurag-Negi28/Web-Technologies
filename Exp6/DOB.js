var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateAge() {
  // Prompt the user for their date of birth
  rl.question("Enter your date of birth (YYYY-MM-DD):", function (dobInput) {
    // Parse the user input to create a Date object
    var dob = new Date(dobInput);

    // Check if the input is a valid date
    if (isNaN(dob.getTime())) {
      console.log(
        "Invalid date. Please enter a valid date format (YYYY-MM-DD)."
      );
      rl.close();
      return;
    }

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var timeDifference = currentDate - dob;

    // Convert milliseconds to years (approximate)
    var ageInYears = Math.floor(
      timeDifference / (365.25 * 24 * 60 * 60 * 1000)
    );

    console.log("Your age is approximately " + ageInYears + " years.");

    rl.close();
  });
}

// Call the function to calculate age
calculateAge();
