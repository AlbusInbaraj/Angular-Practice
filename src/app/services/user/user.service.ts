import { Injectable } from "@angular/core";
import { User } from "../../models/user/user";
import { Observable, of } from "rxjs";

@Injectable ({
  providedIn: 'root'
})

export class UserService {
  private localData : User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Alice Vance', email: 'alice@domain.com', role: 'Lead' },
    { id: 3, name: 'Bob Miller', email: 'bob@domain.com', role: 'Support' },
    { id: 4, name: 'Emma Watson', email: 'emma.w@example.com', role: 'User' },
    { id: 5, name: 'Carlos Santana', email: 'carlos@domain.com', role: 'Manager' },
    { id: 6, name: 'Diana Prince', email: 'diana.p@example.com', role: 'Admin' },
    { id: 7, name: 'Evan Wright', email: 'evan@domain.com', role: 'Support' },
    { id: 8, name: 'Fiona Gallagher', email: 'fiona.g@example.com', role: 'User' },
    { id: 9, name: 'George Brooks', email: 'george@domain.com', role: 'Lead' },
    { id: 10, name: 'Hannah Abbott', email: 'hannah@example.com', role: 'User' }
  ];

  public getData(): Observable<User[]> {
    return of(this.localData);
  }

  public addUser(newUser: Omit<User, 'id'>): void {
    const nextId = this.localData.length > 0 ? Math.max(...this.localData.map(u => u.id)) + 1 : 1;
    this.localData.push({ ...newUser, id: nextId });
  }

  public updateUser(id: number, updatedData: Partial<Omit<User, 'id'>>): void {
    this.localData = this.localData.map(user => {
      if (user.id === id) {
        return { ...user, ...updatedData, id };
      }
      return user;
    });
  }

  public deleteUser(id: number): void {
    this.localData = this.localData.filter(user => user.id !== id)
  };
}
