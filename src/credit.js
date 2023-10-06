const determineCardService = (card) => {
  let service = '';
  if (card[0] === '4') {
    service = 'VISA';
  } else if (card[0] === '5' && ['1', '2', '3', '4', '5'].includes(card[1])) {
    service = 'MasterCard';
  } else if (card[0] === '3' && ['4', '7'].includes(card[1])) {
    service = 'American Express';
  }
  return service;
};

function isCreditCardValid() {
  const creditNumber = prompt('Type your credit card number:');
  const firstPartOfSum = [];
  const secondPartOfSum = [];

  for (let i = creditNumber.length - 2; i >= 0; i -= 2) {
    firstPartOfSum.push(parseInt(creditNumber[i]));
  }

  for (let i = creditNumber.length - 1; i >= 0; i -= 2) {
    secondPartOfSum.push(parseInt(creditNumber[i]));
  }

  const sum = firstPartOfSum.map((x) => x * 2);
  sum.push(...secondPartOfSum);

  const operandsFromSum = sum.join('').split('');

  const totalSum = operandsFromSum.reduce((acc, currVal) => {
    return acc + parseInt(currVal);
  }, 0);

  const valid = totalSum % 10 === 0 ? 'valid' : 'invalid';
  alert(`Your ${determineCardService(creditNumber)} card is ${valid}`);
}

isCreditCardValid();
