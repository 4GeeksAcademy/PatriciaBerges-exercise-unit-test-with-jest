const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar/1.07)*156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen/156.5)*0.87;
    return valueInPound
}

// Function that sums 2 numbers
const sum = (a,b) => {
    return a + b
}

//Console log for ourselves
console.log(sum(7,3))

//Export the function
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

