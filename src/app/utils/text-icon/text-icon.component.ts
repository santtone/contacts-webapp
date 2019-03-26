import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ca-text-icon',
  templateUrl: './text-icon.component.html',
  styleUrls: ['./text-icon.component.scss']
})
export class TextIconComponent implements OnInit, OnChanges {

  @Input() text: string | string[];
  @Input() size = 40;
  @Input() color = '#fff';
  @Input() backgroundColor = '#4f8ccf';

  iconText: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const text: SimpleChange = changes.text;
    if (text) {
      let value = text.currentValue;
      if (!Array.isArray(value)) {
        value = [value];
      }
      this.iconText = value.map(p => p ? p.charAt(0).toUpperCase() : '').join('');
    }
  }

}
