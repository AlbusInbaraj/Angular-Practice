import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../models/user/user';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserService } from '../../../services/user/user.service';
import { LoggerService } from '../../../services/logger/logger.service';

@Component({
  selector: 'app-user-list',
  imports: [UserFormComponent],
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  // Data is moved into the service files
  // public users: User[] = [
  //   { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  //   { id: 2, name: 'Alice Vance', email: 'alice@domain.com', role: 'Lead' },
  //   { id: 3, name: 'Bob Miller', email: 'bob@domain.com', role: 'Support' },
  //   { id: 4, name: 'Emma Watson', email: 'emma.w@example.com', role: 'User' },
  //   { id: 5, name: 'Carlos Santana', email: 'carlos@domain.com', role: 'Manager' },
  //   { id: 6, name: 'Diana Prince', email: 'diana.p@example.com', role: 'Admin' },
  //   { id: 7, name: 'Evan Wright', email: 'evan@domain.com', role: 'Support' },
  //   { id: 8, name: 'Fiona Gallagher', email: 'fiona.g@example.com', role: 'User' },
  //   { id: 9, name: 'George Brooks', email: 'george@domain.com', role: 'Lead' },
  //   { id: 10, name: 'Hannah Abbott', email: 'hannah@example.com', role: 'User' }
  // ];

  public userService = inject(UserService);
  public logger = inject(LoggerService);
  public users : User[] = [];
  editingUser: User | null = null;

  ngOnInit() {
    this.getUsers();
  }

  public onSelectEdit(targetUser: User): void {
    this.editingUser = targetUser;
  }

  public onDeleteUser(targetId: number): void {
    this.userService.deleteUser(targetId);
    this.getUsers();
  }

  public onProcessUpsert(formData: User): void {
    if (formData.id === 0 && formData.name === '') {
      this.editingUser = null;
    }

    if (formData.id === 0) {
      this.userService.addUser(formData);
      this.logger.log("Employee Added Successfully!!");
    } else {
      this.userService.updateUser(formData.id, formData);
      this.logger.log(`Employee "${formData.name}" Updated Successfully!!`);
    }
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getData().subscribe(data => {
      this.users = data;
    });
  }

  // Without using service method to add and update users
  // public onProcessUpsert(formData: User): void {
  //   if (formData.id === 0 && formData.name === '') {
  //     this.editingUser = null;
  //     return;
  //   }

  //   if (formData.id === 0) {
  //     const generatedId = this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
  //     const newUser: User = { ...formData, id: generatedId };
  //     this.users = [...this.users, newUser];
  //     this.getUsers();
  //   } else {
  //     this.users = this.users.map(user => user.id === formData.id ? { ...formData } : user);
  //   } 
  //   this.editingUser = null;
  // }
}
