
const FromEuroToDollar = function(valueInEuro){
  // convert the given valueInEuro to dollars
  let valueInDollar = valueInEuro * 1.2;
  //return the dollar value
  return valueInDollar;
}
  // we include fromEuroToDollar here as well because it needs to be exported



// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (amountInDollars) => {
    const exchangeRate = oneEuroIs["JPY"] / oneEuroIs["USD"]; // Calculate the exchange rate from dollars to yen
    const amountInYen = amountInDollars * exchangeRate; // Convert the amount from dollars to yen
    return amountInYen;
  };
 
  const fromEuroToDollar = (amountInEuros) => {
    const exchangeRate = oneEuroIs["USD"]; // Get the exchange rate from euros to dollars
    const amountInDollars = amountInEuros * exchangeRate; // Convert the amount from euros to dollars
    return amountInDollars;
  };
  
  const fromYenToPound = (amountInYen) => {
    const exchangeRate = oneEuroIs["GBP"] / oneEuroIs["JPY"]; // Calculate the exchange rate from yen to pounds
    const amountInPounds = amountInYen * exchangeRate; // Convert the amount from yen to pounds
    return amountInPounds;
  };
  
  module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound, sum, FromEuroToDollar};