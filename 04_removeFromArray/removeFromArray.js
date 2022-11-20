const removeFromArray = function(myArray, ...args) {
    
    return myArray.filter(x => !args.includes(x))
    
};


let xx = [1, 2, 3, 4, 5];

console.log(removeFromArray(xx, 2))


// Do not edit below this line
module.exports = removeFromArray;
