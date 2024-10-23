export default class ObjectValidator {
  constructor(shape) {
    this.validators = shape;
  }

  isValid(valueProp) {
    return Object.entries(valueProp).every(([key, value]) => {
      const validator = this.validators[key];
      console.log(validator.isValid(value), 'validator.isValid(value)');
      return validator.isValid(value);
    });
  }

  shape(mask) {
    return new ObjectValidator(mask);
  }
}
