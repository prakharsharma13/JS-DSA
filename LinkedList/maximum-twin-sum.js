/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let arr = [];

  let curr = head;

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let maxSum = 0;
  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    maxSum = Math.max(maxSum, arr[i] + arr[n - 1 - i]);
  }

  return maxSum;
};
