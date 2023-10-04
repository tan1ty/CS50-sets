function isCreditCardValid() {
  const creditNumber = prompt('Type your credit card number:');
  let service = '';
  let valid = '';

  if (creditNumber[0] === '4') {
    service = 'VISA';
  } else if (
    creditNumber[0] === '5' &&
    ['1', '2', '3', '4', '5'].includes(creditNumber[1])
  ) {
    service = 'MasterCard';
  } else if (creditNumber[0] === '3' && ['4', '7'].includes(creditNumber[1])) {
    service = 'American Express';
  }

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

  valid = totalSum % 10 === 0 ? 'valid' : 'invalid';
  alert(`Your ${service} card is ${valid}`);
}

isCreditCardValid();
