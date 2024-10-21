// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import Validator from '../index.js';

test('step1', () => {
  const v = new Validator();
  const schema = v.string();

  assert.equal(schema.isValid(null), false);
  assert.equal(schema.isValid(''), true);
  assert.equal(schema.isValid('Hexlet'), true);
});

test('step2', () => {
  const validator = new Validator();

  const schema1 = validator.string();
  assert.equal(schema1.isValid('Hello!'), true);

  const schema2 = validator.string().length(4);
  assert.equal(schema2.isValid('Hi!'), false);
  assert.equal(schema2.isValid('Hello!'), true);

  const schema3 = validator.string().length(2, 4);
  assert.equal(schema3.isValid('Hello!'), false);
  assert.equal(schema3.isValid('Hi!'), true);
});

test('step3', () => {
  const v = new Validator();
  const schema = v.number();

  assert.equal(schema.isValid(null), false);
  assert.equal(schema.isValid(123), true);
  assert.equal(schema.isValid('0'), false);
});

test('step4', () => {
  const validator = new Validator();
  const schema = validator.object().shape({
    name: validator.string().length(5),
    age: validator.number(),
  });

  assert.equal(schema.isValid({ name: 'kolya', age: 100 }), true);
  assert.equal(schema.isValid({ name: 'maya', age: 2.7 }), false);
  assert.equal(schema.isValid({ name: 'anna', age: 3 }), false);
});
