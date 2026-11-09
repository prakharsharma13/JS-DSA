
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function(k, arrival, load) {
    // Min Heap: [completionTime, serverId]
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            let i = this.heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);

                if (this.heap[p][0] <= this.heap[i][0]) break;

                [this.heap[p], this.heap[i]] =
                    [this.heap[i], this.heap[p]];

                i = p;
            }
        }

        pop() {
            if (this.heap.length === 1) {
                return this.heap.pop();
            }

            const root = this.heap[0];
            this.heap[0] = this.heap.pop();

            let i = 0;
            const n = this.heap.length;

            while (true) {
                let smallest = i;
                let left = 2 * i + 1;
                let right = 2 * i + 2;

                if (left < n &&
                    this.heap[left][0] < this.heap[smallest][0]) {
                    smallest = left;
                }

                if (right < n &&
                    this.heap[right][0] < this.heap[smallest][0]) {
                    smallest = right;
                }

                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] =
                    [this.heap[smallest], this.heap[i]];

                i = smallest;
            }

            return root;
        }

        peek() {
            return this.heap[0];
        }

        get size() {
            return this.heap.length;
        }
    }

    // Segment Tree: tracks available servers
    class SegmentTree {
        constructor(n) {
            this.n = n;
            this.tree = new Int32Array(4 * n);
            this.build(1, 0, n - 1);
        }

        build(node, l, r) {
            if (l === r) {
                this.tree[node] = 1;
                return;
            }

            let mid = Math.floor((l + r) / 2);

            this.build(node * 2, l, mid);
            this.build(node * 2 + 1, mid + 1, r);

            this.tree[node] =
                this.tree[node * 2] + this.tree[node * 2 + 1];
        }

        update(node, l, r, idx, val) {
            if (l === r) {
                this.tree[node] = val;
                return;
            }

            let mid = Math.floor((l + r) / 2);

            if (idx <= mid) {
                this.update(node * 2, l, mid, idx, val);
            } else {
                this.update(node * 2 + 1, mid + 1, r, idx, val);
            }

            this.tree[node] =
                this.tree[node * 2] + this.tree[node * 2 + 1];
        }

        set(idx, val) {
            this.update(1, 0, this.n - 1, idx, val);
        }

        query(node, l, r, ql) {
            if (r < ql || this.tree[node] === 0) {
                return -1;
            }

            if (l === r) return l;

            let mid = Math.floor((l + r) / 2);

            let left = this.query(node * 2, l, mid, ql);

            if (left !== -1) return left;

            return this.query(node * 2 + 1, mid + 1, r, ql);
        }

        findNext(start) {
            return this.query(1, 0, this.n - 1, start);
        }
    }

    const available = new SegmentTree(k);
    const minHeap = new MinHeap();

    const count = new Array(k).fill(0);

    for (let i = 0; i < arrival.length; i++) {
        const time = arrival[i];

        // Release completed servers
        while (minHeap.size > 0 &&
               minHeap.peek()[0] <= time) {

            const [endTime, serverId] = minHeap.pop();

            available.set(serverId, 1);
        }

        // Find next available server
        const start = i % k;

        let server = available.findNext(start);

        // Wrap around if necessary
        if (server === -1) {
            server = available.findNext(0);
        }

        // All servers are busy
        if (server === -1) continue;

        // Assign request
        count[server]++;

        available.set(server, 0);

        minHeap.push([
            time + load[i],
            server
        ]);
    }

    // Find maximum requests handled
    const maxCount = Math.max(...count);

    const result = [];

    for (let i = 0; i < k; i++) {
        if (count[i] === maxCount) {
            result.push(i);
        }
    }

    return result;
};
