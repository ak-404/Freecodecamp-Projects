function palindrome(str) {
 
  /*
  Regular Expression that will used to filter out the alphanumeric characters from the string
  */
  let filterRegex = /[a-zA-Z0-9]/ig;
  
  // Converting the string into lower case
  let lowercasedStr = str.toLowerCase();
  
  /*
  getting all the alphanumeric characters in the string in an array using match method with my regular expression
  */
  let filteredStr = lowercasedStr.match(filterRegex);
  
  let condition = Math.floor(filteredStr.length / 2);
  for(let i = 0;i < condition;i++) {
    if(filteredStr[i] !== filteredStr[filteredStr.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

palindrome("_eye");
console.log(palindrome("_eye"));