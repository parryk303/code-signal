/*
 Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/
function solution(picture) {
    let border = "*".repeat(picture[0].length + 2), o = [border];
    for(let e of picture) o.push("*"+e+"*");
    o.push(border);
    return o;
}