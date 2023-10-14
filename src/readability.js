function getText() {
  return prompt('Text: ');
}

function countLetters(text) {
  let lettersCounter = 0;
  for (let i = 0; i < text.length; i++) {
    if (/[a-zA-Z]/.test(text[i])) {
      lettersCounter++;
    }
  }
  return lettersCounter;
}

function countWords(text) {
  let wordsCounter = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      wordsCounter++;
    }
  }
  return wordsCounter;
}

function countSentence(text) {
  let sentencesCounter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '.' || text[i] === '!' || text[i] === '?') {
      sentencesCounter++;
    }
  }
  return sentencesCounter;
}

function countReadability() {
  const text = getText();
  const letters = countLetters(text);
  const words = countWords(text);
  const sentences = countSentence(text);

  const L = (letters / words) * 100;
  const S = (sentences / words) * 100;

  const index = Math.round(0.0588 * L - 0.296 * S - 15.8);

  if (index < 1) {
    alert('Before Grade 1');
  } else if (index > 16) {
    alert('Grade 16+');
  } else {
    alert(`Grade ${index}`);
  }
}
