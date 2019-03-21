import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {Router} from '@angular/router';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = [];
  }

  ngOnInit() {
    this.contactService.get().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  onContactSelected(id: number): void {
    this.router.navigate(['contacts', id]);
  }

  onContactAdd() {
    this.router.navigate(['contacts/new']);
  }

}