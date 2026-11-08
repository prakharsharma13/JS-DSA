
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const rowCount = new Array(m).fill(0);
    const colCount = new Array(n).fill(0);

    // First pass: Count servers in each row and column
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    // Second pass: Count communicating servers
    let ans = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (
                grid[i][j] === 1 &&
                (rowCount[i] > 1 || colCount[j] > 1)
            ) {
                ans++;
            }
        }
    }

    return ans;
};