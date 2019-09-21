let sumLargestNumbers = function(data) {

  let num = data;

  num.sort(function(a,b) {
    return a - b;

  });;
  return num[0] + num[1];

}



console.log(sumLargestNumbers([1,10]));
console.log(sumLargestNumbers([1,2,3]));
console.log(sumLargestNumbers([10,4,34,6,92,2]));

