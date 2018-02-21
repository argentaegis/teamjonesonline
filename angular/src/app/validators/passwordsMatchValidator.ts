import { AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { AuthService } from "../services/auth.service";

// export function passwordsMatchValidator(): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} => {
//     const match = control.value.password == control.value.passwordEcho;
//     console.log("Match: " + match);
//     console.log("Values: " + control.value);
//     return match ? {'passwordsMatch': false} : null;
//   };
// }


export const passwordsMatchValidator = (control: AbstractControl): {[key: string]: boolean} => {
  const pass = control.get('password');
  const echo = control.get('passwordEcho');
  if (!pass || !echo) return null;
  return pass.value === echo.value ? null : { match: true };

};
