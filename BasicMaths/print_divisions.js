process.stdin.on("data", (input) => {
  let n = Number(input.toString().trim());

  let divisors = [];

  for (let i = 0; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);

      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }

  divisors.sort((a, b) => a - b);

  for (let val of divisors) {
    console.log(val);
  }
});
