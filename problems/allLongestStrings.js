/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].
*/
function solution(inputArray) {
    var maxLength = Math.max(...inputArray.map(element=>element.length));
    return inputArray.filter(element=>element.length==maxLength);
}
