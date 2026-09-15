import { Component, signal } from '@angular/core';
import { Todo } from '../../../models/todo/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, TodoFormComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  // Application state lives here in the parent
  todos = signal<Todo[]>([
    { id: 1, title: 'Learn Angular 19', isCompleted: false }
  ]);

  // Action 1: Add a new todo item
  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      isCompleted: false
    };
    this.todos.update(currentTodos => [...currentTodos, newTodo]);
  }

  // Action 2: Delete a todo item
  deleteTask(id: number) {
    this.todos.update(currentTodos => currentTodos.filter(t => t.id !== id));
  }
}
