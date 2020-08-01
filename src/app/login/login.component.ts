import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent {
public TypeString:string="password";
public isPassword:boolean=true;

  public form:FormGroup;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
  }

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      if (values['email'] == 'admin@gmp.com'&& values['password']=='password') {
        this.router.navigate(['/OM']);
      }
    }
  }

  public ChangetextType(isPassword){
if(isPassword){
  this.TypeString="password"
}else{
  this.TypeString="text"
}
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
}