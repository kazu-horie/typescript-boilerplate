import { repeat } from '../src/repeat';

test('repeat text', () => {
  expect(repeat('Hoge')).toBe('HogeHogeHoge');
});
