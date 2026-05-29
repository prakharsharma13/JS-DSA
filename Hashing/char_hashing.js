const str = "aabccd";

const hash = new Array(26).fill(0);

for (let ch of str) {
  let index = ch.charCodeAt(0) - 97;
  hash[index]++;
}

console.log(hash);