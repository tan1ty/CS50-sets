function isPrime(num) {
  if (num < 2) {
    return false;
  } else {
    if (num === 2) {
      return true;
    }
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function showPrime(min, max) {
  const primes = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

showPrime(1, 100);
