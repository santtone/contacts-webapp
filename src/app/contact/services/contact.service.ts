import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly contacts: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  constructor(private httpService: ContactHttpService) {
  }

  getContacts(): Observable<Contact[]> {
    this.reload();
    return this.contacts;
  }

  getById(id: number): Observable<Contact> {
    this.reload();
    return this.contacts
      .pipe(
        map(contacts => {
          return contacts.find(c => c.id === id);
        })
      );
  }

  private reload() {
    if (this.contacts.getValue().length > 0) {
      return;
    }
    this.httpService.get()
      .pipe(
        tap((contacts) => {
          this.contacts.next(contacts);
        })
      ).subscribe();
  }
}
