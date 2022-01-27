/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
solution(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.

*/
function solution(inputArray, k) {
  let max = 0, t = 0;
       
    for(let i = 0; i <= inputArray.length - k; i++, t = 0) {
        for(let j = i; j < i + k; j++) t += inputArray[j];
        if(t > max) max = t;
    }
    
    return max;
}