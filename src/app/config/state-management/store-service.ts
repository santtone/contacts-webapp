import {ActionService} from './action-service';
import {Store} from './store';
import {Storable} from './storable';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

/*
* StoreService is base class for services that need to be linked to the State Management Store (Store<T>)
* Stores Generic objects extended from Storable (<T extends Storable>) as an array (Store<T[]>).
* */
export class StoreService<T extends Storable> extends Store<T[]> {

  constructor(initialStoreState: T[], actions: ActionService) {
    super(initialStoreState);

    actions.getEvent.subscribe((ss: T[]) => {
      const sortables = this.getState();
      ss.forEach(s => {
        const i = sortables.findIndex((f) => f.id === s.id);
        if (i === -1) {
          sortables.push(s);
        } else {
          sortables[i] = s;
        }
      });
      this.setState(sortables);
    });

    actions.updateEvent.subscribe((s: T) => {
      this.setState(this.getState().map((c => {
        return c.id === s.id ? s : c;
      })));
    });

    actions.createEvent.subscribe((s: T) => {
      this.setState([...this.getState(), s]);
    });

    actions.deleteEvent.subscribe((s: T) => {
      this.setState(this.getState().filter((f) => f.id !== s.id));
    });
  }

  get(): Observable<T[]> {
    return this.state.pipe(map(ss => [].concat(ss)));
  }

  getById(id: number | string): Observable<T> {
    return this.get().pipe(
      map(ss => {
        return ss.find(s => s.id == id);
      }));
  }
}



