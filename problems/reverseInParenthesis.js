/*
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
*/
function reverseString(str) {
    let o = "";
    for(let i = str.length - 1; i >= 0; i--) o += str.charAt(i);
    return o;
}

function solution(inputString) {
    let reg = /\(\w*\)/;
    if(!reg.test(inputString)) return inputString;
    let str = reg.exec(inputString)[0],
        revStr = reverseString(str.substr(1, str.length - 2));
    return solution(inputString.replace(str, revStr));
}
