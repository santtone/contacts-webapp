import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.title = 'Contacts app';
    this.registerCustomIcons();
  }

  ngOnInit(): void {

  }

  private registerCustomIcons() {
    this.iconRegistry.addSvgIcon('trimble-logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/trimble-logo.svg'));
  }

}
