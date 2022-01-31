/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".
*/
function solution(inputString) {
let output = "";
    
    for(let c of inputString) {
        if(/\d/.test(c)) output += c;
        else break;
    }
    
    return output;
}