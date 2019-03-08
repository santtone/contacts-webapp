import {Routes} from '@angular/router';
import {ContactListComponent} from '../contact/contact-list/contact-list.component';
import {ContactDetailsComponent} from '../contact/contact-details/contact-details.component';

export const RouteConfig: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts'
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/:id',
    component: ContactDetailsComponent,
  }
];
