/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
solution(st) = "abcdcba".

*/

function reverse(s) {
    let out = "";
    for(let i = s.length - 1; i >= 0; i--) out += s[i];
    return out;
}

function solution(st) {
  if(reverse(st) === st) return st;
    
    let out = "", sg = "";
    for(let ch of st) {
        out = st+reverse(sg += ch);
        if(reverse(out) === out) break;
    }
    
    return out;
}
