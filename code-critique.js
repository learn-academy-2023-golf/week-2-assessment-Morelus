// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function indexOfFirstVowel(str) {
    // Convert the string to lowercase to make the function case-insensitive
    const lowerStr = str.toLowerCase();
    
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Loop through each character in the string
    for (let i = 0; i < lowerStr.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(lowerStr[i])) {
            // Log the index of the first vowel and return it
            console.log(`Index of the first vowel: ${i}`);
            return i;
        }
    }
    

    // If no vowel is found, log a message and return -1
    console.log('No vowel found in the string.');
    return -1;
}

// Example usage:
indexOfFirstVowel('Hello'); // Output: Index of the first vowel: 1
indexOfFirstVowel('Rhythm'); // Output: No vowel found in the string.


// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// I think it worked, it gave an example on how to use it and it does use .includes which isn't something we went over specifically but it makes sense. 