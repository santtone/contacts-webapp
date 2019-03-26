import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ContactHttpService} from './contact-http.service';
import {finalize, skipWhile, switchMap, take, tap} from 'rxjs/operators';
import {LoadingBarService} from '../../services/loading-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly contacts: BehaviorSubject<Contact[]>;

  constructor(private contactHttpService: ContactHttpService, private loading: LoadingBarService) {
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
        }),
        skipWhile((c) => !c)
      );
  }

  create(contact: Contact): Observable<any> {
    this.loading.start();
    return this.contactHttpService.post(contact)
      .pipe(
        finalize(() => this.loading.stop()),
        tap(created => {
          const contacts = this.contacts.getValue();
          contacts.push(created);
          this.contacts.next(contacts);
        }));
  }

  update(contact: Contact): Observable<any> {
    this.loading.start();
    return this.contactHttpService.put(contact)
      .pipe(
        finalize(() => this.loading.stop()),
        tap(updated => {
          const contacts = this.contacts.getValue();
          const index = contacts.indexOf(contacts.find(c => c.id === contact.id));
          contacts[index] = updated;
          this.contacts.next(contacts);
        }));
  }

  delete(contact: Contact): Observable<any> {
    this.loading.start();
    return this.contactHttpService.delete(contact.id)
      .pipe(
        finalize(() => this.loading.stop()),
        tap(() => {
          let contacts = this.contacts.getValue();
          contacts = contacts.filter(c => !(c.id === contact.id));
          this.contacts.next(contacts);
        })
      );
  }

  private reloadContacts() {
    this.loading.start();
    this.contactHttpService.get()
      .pipe(
        take(1),
        tap((contacts) => this.contacts.next(contacts)),
        finalize(() => this.loading.stop())
      ).subscribe();
  }
}
