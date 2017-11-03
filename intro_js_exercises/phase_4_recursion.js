const range = function range(start, end) {
  if (start === end) {
    return [start];
  }
  return [start].concat(range(start + 1, end));
};

const recSum = function recSum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + recSum(arr.slice(1));
};

const exponent = function exponent(base, exp) {
  if (exp === 1) {
    return base;
  } else if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
};

const exponent2 = function exponent2(base, exp) {
  if (exp === 1) {
    return base;
  } else if (exp === 0) {
    return 1;
  }
  if (exp % 2 === 0) {
    const num = exponent2(base, exp / 2);
    return num * num;
  } else {
    const num = exponent2(base, (exp - 1) / 2);
    return base * (num * num);
  }
};

// 0, 1, 1, 2, 3, 5, 8, 13

const fibbonacci = function fibbonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }
  const result = fibbonacci(n-1);
  return result.concat(recSum(result.slice(-2)));
};


const bsearch = function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  const mid = Math.floor(arr.length / 2);
  console.log(mid);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return bsearch(arr.slice(0, mid), target);
  } else {
    let result = bsearch(arr.slice(mid + 1), target);
    if (result !== -1) {
      result += (mid + 1);
    }
    return result;
  }
};


const merge = function merge(left, right) {
  const sorted = [];
  while ((left.length !== 0) || (right.length !== 0)) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
};

const mergesort = function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergesort(arr.slice(0, mid));
  const right = mergesort(arr.slice(mid));
  return merge(left, right);
};
