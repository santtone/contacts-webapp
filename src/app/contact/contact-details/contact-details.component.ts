import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {LoadingBarService} from '../../services/loading-bar.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {skipWhile} from 'rxjs/operators';
import {__values} from 'tslib';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  contactForm: FormGroup;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private location: Location,
              private loading: LoadingBarService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.contact = new Contact();
      this.initContactForm();
    } else {
      this.contactService.getById(Number(id))
        .subscribe(contact => {
          this.contact = contact;
          this.initContactForm();
        });
    }
  }

  onSave() {
    const contact: Contact = Object.assign(this.contact, this.contactForm.value);
    console.log(contact);
    /*    const observable = !this.contact.id ? this.contactService.create(this.contact) : this.contactService.update(this.contact);
        this.loading.start();
        observable.subscribe(() => this.location.back());*/
  }

  private initContactForm() {
    console.log(this.contact);
    this.contactForm = this.formBuilder.group(
      {
        firstName: [this.contact.firstName, Validators.required],
        lastName: [this.contact.lastName, Validators.required],
        streetAddress: [this.contact.streetAddress],
        postCode: [this.contact.postCode, Validators.pattern('^[0-9]*$')],
        city: [this.contact.city]
      }
    );
  }
}
