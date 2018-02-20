import { Component, OnChanges, Input } from '@angular/core';
import { ValidateService} from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() user:  any;

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
      username: '',
      email: '',
      password: ''
    });
  }

  usernameExists()  {
    var user = this.registrationForm.value;

    console.log(user);

    if (user.username.length < 4){
      return;
    }

    this.authService.usernameExists(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show("That username is taken.", {cssClass: 'alert-danger', timeout: 3000});
        return true;
      } else{

        return false;
      }
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


    class AuthResponse{
      success: boolean;
      msg: string;

      constructor(suc: boolean, message: string){
        this.success = suc;
        this.msg = message;
      }
    }

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


}
