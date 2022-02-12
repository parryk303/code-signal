/*
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
solution(text) = "steady".
*/

function solution(text) {
    return text.replace(/[^a-zA-Z]/g, " ")
       .split(" ").reduce((v, c) => c = v.length > c.length ? v : c);
   }