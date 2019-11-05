// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function sortString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
    return sortString(stringA) === sortString(stringB)
}

module.exports = anagrams;


// function buildCharMap(str) {
//     const charMap = {};
//     const cleanStr = str.replace(/[^\w]/g, "").toLowerCase()

//     for(let i=0; i<cleanStr.length; i++) {
//         charMap[cleanStr[i]] = charMap[cleanStr[i]] + 1 || 1;
//     }
//     return charMap;
// }

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for(let char in aCharMap){
//         if(aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }