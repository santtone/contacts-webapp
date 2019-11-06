import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  ErrorStateMatcher,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {ContactService} from './contact/services/contact.service';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {RoutingModule} from './config/routing/routing.module';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgPipesModule} from 'ngx-pipes';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {ContactDetailsComponent} from './contact/contact-details/contact-details.component';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailsComponent
  ],
  imports: [
    HttpClientModule,
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
    NgPipesModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    ContactService,
    ContactHttpService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
