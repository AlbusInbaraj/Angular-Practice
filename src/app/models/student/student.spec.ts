import { Student } from './student';

describe('Student', () => {
  it('should create an instance', () => {
    const student: Student = {} as Student;
    expect(student).toBeTruthy();
  });
});

