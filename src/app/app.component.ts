import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;

  constructor(private translate: TranslateService) {
    this.title = 'Contacts webapp';
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('fi');
    this.translate.use('fi');
  }
}
