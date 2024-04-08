const textInput = document.getElementById('textInput');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');
const form = document.getElementById('triangle-form');


// Calculate the word length
function calculateWordLength() {
  const text = textInput.value;
  
  // Spliting the text into an array
  const words = text.split(/\s+/);

  // Filtering empty words
  const validWords = words.filter(word => word !== '');

  // result
  resultDiv.textContent = `Word Length: ${validWords.length}`;
}

// onclick event listener to the calculateBtn
calculateBtn.addEventListener('click', calculateWordLength);