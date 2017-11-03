Array.prototype.uniq = function uniq(){
  const result = [];
  this.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

Array.prototype.twoSum = function twoSum() {
  const result = [];
  this.forEach((el, idx) => {
    for (let i = idx + 1; i < this.length; i++ ) {
      if (el + this[i] === 0 ) {
        result.push([idx, i]);
      }
    }
  });
  return result;
};

Array.prototype.transpose = function transpose() {
  const result = [];
  for (let i = 0; i < this[0].length; i++) {
    let row = [];
    for (let j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }
    result.push(row);
  }
  return result;
};
