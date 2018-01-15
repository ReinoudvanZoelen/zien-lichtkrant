import { Location } from "models/location";

export class Institution {
  active: boolean;
  city: string;
  country: string;
  email: string;
  houseNumber: string;
  id: number;
  location: Location;
  name: string;
  phoneNumber: string;
  street: string;
  url: string;
  zipCode: string;

  constructor(active?: boolean, city?: string, country?: string, email?: string, houseNumber?: string, id?: number, location?: Location, name?: string, phoneNumber?: string, street?: string, url?: string, zipCode?: string) {
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
