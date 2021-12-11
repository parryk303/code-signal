/*
Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
solution(n) = 99.
*/
function solution(n) {
    if (n === 1) {
        return 9;
    }
    if (n === 2) {
        return 99;
    }
    if (n === 3) {
        return 999;
    }
    if (n === 4) {
        return 9999;
    }
    if (n === 5) {
        return 99999;
    }if (n === 6) {
        return 999999;
    }
    if (n === 7) {
        return 9999999;
    }
    if (n === 8) {
        return 99999999;
    }
    if (n === 9) {
        return 999999999;
    }
  }
  