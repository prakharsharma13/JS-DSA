var assignTasks = function(servers, tasks) {
    class MinHeap {
        constructor(compare) {
            this.heap = [];
            this.compare = compare;
        }

        size() {
            return this.heap.length;
        }

        peek() {
            return this.heap[0];
        }

        push(value) {
            this.heap.push(value);
            let i = this.heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);

                if (this.compare(this.heap[i], this.heap[p]) >= 0) break;

                [this.heap[i], this.heap[p]] =
                    [this.heap[p], this.heap[i]];

                i = p;
            }
        }

        pop() {
            if (this.size() === 0) return null;

            let result = this.heap[0];
            let last = this.heap.pop();

            if (this.size() > 0) {
                this.heap[0] = last;
                let i = 0;

                while (true) {
                    let left = 2 * i + 1;
                    let right = 2 * i + 2;
                    let smallest = i;

                    if (
                        left < this.size() &&
                        this.compare(this.heap[left], this.heap[smallest]) < 0
                    ) {
                        smallest = left;
                    }

                    if (
                        right < this.size() &&
                        this.compare(this.heap[right], this.heap[smallest]) < 0
                    ) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [this.heap[i], this.heap[smallest]] =
                        [this.heap[smallest], this.heap[i]];

                    i = smallest;
                }
            }

            return result;
        }
    }

    // Available servers: [weight, index]
    const available = new MinHeap((a, b) =>
        a[0] - b[0] || a[1] - b[1]
    );

    // Busy servers: [freeTime, weight, index]
    const busy = new MinHeap((a, b) =>
        a[0] - b[0] || a[1] - b[1] || a[2] - b[2]
    );

    for (let i = 0; i < servers.length; i++) {
        available.push([servers[i], i]);
    }

    const ans = [];
    let time = 0;

    for (let j = 0; j < tasks.length; j++) {
        time = Math.max(time, j);

        // Release completed servers
        while (busy.size() > 0 && busy.peek()[0] <= time) {
            const [freeTime, weight, index] = busy.pop();
            available.push([weight, index]);
        }

        // Wait if all servers are busy
        if (available.size() === 0) {
            time = busy.peek()[0];

            while (busy.size() > 0 && busy.peek()[0] <= time) {
                const [freeTime, weight, index] = busy.pop();
                available.push([weight, index]);
            }
        }

        // Assign task to the best available server
        const [weight, index] = available.pop();

        ans.push(index);

        // Mark server as busy
        busy.push([time + tasks[j], weight, index]);
    }

    return ans;
};