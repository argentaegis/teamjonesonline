import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService} from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { usernameExistsValidator } from  "../../validators/usernameExistsValidator";
import { passwordsMatchValidator } from  "../../validators/passwordsMatchValidator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() user =  {name: '', username: '', email: '', password: '', passwordEcho:''};

  registrationForm: FormGroup;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      name: '',
      username: new FormControl(
        this.user.username,
        [ Validators.required ],
        [ usernameExistsValidator(this.authService)]),
      email: new FormControl(
        this.user.email,
        [ Validators.required,
        Validators.email]
      ),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(8)
      ]),
      passwordEcho: new FormControl(this.user.passwordEcho, [
        Validators.required,
        Validators.minLength(8),

      ])
    },
    {
      validator: passwordsMatchValidator
    });
  }

  onRegisterSubmit(){
    var user = this.registrationForm.value;

    if(! this.validateService.validateRegister(user)){
      this.flashMessage.show("Please fill in all fields.", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if(! this.validateService.validateEmail(user.email)){
      this.flashMessage.show("Please enter a valid email.", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    //
    //
    // class AuthResponse{
    //   success: boolean;
    //   msg: string;
    //
    //   constructor(suc: boolean, message: string){
    //     this.success = suc;
    //     this.msg = message;
    //   }
    // }

    this.authService.registerUser(user).subscribe(data =>  {

      if(data.success){
        this.flashMessage.show("You have been registered.", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login'])
      }else {
        if(data.msg == "Username exists")
        {
          this.flashMessage.show("This username already exists.", {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/register'])
        }
        else {
          this.flashMessage.show("There was an error registering the user.", {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/register'])
        }
      }

    });
  }


  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get passwordEcho() {
    return this.registrationForm.get('passwordEcho');
  }
}
