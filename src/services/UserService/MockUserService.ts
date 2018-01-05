import {IUserService} from './IUserService';
import {User} from '../../models/user';

export class MockUserService {
  private Users: User[] = [];

  constructor() {
    this.Users.push(new User(0, 'Patrick', 'de', 'Beer', 'patrick@fontys.nl',
      'demo1234', 'Teacher', true, true));
    this.Users.push(new User(1, 'Bono', '', 'IJpelaar', 'bijpelaar@gmail.com',
      'demo1234', 'Software', true, true));
    this.Users.push(new User(2, 'Jan Jans', 'en de', 'Kinderen', 'janjans@gmail.com',
      'demo1234', 'Technology', true, false));
    this.Users.push(new User(3, 'Eva', '', 'Jinek', 'ejinek@rtl.nl',
      'demo1234', 'Media', true, false));
    this.Users.push(new User(4, 'Chris', 'de', 'Leeuw', 'cdleeuw@gmail.com',
      'demo1234', 'Business', true, false));
    this.Users.push(new User(5, 'Chief', '', 'Nonactief', 'reinoudvanzoelen@gmail.com',
      'mypass', 'Software', false, false));
  }

  login(username: string, password: string): User {
    return undefined;
  }

  post(object: User): boolean {
    const startSize = this.Users.length;
    this.Users.push(object);
    return !(this.Users.length === startSize);
  }

  put(object: User): boolean {
    return undefined;
  }

  get(id: number): User {
    return undefined;
  }

  getAll(): User[] {
    console.log(this.Users);
    return this.Users;
  }

  delete(id: number): boolean {
    return undefined;
  }

}
