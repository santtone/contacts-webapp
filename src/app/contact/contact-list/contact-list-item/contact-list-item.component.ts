import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../contact';

@Component({
  selector: 'ca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() selected: EventEmitter<number>;

  constructor() {
    this.selected = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  onSelect() {
    this.selected.emit(this.contact.id);
  }

}
