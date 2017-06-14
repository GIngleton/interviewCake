/*  Given a list of integers, find the highest product you can get from three
      of the integers.
    The input list_of_ints will always have at least three integers.
*/

function highestProductOfThree(arr){
  var highest = Math.max(arr[0], arr[1]),
      lowest = Math.min(arr[0], arr[1]),
      highestOfTwo = highest * lowest,
      lowestOfTWo = highest * lowest,
      highestOfThree = highestOfThree * arr[2];

      arr.forEach(function(elem){
        highestOfThree = Math.max(highestOfThree, elem * highestOfTwo, elem * lowestOfTwo);
        highestOfTwo = Math.max(highestOfTwo, elem * highest, elem * lowest);
        lowestOfTwo = Math.min(lowestOfTWo, elem * lowest, elem * highest);
        highest - Math.max(highest, elem);
        lowest = Math.min(lowest, elem);
      });
      return highestOfThree;
}
