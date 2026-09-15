import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  todoSubmit = output<string>();

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  submitForm() {
    if (this.todoForm.valid) {
      // Send the value up to the parent action handler
      this.todoSubmit.emit(this.todoForm.value.title);
      
      // Reset input layout states
      this.todoForm.reset();
    }
  }
}
