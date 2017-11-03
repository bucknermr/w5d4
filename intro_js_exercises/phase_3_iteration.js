Array.prototype.bubbleSort = function() {
  const dup = this.slice();
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < dup.length - 1;  i++) {
      if (dup[i] > dup[i + 1]) {
        const swap = dup[i];
        dup[i] = dup[i + 1];
        dup[i + 1] = swap;

        sorted = false;
      }
    }
  }
  return dup;
};

String.prototype.substrings = function() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
};
