import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../models/login/login.model';

@Component({
  selector: 'app-day08-login-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './day08-login-template-driven-form.component.html',
  styleUrl: './day08-login-template-driven-form.component.scss'
})
export class Day08LoginTemplateDrivenFormComponent {
  public loginData: Login = new Login();

  onLogin(form: any) {
    if (form.valid) {
      console.log("Form Submitted Successfully", this.loginData);
    } else {
      console.log("Form is Invalid");
    }
  }
}
