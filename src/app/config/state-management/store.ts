import {BehaviorSubject} from 'rxjs';

export class Store<T> {

  state: BehaviorSubject<T>;
  private readonly initialState: T;

  constructor(initialState: T) {
    this.initialState = initialState;
    this.state = new BehaviorSubject(this.initialState);
  }

  getState(): T {
    return this.state.getValue();
  }

  setState(nextState: T): void {
    this.state.next(nextState);
  }

  // Reset state back to initial state
  reset(): void {
    this.state.next(this.initialState);
  }
}
