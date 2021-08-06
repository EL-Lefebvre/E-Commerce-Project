import { fetchCount } from './counterAPI';

describe('counterAPI', () => {
  describe('fetchCount', () => {
    it('should be a promise that resolve with the given value', async () => {
      const sut = await fetchCount(42);
      expect(sut).toEqual({ data: 42 });
    });

    it('should use default value', async () => {
      const sut = await fetchCount();
      expect(sut).toEqual({ data: 1 });
    });
  });
});
