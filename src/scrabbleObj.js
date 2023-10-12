function getWordFromPlayer(playerNumber) {
  return prompt(`Player ${playerNumber}, type your word!`).toUpperCase();
}

function calculateScore(word) {
  const scrabblePoints = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };

  let totalScore = 0;
  for (let i = 0; i < word.length; i++) {
    totalScore += scrabblePoints[word[i]];
  }

  return totalScore;
}

function scrabble() {
  const player1Word = getWordFromPlayer(1);
  const player2Word = getWordFromPlayer(2);

  const player1Score = calculateScore(player1Word);
  const player2Score = calculateScore(player2Word);

  if (player1Score > player2Score) {
    alert('Player 1 wins!');
  } else if (player1Score < player2Score) {
    alert('Player 2 wins!');
  } else {
    alert('Tie!');
  }
}
