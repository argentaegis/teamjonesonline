import { Component, Input } from '@angular/core';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() user: any;

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private flashMessage: FlashMessagesService) {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    })

  }

  onLoginSubmit() {
    var user = this.loginForm.value;

    this.authService.authenticateUser(user).subscribe( data => {
      console.log(data);
      if(data.success){
        this.flashMessage.show("Login successful.", {cssClass: 'alert-success', timeout: 3000});
        this.authService.storeUserData(data.token, data.user);

        this.router.navigate(['/dashboard'])
      }else{
        this.flashMessage.show("Incorrect username or password.", {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/login'])

      }
    });
  }

}
