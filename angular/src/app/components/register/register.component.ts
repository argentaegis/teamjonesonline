import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;


  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authSercice: AuthService,
    private router: Router) { }

  ngOnInit() {
    return 1;
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

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

    this.authSercice.registerUser(user).subscribe(data =>  {

      if(data.success){
        this.flashMessage.show("You have been registered.", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login'])
      }else {
        this.flashMessage.show("There was an error registering the user.", {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register'])
      }

    });
  }


}
