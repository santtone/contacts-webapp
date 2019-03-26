import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.endpointUrl}/contacts`;
  }

  get(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url)
      .pipe(
        map(contacts => {
          return contacts.map(c => {
            c.age = c.age ? c.age : Math.floor((Math.random() * 50) + 20);
            return c;
          });
        })
      );
  }

  post(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url, contact);
  }

  put(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.url}/${contact.id}`, contact);
  }
}
