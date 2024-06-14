const sentence = "hello there from lighthouse labs";
let delay = 0;

// Loop through each character of the string
for (let i = 0; i < sentence.length; i++) {
  setTimeout((char) => {
    process.stdout.write(char); // Use process.stdout.write instead of console.log so each character is not on a new line!
    // Check if its the last character
    if (i === sentence.length - 1) {
      process.stdout.write('\n'); // Output a new line after the last character
    }
  }, delay, sentence[i]); // Pass sentence[i] as an argument to setTimeout

  delay += 50;
}