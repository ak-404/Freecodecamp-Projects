function rot13(str) {
  const shift = 13; // Caesar Cipher shift amount
  let result = "";
  
  for(let i = 0;i < str.length;i++) {
    let char = str[i];
    
    // checking if the character is a letter
    if(/[A-Z]/.test(char)) {
      let charCode = char.charCodeAt(0);
      let shiftedCharCode = charCode + shift;
      if(shiftedCharCode > 'Z'.charCodeAt(0)) {
        // Handle wrapping around from 'Z' back to 'A'
        shiftedCharCode -= 26;
      }
      result += String.fromCharCode(shiftedCharCode);
    } else {
      // If the character is not a letter, leave it unchanged
      result += char;
    }
  }
  return result;
}

console.log(rot13("SERR PBQR PNZC"));