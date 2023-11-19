# 数学相关算法

> 来自github仓库 javascript-algorithms

## 最大公约数  欧几里得算法

### 递归 辗转相除

```js
/**
 * Recursive version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export default function euclideanAlgorithm(originalA, originalB) {
  // Make input numbers positive.
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  // To make algorithm work faster instead of subtracting one number from the other
  // we may use modulo operation.
  return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}
```

### 循环迭代

```js
/**
 * Iterative version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export default function euclideanAlgorithmIterative(originalA, originalB) {
  // Make input numbers positive.
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  // Subtract one number from another until both numbers would become the same.
  // This will be out GCD. Also quit the loop if one of the numbers is zero.
  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }

  // Return the number that is not equal to zero since the last subtraction (it will be a GCD).
  return a || b;
}
```

## 最小公倍数 

> 最小公倍数 = num1 * num2 / 最大公约数

```js

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

export default function leastCommonMultiple(a, b) {
  return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}
```