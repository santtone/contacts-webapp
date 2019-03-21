import {Pipe, PipeTransform} from '@angular/core';
import {Contact} from '../contact';

@Pipe({
  name: 'contactAddressToText'
})
export class ContactAddressToTextPipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {
    return `${contact.streetAddress}, ${contact.postCode} ${contact.city}`;
  }

}
