/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function solution(s1, s2) {
    let common = [], o = 0;
    for(let i = 0x61; i < 0x7b; i++) {
        let s = String.fromCharCode(i);
        if(s1.includes(s) && s2.includes(s)) common.push(s);
    }
    
    for(let e of common) {
        let p = 0, q = 0;
        for(let v of s1) if(v == e) p++;
        for(let v of s2) if(v == e) q++;
        o += Math.min(p, q);
    }
    
    return o;
}