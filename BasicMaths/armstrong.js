process.stdin.on("data", (input) => {
  let n = Number(input.toString().trim());

  let originalNum = n;
  let digits = n.toString().length;

  let sum = 0;

  while (n > 0) {
    let lastDigit = n % 10;

    sum = sum + (lastDigit ** digits);

    n = Math.floor(n / 10);
  }

  if (sum === originalNum) {
    console.log("Armstrong Number");
  } else {
    console.log("Not an Armstrong Number");
  }
});