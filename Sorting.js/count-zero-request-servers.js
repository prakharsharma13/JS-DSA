var countServers = function(n, logs, x, queries) {
    let result = [];

    for (let q of queries) {
        let activeServers = new Set();

        for (let [server, time] of logs) {
            if (time >= q - x && time <= q) {
                activeServers.add(server);
            }
        }

        result.push(n - activeServers.size);
    }

    return result;
};