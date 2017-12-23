export class User {

  public id: number;
  public firstName: String;
  public lastName: String;
  public infix: String;
  public email: String;
  public password: String;
  public study: String;
  public active: boolean;
  public moderator: Boolean;


  constructor(id?: number, firstName?: String, lastName?: String, infix?: String, email?: String, password?: String,
              study?: String, active?: boolean, moderator?: Boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.infix = infix;
    this.email = email;
    this.password = password;
    this.study = study;
    this.active = active;
    this.moderator = moderator;
  }
}
