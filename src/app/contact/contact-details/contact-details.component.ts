import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {skipWhile} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'ca-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  contactForm: FormGroup;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private formBuilder: FormBuilder) {
    this.contact = new Contact();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getById(Number(id))
      .pipe(
        skipWhile(c => !c)
      ).subscribe(contact => {
      this.contact = contact;
      this.initializeForm();
    });
  }

  onSave() {
    console.log(this.contactForm.value);
  }

  private initializeForm() {
    this.contactForm = this.formBuilder.group(
      {
        firstName: [this.contact.firstName, [Validators.required, Validators.maxLength(20), this.noNumbersValidator]],
        lastName: [this.contact.lastName, [Validators.required]],
        streetAddress: [this.contact.streetAddress],
        city: [this.contact.city],
        postCode: [this.contact.postCode, [Validators.pattern('^[0-9]*$')]],
      }
    );
  }

  private noNumbersValidator(control: FormControl): ValidationErrors | null {
    const containsNumber = control.value.match(/\d+/g);
    if (!containsNumber) {
      return null;
    }
    return {
      containsNumber: true
    };
  }

}
