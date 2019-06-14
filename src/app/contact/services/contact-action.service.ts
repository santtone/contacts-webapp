import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from '../contact';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ContactHttpService} from './contact-http.service';
import {finalize, skipWhile, switchMap, take, tap} from 'rxjs/operators';
import {LoadingBarService} from '../../services/loading-bar.service';
import {ActionService} from '../../config/state-management/action-service';

@Injectable({
  providedIn: 'root'
})
export class ContactActionService extends ActionService {


  constructor(private contactHttpService: ContactHttpService, private loading: LoadingBarService) {
    super();
  }

  find(): void {
    this.reloadContacts();
  }

  create(contact: Contact): Observable<any> {
    this.loading.start();
    return this.contactHttpService.post(contact)
      .pipe(
        finalize(() => this.loading.stop()),
        tap(created => {
          this.createEvent.next(created);
        }));
  }

  update(contact: Contact): Observable<any> {
    this.loading.start();
    return this.contactHttpService.put(contact)
      .pipe(
        finalize(() => this.loading.stop()),
        tap(updated => {
          this.updateEvent.emit(updated);
        }));
  }

  delete(contact: Contact): Observable<any> {
    this.loading.start();
    return this.contactHttpService.delete(contact.id)
      .pipe(
        finalize(() => this.loading.stop()),
        tap(() => {
          this.deleteEvent.next({id: contact.id});
        })
      );
  }

  private reloadContacts() {
    this.loading.start();
    this.contactHttpService.get()
      .pipe(
        take(1),
        tap((contacts) => {
          this.getEvent.emit(contacts);
        }),
        finalize(() => this.loading.stop())
      ).subscribe();
  }
}
