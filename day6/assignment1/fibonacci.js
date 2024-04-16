function printFibonacci(n) {
  let fibSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }

  console.log("Fibonacci Sequence:");
  console.log(fibSequence.join(", "));
}

printFibonacci(10); 