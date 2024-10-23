export default class StringValidator {
    constructor(validator) {
        this.validators = [...validator];
    }

    isValid(value) {
        return this.validators.every((validator) => validator(value) === true);
    }

    length(minLength, maxLength = Infinity) {
        const validator = (value) => {
            if (value.length >= minLength && value.length <= maxLength) {
                return true;
            }
            return false;
        };
        return new StringValidator([...this.validators, validator]);
    }
}