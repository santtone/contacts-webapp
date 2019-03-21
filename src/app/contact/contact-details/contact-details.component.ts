import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {take} from 'rxjs/operators';

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
    if (!id) {
      this.contact = new Contact();
    } else {
      this.contactService.getById(Number(id)).subscribe(contact => {
        this.contact = contact;
      });
    }
  }

  onSave() {
    // if contact has id --> update, else create
    console.log(this.contact);
    console.log('TODO');
  }

}
