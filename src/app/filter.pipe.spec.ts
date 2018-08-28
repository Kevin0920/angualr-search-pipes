import { FilterPipe } from './filter.pipe';

describe('MyfilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
