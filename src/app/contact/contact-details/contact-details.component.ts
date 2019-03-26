import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {LoadingBarService} from '../../services/loading-bar.service';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private location: Location,
              private loading: LoadingBarService) {
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
    const observable = !this.contact.id ? this.contactService.create(this.contact) : this.contactService.update(this.contact);
    this.loading.start();
    observable.subscribe(() => this.location.back());
  }

}
