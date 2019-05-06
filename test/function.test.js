import Character from '../src/js/function';

const hero = new Character(100, 40, 10);

test('powerMode выключен, атака', () => {
  const expected = '100, 40, 10';
  hero.doAttack();
  const received = `${hero.health}, ${hero.attack}, ${hero.defence}`;
  expect(received).toBe(expected);
});

test('powerMode включен, атака1', () => {
  hero.powerMode = true;
  const expected = '200, 80, 20';
  hero.doAttack();
  const received = `${hero.health}, ${hero.attack}, ${hero.defence}`;
  expect(received).toBe(expected);
});

test('powerMode включен, атака2', () => {
  hero.powerMode = true;
  const expected = '200, 80, 20';
  hero.doAttack();
  const received = `${hero.health}, ${hero.attack}, ${hero.defence}`;
  expect(received).toBe(expected);
});

test('powerMode включен, атака3', () => {
  hero.powerMode = true;
  const expected = '200, 80, 20';
  hero.doAttack();
  const received = `${hero.health}, ${hero.attack}, ${hero.defence}`;
  expect(received).toBe(expected);
});

test('powerMode включен, атака4', () => {
  hero.powerMode = true;
  const expected = '100, 40, 10';
  hero.doAttack();
  const received = `${hero.health}, ${hero.attack}, ${hero.defence}`;
  expect(received).toBe(expected);
});
