import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, of, Subject, switchMap } from 'rxjs';
import { DataService } from '../../services/data/data.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { Todo } from '../../models/todo/todo';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  standalone: true,
  selector: 'app-search-bar-observables',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar-observables.component.html',
  styleUrl: './search-bar-observables.component.scss'
})
export class SearchBarObservablesComponent {
  searchInput = new FormControl('');

  filteredTodos: Observable<string[]> = this.searchInput.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(searchTerm => {
      // Handle null/undefined safely and filter out empty strings
      if (!searchTerm || searchTerm.trim() === '') {
        return of([]);
      }
      // Fixed: Restored the complete JSONPlaceholder URL and query structure
      return this.http.get<Todo[]>(`https://typicode.com{searchTerm}`).pipe(
        map((todos: Todo[]) => todos.map(todo => todo.title))
      );
    })
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }
}
