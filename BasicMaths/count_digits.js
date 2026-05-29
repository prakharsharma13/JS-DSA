process.stdin.on("data", (input) => {
  let n = Number(input.toString().trim());

  let cnt = 0;
  while (n > 0) {
    cnt = cnt + 1;
    n = Math.floor(n / 10);
  }
  console.log(cnt);
});
