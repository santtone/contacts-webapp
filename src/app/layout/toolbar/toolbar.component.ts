import {Component, OnInit} from '@angular/core';
import {Language} from '../../enums/language.enum';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  selectedLanguage: string;
  languages = Object.keys(Language);

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      this.selectedLanguage = Object.keys(Language).find(l => Language[l] === this.translate.currentLang);
    });
  }

  changeLanguage(selectedLanguage: string) {
    this.translate.use(Language[selectedLanguage]);
  }

}
