/*
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

Example

For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].
*/
function solution(names) {
    let set = [];
       for(let i in names) {
           let aux = names[i];
           for(let k = 1; set.includes(aux); k++) aux = names[i]+"("+k+")";
           set.push(aux);
       }
       return set;
   }