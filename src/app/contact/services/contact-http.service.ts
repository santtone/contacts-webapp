import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  private readonly url = environment.contactsEndpointUrl;

  constructor(private http: HttpClient) {
  }

  get(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }
}
