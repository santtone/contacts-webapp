import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {

  private readonly unsubscribe = new Subject();
  contacts: Contact[];
  searchText: string;

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = [];
  }

  ngOnInit() {
    this.contactService.get()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }

  onContactSelected(id: number): void {
    this.router.navigate(['contacts', id]);
  }

  onContactAdd() {
    this.router.navigate(['contacts/new']);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
