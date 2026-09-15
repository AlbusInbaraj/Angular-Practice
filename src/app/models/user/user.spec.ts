import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    const user: User = {} as User;
    expect(user).toBeTruthy();
  });
});
