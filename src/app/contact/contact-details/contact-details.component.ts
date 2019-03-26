import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  private readonly unsubscribe = new Subject();
  contact: Contact;
  contactForm: FormGroup;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private location: Location,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.contact = new Contact();
      this.initContactForm();
    } else {
      this.contactService.getById(Number(id))
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(contact => {
          this.contact = contact;
          this.initContactForm();
        });
    }
  }

  onSave() {
    const contact: Contact = Object.assign(this.contact, this.contactForm.value);
    const observable = !contact.id ? this.contactService.create(contact) : this.contactService.update(contact);
    observable.subscribe(() => this.location.back());
  }

  onDelete() {
    const contact: Contact = Object.assign(this.contact, this.contactForm.value);
    this.contactService.delete(contact).subscribe(() => this.location.back());
  }

  private initContactForm() {
    if (!this.contact) {
      return;
    }
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

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
