import { Person } from './person';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person("test","test", new Date())).toBeTruthy();
  });
});
