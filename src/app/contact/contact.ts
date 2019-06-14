import {Storable} from '../config/state-management/storable';

export class Contact implements Storable {
  id: number;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  postCode: number;
  age: number;

  constructor(id?: number, firstName?: string, lastName?: string, streetAddress?: string, city?: string, postCode?: number, age?: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetAddress = streetAddress;
    this.city = city;
    this.postCode = postCode;
    this.age = age;
  }
}
