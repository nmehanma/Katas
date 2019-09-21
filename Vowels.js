let numberOfVowels = function(data){

  let num = 0

  for( i = 0; i < data.length; i++) {
    
    if( data[i] === "a" || data[i] === "e" || data[i] ==="i" || data[i] === "o" || data[i] === "u") {

      num = num + 1

    }

  }

  return num

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse Labs"));
console.log(numberOfVowels("aeiou"));

