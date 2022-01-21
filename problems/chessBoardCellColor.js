/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
solution(cell1, cell2) = true.



For cell1 = "A1" and cell2 = "H3", the output should be
solution(cell1, cell2) = false.


*/
function solution(cell1, cell2) {
 let x1 = cell1.charCodeAt(0) - 65, y1 = parseInt(cell1.charAt(1));
    let x2 = cell2.charCodeAt(0) - 65, y2 = parseInt(cell2.charAt(1));
    return (x1 + x2) % 2 == (y1 + y2) % 2;
}