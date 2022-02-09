/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
solution(cell) = 2.



For cell = "c2", the output should be
solution(cell) = 6.


*/
function isSafe(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function solution(cell) {
    let x = cell.charCodeAt(0) - 97,
        y = parseInt(cell[1]) - 1, out = 0;
    
    if(isSafe(x + 2, y + 1)) out++;
    if(isSafe(x + 2, y - 1)) out++;
    if(isSafe(x - 2, y + 1)) out++;
    if(isSafe(x - 2, y - 1)) out++;
    if(isSafe(x + 1, y + 2)) out++;
    if(isSafe(x - 1, y + 2)) out++;
    if(isSafe(x + 1, y - 2)) out++;
    if(isSafe(x - 1, y - 2)) out++;
    
    return out;
}
