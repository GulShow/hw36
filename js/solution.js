'use strict';
//Task 1
const allElements = document.getElementsByTagName('*').length
console.log(allElements);
//Task 2
let result = [];
const allLi = document.querySelectorAll('li')
for(const el of allLi) {
const text = el.innerText
    result.push(text)
}
console.log(result);
