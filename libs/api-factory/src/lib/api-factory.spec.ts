import { apiFactory } from './api-factory';

describe('apiFactory', () => {
  it('should work', () => {
    expect(apiFactory()).toEqual('api-factory');
  });
});
