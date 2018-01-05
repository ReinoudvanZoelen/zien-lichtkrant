export class User {
  id: number;
  firstName: String;
  lastName: String;
  infix: String;
  email: String;
  password: String;
  study: String;
  active: Boolean;
  isModerator: Boolean;

  constructor(id?: number, firstName?: String, infix?: String, lastName?: String, email?: String, password?: String,
              study?: String, active?: Boolean, isModerator?: Boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.infix = infix;
    this.email = email;
    this.password = password;
    this.study = study;
    this.active = active;
    this.isModerator = isModerator;
  }

  getName() {
    if (this.infix == null || this.infix === '' || this.infix.length === 0) {
      return this.firstName + ' ' + this.lastName;
    }
    return this.firstName + ' ' + this.infix + ' ' + this.lastName;
  }
}
