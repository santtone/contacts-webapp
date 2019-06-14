import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {Router} from '@angular/router';
import {ContactActionService} from '../services/contact-action.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ContactStoreService} from '../services/contact-store.service';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {

  private readonly unsubscribe = new Subject();
  contacts: Contact[];
  searchText: string;

  constructor(private contactActions: ContactActionService, private contactStore: ContactStoreService, private router: Router) {
    this.contacts = [new Contact(1, 'asdasd', 'adsasd')];
  }

  ngOnInit() {
    this.contactStore.get()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(contacts => {
        console.log(contacts);
        if (!contacts.length) {
          this.contactActions.find();
        }
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
