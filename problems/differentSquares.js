/*
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
solution(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
*/

function solution(matrix) {
    let set = [];
        
        for(let x = 0; x < matrix.length - 1; x++) {
            for(let y = 0; y < matrix[0].length - 1; y++) {
                let aux = "";
                for(let i = x; i < x + 2; i++) {
                    for(let j = y; j < y + 2; j++) aux += matrix[i][j];
                }
                if(!set.includes(aux)) set.push(aux);
            }
        }
        
        return set.length
    }