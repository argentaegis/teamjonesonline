import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined ||
        user.username == undefined ||
        user.email == undefined ||
        user.password == undefined)
    {
      return false
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
  }
}
