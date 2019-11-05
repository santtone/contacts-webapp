import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  filter: string;

  constructor(private contactService: ContactService) {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
