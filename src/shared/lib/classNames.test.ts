import { classNames } from './classNames';

describe('classNames', () => {
  test('1st parameter only', () => {
    expect(classNames({ cls: 'someClass' })).toBe('someClass');
  });

  test('with additional param ', () => {
    const expected = 'someClass cls1 cls2';
    expect(classNames({ cls: 'someClass', additional: ['cls1', 'cls2'] })).toBe(expected);
  });

  test('all params', () => {
    const expected = 'someClass hover';
    expect(classNames({

      cls: 'someClass',
      mods: {
        hover: true,
        scrollable: false,
      },
    })).toBe(expected);
  });
});
