import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ContactHttpService} from './contact-http.service';
import {skipWhile, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: BehaviorSubject<Contact[]>;

  constructor(private contactHttpService: ContactHttpService) {
    this.contacts = new BehaviorSubject([]);
  }

  get(): Observable<Contact[]> {
    if (!this.contacts.getValue().length) {
      this.reloadContacts();
    }
    return this.contacts;
  }

  getById(id: number): Observable<Contact> {
    return this.contacts
      .pipe(
        switchMap(contacts => {
          const contact = contacts.find(c => c.id === id);
          if (!contact) {
            this.reloadContacts();
          }
          return of(contact);
        })
      );
  }

  private reloadContacts() {
    this.contactHttpService.get()
      .pipe(tap((contacts) => this.contacts.next(contacts)))
      .subscribe();
  }
}
