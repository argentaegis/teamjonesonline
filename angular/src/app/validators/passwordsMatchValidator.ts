import { AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { AuthService } from "../services/auth.service";


export const passwordsMatchValidator = (control: AbstractControl): {[key: string]: boolean} => {
  const pass = control.get('password');
  const echo = control.get('passwordEcho');
  if (!pass || !echo) return null;
  return pass.value === echo.value ? null : { match: true };

};
