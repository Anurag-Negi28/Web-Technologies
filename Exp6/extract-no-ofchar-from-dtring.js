function extractCharacters(inputString, numCharacters) {
  if (typeof inputString !== "string" || typeof numCharacters !== "number") {
    // Check if the input types are valid return 'Invalid input types';
  }

  if (numCharacters < 0) {
    // Check if the number of characters is a non-negative integer
    return "Invalid number of characters";
  }

  if (numCharacters > inputString.length) {
    // Check if the specified number of characters is greater than the string length
    return "Number of characters exceeds string length";
  }

  // Use the slice method to extract the specified number of characters
  return inputString.slice(0, numCharacters);
}

// Example usage:
var originalString = "Hello, World!";
var extractedSubstring = extractCharacters(originalString, 5);
console.log(extractedSubstring); // Output: Hello
