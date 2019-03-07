import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Contacts app';
  }

  ngOnInit(): void {
    console.log('On component init');
  }

  onPushMe(event: MouseEvent): void {
    console.log(event);
  }

}
