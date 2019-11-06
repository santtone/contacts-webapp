import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import {ContactService} from './contact/services/contact.service';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {RoutingModule} from './config/routing/routing.module';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgPipesModule} from 'ngx-pipes';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    RoutingModule,
    RouterModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgPipesModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
