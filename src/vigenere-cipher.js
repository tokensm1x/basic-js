const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(bool){
    this.bool = bool;
  }

  encrypt(message, key) {
    if(!message || !key) throw new Error;

    let encrypted = '',
        j = 0;

    key = key.toUpperCase();
    message = message.toUpperCase();   
    for(let i = 0; i < message.length; i++){
      if(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 ){
         encrypted += String.fromCharCode(65 + ((message.charCodeAt(i) + key.charCodeAt(j % key.length) - 130) % 26));
         j++;    
      } else{
        encrypted += message[i];
      }
    }
    if(this.bool === false)  return encrypted.split('').reverse().join('');
    else return encrypted;
  }    

  decrypt(message, key) {
    if(!message || !key) throw new Error;

    let decrypted = '',
      j = 0;
      key = key.toUpperCase();
      message = message.toUpperCase();
      
    for(let i = 0; i < message.length; i++){
      if(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 ){
         decrypted += String.fromCharCode(65 + 
         (((message.charCodeAt(i) - 65) + 26 - (key.charCodeAt(j % key.length) - 65)) % 26) );
         j++;    
      } else{
        decrypted += message[i];
    }
  }
  if(this.bool === false)  return decrypted.split('').reverse().join('');
  else return decrypted;
    
  }
}

module.exports = VigenereCipheringMachine;
