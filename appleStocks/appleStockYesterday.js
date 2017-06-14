/* Wite an efficient function that takes stockPricesYesterday and returns the best profit
one could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
*/

function getMaxProfit(stockPrices){

  var pricesAmount = stockPrices.length,
      minPrice = stockPrices[0],
      maxProfit = 0;

      for (i=1; i < pricesAmount; i++) {

        if (stockPrices[i] - minPrice > maxProfit) {
          maxProfit = stockPrices[i] - minPrice;
        }

        if (stockPrices[i] < minPrice) {
          minPrice = stockPrices[i];
        }
      }

      return [0,0,maxProfit];
}

var trade = getMaxProfit(prices);

/*
stockPricesYesterday is an array with several number values inside

goal: find the interval which begins with the lowest buy price and
      ends with highest sell price.



execution: for array.num1 compare with all numbers until array.numFinal
