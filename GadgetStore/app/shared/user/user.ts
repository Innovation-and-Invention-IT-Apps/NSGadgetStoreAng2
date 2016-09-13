var validator = require("email-validator");

export class User {
  email: string;
  passcode: string;
  isValidEmail() {
    return validator.validate(this.email);
  }
}