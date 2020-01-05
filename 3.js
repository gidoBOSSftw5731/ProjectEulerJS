function largestPrimeFactor(number) {
  // Good luck!

  for (let i = Math.floor(Math.sqrt(number)); i > 1; i--){
    if (number % i != 0) {
      continue
    }
    var prime = true
    for (let x = 2; x < i; x++) {
      if (i % x == 0) {
        //console.log("not prime!")
        //console.log(x)
        //console.log(i)
        prime = false
        break      
      }

    }
    if (prime) {
      console.log(i + " is prime")
      return i
    }
  }

  return number;
}

largestPrimeFactor(13195);
