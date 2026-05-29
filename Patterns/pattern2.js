process.stdin.on("data", (input) => {
  let n = Number(input.toString().trim());

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
});