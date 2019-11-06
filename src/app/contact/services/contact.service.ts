import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'Sami', 'Anttonen', 'Käsityöläiskatu 4', 'Kouvola', 45100),
      new Contact(2, 'Joku', 'Toinen')
    ];
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getById(id: number): Contact {
    return this.contacts.find(c => c.id === id);
  }
}
