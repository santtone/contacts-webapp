import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MaterialDesignModule} from './config/material-design.module';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactDetailsComponent} from './contact/contact-details/contact-details.component';
import {RouterModule} from '@angular/router';
import {RouteConfig} from './config/route-config';
import {ContactService} from './contact/services/contact.service';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactAddressToTextPipe} from './contact/pipes/contact-address-to-text.pipe';
import {HttpClientModule} from '@angular/common/http';
import {ContactHttpService} from './contact/services/contact-http.service';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactListItemComponent,
    ContactAddressToTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDesignModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(RouteConfig),
    NgPipesModule
  ],
  providers: [
    ContactService,
    ContactHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
