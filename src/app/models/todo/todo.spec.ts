import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    const todo: Todo = {} as Todo;
    expect(todo).toBeTruthy();
  });
});
