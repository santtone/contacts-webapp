import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactActionService} from './contact-action.service';
import {StoreService} from '../../config/state-management/store-service';

@Injectable({
  providedIn: 'root'
})
export class ContactStoreService extends StoreService<Contact> {

  constructor(contactActions: ContactActionService) {
    super([], contactActions);
  }
}
