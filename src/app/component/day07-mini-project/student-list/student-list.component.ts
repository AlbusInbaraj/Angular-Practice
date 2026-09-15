import { Component } from '@angular/core';
import { Student } from '../../../models/student/student';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from "../student-form/student-form.component";

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentFormComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  public students: Student[] = [
    { id: 1, name: 'Liam Andersson', email: 'liam.andersson@example.com', gender: 'Male', dateOfBirth: new Date('2005-04-12'), age: 21, contactNumber: '+1-555-0143' },
    { id: 2, name: 'Chloe Smith', email: 'chloe.smith@example.com', gender: 'Female', dateOfBirth: new Date('2006-09-23'), age: 19, contactNumber: '+1-555-0188' },
    { id: 3, name: 'Aarav Patel', email: 'aarav.patel@example.com', gender: 'Male', dateOfBirth: new Date('2004-11-05'), age: 21, contactNumber: '+1-555-0122' },
    { id: 4, name: 'Sofia Rodriguez', email: 'sofia.r@example.com', gender: 'Female', dateOfBirth: new Date('2005-01-30'), age: 21, contactNumber: '+1-555-0155' },
    { id: 5, name: 'Yuki Tanaka', email: 'yuki.tanaka@example.com', gender: 'Non-binary', dateOfBirth: new Date('2006-05-14'), age: 20, contactNumber: '+1-555-0199' },
    { id: 6, name: 'Marcus Vance', email: 'marcus.v@example.com', gender: 'Male', dateOfBirth: new Date('2005-08-18'), age: 20, contactNumber: '+1-555-0211' },
    { id: 7, name: 'Elena Rostova', email: 'elena.r@domain.com', gender: 'Female', dateOfBirth: new Date('2004-03-27'), age: 22, contactNumber: '+1-555-0233' },
    { id: 8, name: 'Zane Miller', email: 'zane.m@domain.com', gender: 'Male', dateOfBirth: new Date('2006-12-02'), age: 19, contactNumber: '+1-555-0255' },
    { id: 9, name: 'Amara Okafor', email: 'amara.o@example.com', gender: 'Female', dateOfBirth: new Date('2005-07-11'), age: 21, contactNumber: '+1-555-0277' },
    { id: 10, name: 'Lucas Fischer', email: 'lucas.f@domain.com', gender: 'Male', dateOfBirth: new Date('2004-05-19'), age: 22, contactNumber: '+1-555-0299' }
  ];

  public searchQuery: string = '';

  public editingStudent: Student | null = null;

  public onSelectEdit(targetStudent: Student): void {
    this.editingStudent = targetStudent;
  }

  public onDeleteStudent(studentId: number): void {
    this.students = this.students.filter(student => student.id !== studentId);

    if (this.editingStudent && this.editingStudent.id === studentId) {
      this.editingStudent = null;
    }
  }

  public onSubmit(formData: Student): void {
    if (formData.id === 0 || formData.email === '') {
      this.editingStudent = null;
      return;
    }

    if (formData.id === 0) {
      const generatedId = this.students.length > 0 ? Math.max(...this.students.map(student => student.id)) + 1 : 1;
      const newStudent : Student = { ...formData, id: generatedId };
      this.students = [...this.students, newStudent];
    } else {
      this.students = this.students.map(student => student.id === formData.id ? { ...formData } : student );
    }
    this.editingStudent = null;
  }

  public filterStudent(student: Student): boolean {
    if (!this.searchQuery) return true;
    return student.name.toLowerCase().includes(this.searchQuery.toLowerCase());
  }
}
