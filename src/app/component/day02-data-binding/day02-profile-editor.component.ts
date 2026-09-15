import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day02-profile-editor',
  imports: [FormsModule],
  templateUrl: './day02-profile-editor.component.html',
  styleUrl: './day02-profile-editor.component.scss'
})
export class Day02ProfileEditorComponent {
  // Application Data Properties
  userName: string = 'JaneDoe';
  email: string = 'jane.doe@example.com';
  age: number = 28;

  // property binding methods
  isSaved: boolean = false;

  // Event Binding Methods
  saveProfile() {
    this.isSaved = true;
    alert(`Profile saved for \n ${this.userName} \n ${this.email} \n ${this.age} `);
  }

  
  resetFields() {
    this.userName = '';
    this.email = '';
    this.age = 18;
    this.isSaved = false;
  }
}
