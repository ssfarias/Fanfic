export function createPhoneNumber(length) {

    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    
    } 

export function emailRamdon(emailRamdom) {   

   emailRamdom = faker.random.alphaNumeric(4) + '@domain.com';
  
    }