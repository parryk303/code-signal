/*
Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
solution(time) = true;
For time = "25:51", the output should be
solution(time) = false;
For time = "02:76", the output should be
solution(time) = false.
*/

function solution(time) {
    return parseInt(time[0]+time[1]) < 24 && parseInt(time[3]+time[4]) < 60;
   }