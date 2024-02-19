import { Department } from '../department/department.entity';

describe('Department', () => {
  it('should be defined', () => {
    expect(new Department()).toBeDefined();
  });
});
