function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbersAsync(n: number): Promise<void> {
  return new Promise<void>((resolve) => {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000); // Simulate asynchronous operation
    }
    resolve();
  });
}

printNumbersAsync(5).then(() => console.log('Done')); // This might not print numbers in order