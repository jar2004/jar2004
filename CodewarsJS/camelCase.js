


function toCamelCase(form){
	console.log(form);
	var test = document.getElementById("test");
	var str = test.value;
	console.log(str);
  if (str == ''){
    return '';
  }
  else 
    var splitString = str.split("");
    console.log(splitString);
   for (var i=0;i<splitString.length - 1;i++){
     
     if (splitString[i] === "_"  || splitString[i] === '-'){
       splitString[i+1] = splitString[i+1].toUpperCase();
       splitString[i] = "";
       console.log(i);
     }  //endif
     
   }  //endfor
  const result = splitString.join("");
  console.log(result);
  return result
}
