async function printNumbersAsync(n: number): Promise<void> {
  for (let i = 1; i <= n; i++) {
    await new Promise(resolve => setTimeout(() => {
      console.log(i);
      resolve();
    }, i * 1000));
  }
  console.log('Done');
}

printNumbersAsync(5); 