import getNumber from '../src/js/app';

test('should return number', () => {
  const input = '80';
  const expected = 80;
  const received = getNumber(input);
  expect(received).toBe(expected);
});

test('input null should return error', () => {
  const input = '0';
  const expected = Error('Ввод некорректен');
  const received = getNumber(input);
  expect(received).toEqual(expected);
});

test('input negative should return error', () => {
  const input = '-1';
  const expected = Error('Ввод некорректен');
  const received = getNumber(input);
  expect(received).toEqual(expected);
});

test('input non integer should return error', () => {
  const input = '0.6';
  const expected = Error('Ввод некорректен');
  const received = getNumber(input);
  expect(received).toEqual(expected);
});

test('input string should return error', () => {
  const input = 'string';
  const expected = Error('Ввод некорректен');
  const received = getNumber(input);
  expect(received).toEqual(expected);
});

test('empty input should return error', () => {
  const input = '';
  const expected = Error('Ввод некорректен');
  const received = getNumber(input);
  expect(received).toEqual(expected);
});

test('input binary and octagonal numbers should return error', () => {
  const input = '0234';
  const expected = Error('Ввод некорректен');
  const received = getNumber(input);
  expect(received).toEqual(expected);
});

test('empty input hexadecimal number should return error', () => {
  const input = '0x23';
  const expected = Error('Ввод некорректен');
  const received = getNumber(input);
  expect(received).toEqual(expected);
});
