/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

solution(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]
Check out the image below for better understanding:
*/
function solution(matrix) {
    let w = matrix[0].length, h = matrix.length;
    let board = [];
    
    for(let i = 0; i < h; i++) {
        let row = new Array(w);
        row.fill(0);
        board.push(row);
    }
    
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if(matrix[i][j]) {
                if(i + 1 < h) board[i + 1][j]++;
                if(i + 1 < h && j - 1 >= 0) board[i + 1][j - 1]++;
                if(j - 1 >= 0) board[i][j - 1]++;
                if(i - 1 >= 0 && j + 1 < w) board[i - 1][j + 1]++;
                if(i - 1 >= 0) board[i - 1][j]++;
                if(i - 1 >= 0 && j - 1 >= 0) board[i - 1][j - 1]++;
                if(j + 1 < w) board[i][j + 1]++;
                if(i + 1 < h && j + 1 < w) board[i + 1][j + 1]++;
            }
        }
    }
    
    return board;
}