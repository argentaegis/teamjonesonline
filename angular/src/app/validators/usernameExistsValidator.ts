import { AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { AuthService } from "../services/auth.service";

export function usernameExistsValidator(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
     const user =  {name: '', username: '', email: '', password: ''};
     user.username = control.value;

    return authService.usernameExists(user).map(
      data => {
        return data.success ? {"usernameExists": true} : null;
      }
    );
  };
}
