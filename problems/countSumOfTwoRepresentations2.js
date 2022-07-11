/*
Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

Example

For n = 6, l = 2, and r = 4, the output should be countSumOfTwoRepresentations2(n, l, r) = 2.

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.
*/

function solution(n, l, r) {
  if (2 * r < n || 2 * l > n) return 0;
   var min = Math.max(l, n - r);
   var max = Math.min(r, n - l);
   var mid = Math.floor((max + min) / 2);
   return mid - min + 1;
 }