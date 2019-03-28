import {Pipe, PipeTransform} from '@angular/core';
import {Contact} from '../contact';

@Pipe({
  name: 'contactAddressToText'
})
export class ContactAddressToTextPipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {
    let addressText = '';
    if (contact.streetAddress) {
      addressText += `${contact.streetAddress}, `;
    }
    if (contact.postCode) {
      addressText += `${contact.postCode} `;
    }
    if (contact.city) {
      addressText += contact.city;
    }
    return addressText;
  }
}
