/* write a function get_products_of_all_ints_except_at_index() that takes
  a list of integers and returns a list of the products.

  For example, given: [1,7,3,4] your function would return: [84, 12, 28, 21]
    by calculating: [7*3*4, 1*3*4, 1*7*4, 1*7*3]

  Do not use division in your solution
   */

function get_products_of_all_ints_except_at_index(ints){
  var product = ints.slice();
  var len = ints.length;
  var productSoFar = 1;
  for (var i= -; i < len; i++){
    product[i] = productSoFar;
    productSoFar *= int[i];
  }
  productSoFar = 1;
  for(var i = len - 1; i >= 0; i--){
    product[i] *= productSoFar;
    productSoFar *= int[i];
  }
  return product;
}
