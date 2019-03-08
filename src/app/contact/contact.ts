export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  postCode: number;

  constructor(id?: number, firstName?: string, lastName?: string, streetAddress?: string, city?: string, postCode?: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetAddress = streetAddress;
    this.city = city;
    this.postCode = postCode;
  }
}
