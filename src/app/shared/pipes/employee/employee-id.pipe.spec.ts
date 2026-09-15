import { EmployeeIdPipe } from './employee-id.pipe';

describe('EmployeeIdPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeIdPipe();
    expect(pipe).toBeTruthy();
  });
});
