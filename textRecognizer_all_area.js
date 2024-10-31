// textRecognizer.js

const { createWorker } = require('tesseract.js');

async function recognizeText(imageUrl) {
  const worker = await createWorker('eng');

  try {
    const { data: { text } } = await worker.recognize(imageUrl);
    return text;
  } catch (error) {
    console.error('Error recognizing text:', error);
  } finally {
    await worker.terminate();
  }
}

const imageUrl = 'C:/Users/PC/Desktop/2.png';
recognizeText(imageUrl).then((text) => {
  console.log(text); // Output the recognized text
});

module.exports = recognizeText; // Export the function

function greeting(name) {
  return `Hello, ${name}!`;
}

async function main() {
  const message = await greeting('Alice');
  console.log(message); // Output: Hello, Alice!
}

// Call the main function
main();
