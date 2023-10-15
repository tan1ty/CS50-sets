function getWordFromPlayer(playerNumber) {
  return prompt(`Player ${playerNumber}, type your word! `).toUpperCase();
}

function countPoints(player) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const points = [
    1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
    10,
  ];
  const word = player.split('');
  const score = [];

  for (let i = 0; i < word.length; i++) {
    let point = points[letters.indexOf(word[i])];
    score.push(point);
  }
  const totalScore = score.reduce((acc, cur) => acc + cur, 0);

  return totalScore;
}

function scrabble() {
  const player1Word = getWordFromPlayer(1);
  const player2Word = getWordFromPlayer(2);

  const player1Score = countPoints(player1Word);
  const player2Score = countPoints(player2Word);

  if (player1Score > player2Score) {
    alert('Player 1 win!');
  } else if (player1Score === player2Score) {
    alert('Tie!');
  } else {
    alert('Player 2 win!');
  }
}
