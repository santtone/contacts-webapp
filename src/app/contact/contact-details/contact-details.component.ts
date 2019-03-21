import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getById(Number(id)).subscribe(contact => {
      this.contact = contact;
    });
  }

}
