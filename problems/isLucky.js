/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function solution(n) {
    let str = n+"", h1 = [], h2 = [];
    for(let o of str.substr(0, str.length / 2)) h1.push(parseInt(o));
    for(let o of str.substr(str.length / 2, str.length)) h2.push(parseInt(o));
    return h1.reduce( (t, v) => t += v) == h2.reduce( (t, v) => t += v);
}