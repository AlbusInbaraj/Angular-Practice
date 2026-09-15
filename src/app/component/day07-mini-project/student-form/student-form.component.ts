import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../models/student/student';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  @Input() selectedStudent : Student | null = null;
  @Output() studentAdded = new EventEmitter<any>();
  public studentForm = this.initializeStudentForm();

  public submitForm(): void {
    if (!this.studentForm.name || !this.studentForm.email || !this.studentForm.age || !this.studentForm.dateOfBirth || !this.studentForm.gender || !this.studentForm.contactNumber) return;
    this.studentAdded.emit(this.studentForm);
    this.studentForm = this.initializeStudentForm();
  }

  public cancelEdit(): void {
    this.studentForm = this.initializeStudentForm();
  }

  private initializeStudentForm() {
    return {
      id: 0,
      name: '',
      email: '',
      age: 0,
      dateOfBirth: '',
      gender: '',
      contactNumber: ''
    };
  }

  private resetForm(): void {
    // this.newStudent = { name: '', email: '', age: 0, dateOfBirth: '', gender: '', contactNumber: '' };
    this.studentForm;
  }
}
