import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialDesignModule} from './config/material-design.module';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactDetailsComponent} from './contact/contact-details/contact-details.component';
import {RouterModule} from '@angular/router';
import {RouteConfig} from './config/route-config';
import {ContactService} from './contact/services/contact.service';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactAddressToTextPipe} from './contact/pipes/contact-address-to-text.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ContactHttpService} from './contact/services/contact-http.service';
import {NgPipesModule} from 'ngx-pipes';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {NavigationBarComponent} from './layout/navigation-bar/navigation-bar.component';
import {ToolbarComponent} from './layout/toolbar/toolbar.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LoadingBarService} from './services/loading-bar.service';
import {TextIconModule} from './utils/text-icon/text-icon.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactListItemComponent,
    ContactAddressToTextPipe,
    NavigationBarComponent,
    ToolbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDesignModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RouteConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgPipesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    TextIconModule
  ],
  providers: [
    ContactService,
    ContactHttpService,
    LoadingBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
