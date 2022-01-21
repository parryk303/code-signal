/*
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be solution(inputString) = "dsbaz".
*/
function solution(inputString) {
let chars = [];
    for(let c of inputString) {
        chars.push(c === 'z' 
            ? 'a'
            : String.fromCharCode((c.charCodeAt(0) + 1)));
    }
    return chars.join("");
}