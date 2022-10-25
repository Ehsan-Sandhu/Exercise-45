let name= "Eric";
let LowerCase=name.toLowerCase();
let UpperCase=name.toUpperCase();
console.log(LowerCase);
console.log(UpperCase);

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
// import {titleCase} from /"titleCase.js";
console.log(titleCase(name));
//console.log(TitleCase);