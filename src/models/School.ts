import {Location} from './Location';

export class School {
  public city: string;
  public country: string;
  public email: string;
  public houseNumber: string;
  public location: Location;
  public name: string;
  public phoneNumber: string;
  public street: string;
  public url: string;


  constructor(city?: string, country?: string, email?: string, houseNumber?: string, location?: Location, name?: string, phoneNumber?: string, street?: string, url?: string) {
    this.city = city;
    this.country = country;
    this.email = email;
    this.houseNumber = houseNumber;
    this.location = location;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.street = street;
    this.url = url;
  }
}
