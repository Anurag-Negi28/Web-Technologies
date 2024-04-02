function printPrimeNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

printPrimeNumbers(1, 100);
