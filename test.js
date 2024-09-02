// Import the function
const { sum } = require('./app.js');

//Start first test
test('adds 14 + 9 to equal 23',() =>{
    //Calling sum function
    let total = sum(14,9);

    //Expect the sum to be 23
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function(){
    const {fromEuroToDollar} = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 146.26 yen", function(){
    const {fromDollarToYen} = require('./app.js');
    expect(fromDollarToYen(1.07)).toBe(156.5);
})

test("156.5 yen should be 0.87 pounds", function(){
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(156.5)).toBe(0.87);
})