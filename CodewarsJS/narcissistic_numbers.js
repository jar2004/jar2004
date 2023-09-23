function narcissistic(value) {
  // Code me to return true or false
  var digits = value.toString().split('');
  var realDigits = digits.map(Number);
  var power = realDigits.length;
  
  var narc = 0;
  console.log(power===1);
  console.log(power);
  if (power === 1){
    return true;
  } else {
    for (var i = 0;i<power;i++){  //itterates through array of numbers
      var powerSum = 1;
      for (a = 0;a<power;a++){  //creates a the sum by adding digit up a amount of times
        powerSum *= realDigits[i];
        console.log(narc);
        //console.log(a);2
      } //endfor
      //conso
le.log(i)
      narc += powerSum
    } //endfor
  
    
    if (narc === value){  //narc is the sum of all digits ^ number of digits so if they are equal it is a narc number
      return true
    }
    else return false
  }
}
