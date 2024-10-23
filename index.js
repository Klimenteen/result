import StringValidator from './src/StringSchema.js';
import NumberValidator from './src/NumberSchema.js';
import ObjectValidator from './src/ObjectSchema.js';

export default class Validator {
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringValidator([validator]);
  }

  number() {
    const validator = (value) => typeof value === 'number' || typeof value === 'bigint';
    return new NumberValidator([validator]);
  }

  object() {
    return new ObjectValidator();
  }
}
