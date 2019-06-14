import {EventEmitter} from '@angular/core';
import {Storable} from './storable';

export class ActionService {
  getEvent: EventEmitter<Storable[]> = new EventEmitter();
  createEvent: EventEmitter<Storable> = new EventEmitter();
  updateEvent: EventEmitter<Storable> = new EventEmitter();
  deleteEvent: EventEmitter<Storable> = new EventEmitter();
}
