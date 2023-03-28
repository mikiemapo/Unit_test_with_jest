// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);

});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { FromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = FromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(FromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58 yen", function() {
    // import the function from app.js
    const { fromDollarToYen } = require("./app.js");
  
    // use the function like it's supposed to be used
    const dollars = 1;
    const yen = fromDollarToYen(dollars);
  
    // if 1 dollar is 106.58 yen, then x dollars should be (x * 106.58) yen
    const expected = dollars * 106.58;
  
    // this is the comparison for the unit test
    expect(yen).toBeCloseTo(expected);
  });
  
  test("One yen should be 0.00625 GBP", function() {
    // import the function from app.js
    const { fromYenToPound } = require("./app.js");
  
    // use the function like it's supposed to be used
    const yen = 1;
    const pounds = fromYenToPound(yen);
  
    // if 1 yen is 0.00625 GBP, then x yen should be (x * 0.00625) GBP
    const expected = yen * 0.00625;
  
    // this is the comparison for the unit test
    expect(pounds).toBeCloseTo(expected);
  });
  