process.stdin.on("data", (input) => {
    let n = Number(input.toString().trim());

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        console.log(row);
    }
});