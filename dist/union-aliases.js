"use strict";
const merge = (input1, input2, resultConversion) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
const combinedAges = merge(30, 26, 'as-number');
console.log(combinedAges);
const combinedStringAges = merge('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames = merge('Tyler', 'Anna', 'as-text');
console.log(combinedNames);
