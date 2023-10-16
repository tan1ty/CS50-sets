function getPlainText() {
  return prompt('plaintext: ');
}

function substitution(key) {
  if (key === 'undefined' || typeof key !== 'string') {
    console.log('Usage: ./substitution key');
    return;
  } else if (key.length !== 26) {
    console.log('Key must contain 26 characters.');
    return;
  }

  key = key.toUpperCase();

  const plainText = getPlainText();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const cipherText = [];

  for (let i = 0; i < plainText.length; i++) {
    const char = plainText[i];

    if (/^[a-zA-Z]$/.test(char)) {
      const isLowerCase = char === char.toLowerCase();
      const index = isLowerCase
        ? alphabet.indexOf(char.toUpperCase())
        : alphabet.indexOf(char);

      const cipherLetter = key[index];
      cipherText.push(isLowerCase ? cipherLetter.toLowerCase() : cipherLetter);
    } else {
      cipherText.push(char);
    }
  }
  return cipherText.join('');
}
