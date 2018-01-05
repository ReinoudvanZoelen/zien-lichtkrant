import {Location} from './location';

export class Institution {
  id: number;
  name: string;
  street: string;
  houseNumber: string;
  city: string;
  country: string;
  zipCode: string;
  email: string;
  active: boolean;
  phoneNumber: string;
  location: Location;
  url: string;

  constructor(active?: boolean, city?: string, country?: string, email?: string, houseNumber?: string, id?: number,
              location?: Location, name?: string, phoneNumber?: string, street?: string, url?: string, zipCode?: string) {
    this.active = active;
    this.city = city;
    this.country = country;
    this.email = email;
    this.houseNumber = houseNumber;
    this.id = id;
    this.location = location;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.street = street;
    this.url = url;
    this.zipCode = zipCode;
  }
}
