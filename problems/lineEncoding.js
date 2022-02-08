/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
solution(s) = "2a3bc".
*/
function solution(s) {
let subs = [], prev = s[0], aux = "";
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] != prev) {
            subs.push(aux);
            aux = prev = s[i];
            continue;
        }
        aux += prev = s[i];
    }
    subs.push(aux);
    
    return subs.map(v => ""+(v.length > 1 ? v.length : "")+v.charAt(0)).join("");
}
