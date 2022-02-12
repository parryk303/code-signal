/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
solution(n) = 52;
For n = 1001, the output should be
solution(n) = 101.
*/

function solution(n) {
    let max = 0, idx = [], s = (n+"");
     
     for(let i = 0; i < s.length; i++) idx.push(i);
     for(let i = 0; i < s.length; i++) {
         let v = parseInt(idx.filter(j => j != i).map(j => s[j]).join(""));
         if(v > max) max = v;
     }
     
     return max;
 }