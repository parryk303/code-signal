/*
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
solution(product) = 26;
For product = 19, the output should be
solution(product) = -1.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer product

Guaranteed constraints:
0 ≤ product ≤ 600.

[output] integer
*/
function solution(product) {
    if(product == 0) return 10;
       if(product < 10) return product;
   
       let s = "";
       for(let d = 9; d > 1; d--) for(; product % d == 0; product /= d) s = d+s;
       return product == 1 ? parseInt(s) : -1;
   }