import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { User } from '../../../models/user/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  @Input() selectedUser: User | null = null;
  @Output() saveUser = new EventEmitter<User>();
  public userForm : User = this.initializeUserForm();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser'] && this.selectedUser) {
      this.userForm = { ...this.selectedUser };
    } else if (!this.selectedUser) {
      this.userForm = this.initializeUserForm();
    }
  }

  public submitForm(): void {
    if (!this.userForm.name || !this.userForm.email || !this.userForm.role) return;
    this.saveUser.emit(this.userForm);
    this.userForm = this.initializeUserForm();
  }

  public cancelEdit() : void {
    this.userForm = this.initializeUserForm();
  }

  private initializeUserForm(): User {
    return {
      id: 0,
      name: '',
      email: '',
      role: ''
    };
  }
}
