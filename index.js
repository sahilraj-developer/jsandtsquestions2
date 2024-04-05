// write a function findsLongestWord that takes a string as input and returns the longest word in the string.
//  If there are multiple longesr words, return the first one encountered.


const findsLongestWord=(string)=>{
if(string.trim().length === 0){
    return false;
}

let words = string.split(' ');
// one way 
// words = words.sort((a,b)=> b.length - a.length);
// console.log(words);
// // **return words.at(-1);
// return words[0];

// second way

return words.reduce((accum,curword) => (curword.length > accum.length ? curword : accum), '')}

console.log(findsLongestWord('find the longest word in this javascript and typescript string for the techninal words'))