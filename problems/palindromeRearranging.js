/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/
function solution(inputString) {
    let abc = [];
      
      for(let i = 0; i < 26; i++) abc.push(0);
      
      for(let i = 0; i < inputString.length; i++) {
          abc[inputString.charCodeAt(i) - 97]++;
      }	
      
      return inputString.length % 2 ==
      abc.map(n => n % 2 == 1 ? 1 : 0).reduce((t, v) => t + v);
  }