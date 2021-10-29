"use strict";
const combine = (n1, n2) => {
    return n1 + n2;
};
const newResult = (num) => {
    console.log('Result: ', +num);
};
let addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
newResult(combine(5, 12));
let combineValues;
combineValues = combine;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
